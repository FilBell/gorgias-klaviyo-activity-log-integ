const BASE = 'https://gorgias-klaviyo-activity-log-integ.vercel.app/icons';

const EVENT_ICONS = {
  'Opened Email':    `${BASE}/email.png`,
  'Clicked Email':   `${BASE}/email.png`,
  'Received Email':  `${BASE}/inbox.png`,
  'Placed Order':    `${BASE}/bag.png`,
  'Ordered Product': `${BASE}/bag.png`,
  'Fulfilled Order': `${BASE}/gift.png`,
  'Opened Ticket':   `${BASE}/letter.png`,
  'Resolved Ticket': `${BASE}/letter.png`,
  'Skio: Subscription Renewed': `${BASE}/refresh.png`,
};

function iconForType(type) {
  if (EVENT_ICONS[type]) return EVENT_ICONS[type];
  if (type.startsWith('AfterShip:')) return `${BASE}/gift.png`;
  return `${BASE}/clipboard.png`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: 'email parameter required' });
  }

  const API_KEY = process.env.KLAVIYO_API_KEY;
  const REVISION = '2026-01-15';
  const headers = {
    Authorization: `Klaviyo-API-Key ${API_KEY}`,
    revision: REVISION,
  };

  // Step 1: resolve email → Klaviyo profile ID
  const profileRes = await fetch(
    `https://a.klaviyo.com/api/profiles/?filter=equals(email,"${email}")`,
    { headers }
  );
  const profileData = await profileRes.json();

  if (!profileData.data?.length) {
    return res.json({ found: false, events: [] });
  }

  const profile = profileData.data[0];
  const profileId = profile.id;
  const firstName = profile.attributes.first_name ?? '';
  const lastName = profile.attributes.last_name ?? '';

  // Step 2: fetch last 20 events with metric names
  const eventsRes = await fetch(
    `https://a.klaviyo.com/api/events/?filter=equals(profile_id,"${profileId}")&sort=-datetime&page[size]=20&include=metric`,
    { headers }
  );
  const eventsData = await eventsRes.json();

  // Build metric name index from included resources
  const metricNames = {};
  for (const item of eventsData.included ?? []) {
    if (item.type === 'metric') {
      metricNames[item.id] = item.attributes.name;
    }
  }

  // Format events
  const events = (eventsData.data ?? []).map((event) => {
    const metricId = event.relationships?.metric?.data?.id;
    const props = event.attributes.event_properties ?? {};
    const dt = event.attributes.datetime ?? '';
    const date = dt
      ? new Date(dt).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })
      : '';

    const type = metricNames[metricId] ?? 'Unknown';
    const detail =
      props.Subject ??
      props['Campaign Name'] ??
      props['Flow Name'] ??
      props.flow_message_name ??
      props.name ??
      '';

    return { date, type, detail, icon: iconForType(type) };
  });

  return res.json({
    found: true,
    name: `${firstName} ${lastName}`.trim(),
    klaviyo_id: profileId,
    events,
  });
}
