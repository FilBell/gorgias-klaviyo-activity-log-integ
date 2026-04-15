const ICON_EMAIL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAflBMVEVHcEzM1t3h6O3h6O2drbizwMnh6O3h6O29ydHM1t3h6O3b4+mZqrWZqrXM1t2ZqrXh6O3J09tmdX+crbhufIasu8Sjsr2zvcS2w8ymtb+5xc69ydGrusOntsC0wcrP2d/Cy9J9i5SfsLqMmaHZ4ebK0tipuMK8yNG5xs6rtr0fjnCYAAAADnRSTlMAYGDvzyDPIGC/v8+/70mTZlgAAAGISURBVHhe7dHHbutADEZhypHtyHZmVFxLarnl/V8w9gDOWRDzL6SsAp2tBh9E0n5vY2OTRT2gxcRSNp/VA5vNk3NXD+7uKi0B+rc0uwcY0r2tnn7CeVpZjEr6395afyonRotSauldOQlC0pBwEiSlVo+GE22LlIFeAPLO1hokDWmnsYCkIe0EC0gC0s6hCRcISS779SPrbEJIkJJa2gknQUKSEA4QkhpNOEBIYtnCAULykHSApASkHSAvAUkHyEviat4BklJL64wDpKS1g5wDpKSdGw1HQkgu6QBpSTtAWtIOkJe6m5Rz3gAUtIkRyTnqj7yD5B21I+8wnZ9LXM05Gzbu9nx7IiAcbuccHgkI51s6P9ep5zOfkHIQDlJ8PJ5Ox0d2nJGAcHAJJyNZ3kHCyUsmHCQcLwF5h/bdjen+hqAkyzupZn+4WN2ffw2Ek4BwRFqy3g4SEE5/yZzTU7IKZ4hUWYEzRCrMSpz+Umlm0wecvtLD1K5SidNPKi9OqqiGOFVhv7axsS9m0ONDiAMPnwAAAABJRU5ErkJggg==';
const ICON_INBOX = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAkFBMVEVHcEzM1t3M1t29ydFVrO6zwMmdrbhVrO5VrO7h6O1VrO5VrO6ZqrVVrO7h6O3h6O3h6O3b4+nh6O2ZqrVVrO6ZqrXh6O3M1t2su8S0wcrJ09ujsr2Kw+6t0u2crbi9ydGrusOmtb+2w8zP2d+fsLqntsC5xc5ntO6puMKbyu68yNG5xs611e3Y5O1esO5VrO5S35NLAAAAFXRSTlMAYL9g3yDPUJ8gEGC/v79g78/P74C5NHEfAAABr0lEQVR42u3T2U7DMBRF0dPSgXkOLgFa5hny/39HIIKjcqm3BUi8sKU8OLaWYidRtvGg+WgwViZwmrm+Lw3moYG+2WrzqT+H9A/9Q38ObTRF7fNvUdaGqOUyaKzfkdYEscQOS+xsbR7MdZx3TuZXb26pa2XXNy2x43ZX3pztbkSSndj2q7TjMUh2QjvSkkck2Yktaf2QJXYO11VVLLFTVS3EEjsdhBI7HcQSO5WOQCp0jlSDVOjUSiSVOUmJpLvnprl5zDpndWqhIIWe2ivnTFKbEkvodBBJ7BgCCRxDIIFjCCRwDIFEjiGQyDEEEjmGQCLHEEjkGAKJHEMgkWMIJHIMgUSOoShNLX3tXKYiaFJVloIDTxQcS9HhM7Lj3cV98VuzM/GJx3Oe4Hdkx+8uOl4Uoeh8SKcXHXNx6qkgGQqOperqeja7vvIZL5C0wPHYeSpKhsKkJTuZxYpTUbKzWFLGaTufvjPT+5RyknJOW31+Nm2V24c6paykjBPKSUKHJUPssCRwiiX1wSmU+urZ+YnUk0bssDSSNNwjh6W9oV6lETgojYbq6vV/4vR7ansBDY+sMtvP350AAAAASUVORK5CYII=';
const ICON_BAG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAmVBMVEVHcEz0kAz0kAz0kAz0kAz0kAz0kAzdLkR0Tqr/zE3dLkT/zE3/zE3/zE3/zE3/zE3/zE3dLkT0kAz0kAz0kAz0kAz0kAz0kAz/zE3/zE3/zE3/zE3/zE10TqrdLkT/zE30kAzmUy+ofYf5rkvjTEbfOEXufUmbQoSISJfWMErmVkbqaUf0m0r1mBTsc0j3oyD8vT3+yEn3pUv8KBxrAAAAHXRSTlMAQL/PgBAwn5/Pz78QMIBgQBBgUO9wIK/vUK8gcN6XGI0AAAGoSURBVHja7dLZbsIwEAVQkw1oEkIJIWxZWLuv//9xnTtElR1cZXmo1Mr3ZRTZc4zHiHo8xyo5luOJ/pnZpRR71pNZWGUt1qKPE8/Lq8zjHteqetNkQEnS6rPz9eKS47iiiuuUnLjjfPhetqe8oM236zYnix1XKHFZsjoPCE5d6jombtD8Az0+oL3D+x3diiOdEE78guNPQsHRb3d1K+73EdG4kDKOfhx1KrRJL+Pe+EUt/kazG8cmeijBmlgti6ssV3pooIcGWIuq3vV2Stmuq8+oK/RWcCaBqBJMCo7ym25uGdpRRYZDodZd+fLB41VeKhzz7eQ55SSQk1NFX55DkOvuHT2HQCgJWPJliAQ4qOiDoNQndk6qA6k2JghwUNEHQakHNBxzUU/IF5aghhyx/5wDqoUnHraGzth+0kEBP2Vr6JN2P+c6SKwx7tYQjn3VQ1usdYIe9dD096H7B4b2dxdoNEKDVPeAqDZCGUnkZBlJtD/L0CJXklCbIZLgQEIfBLlCQm2GSIIDCX0QanWP2gy1iYEMZCADGchABjLQP4KaYiAD/VHoCzV1kmKtgTbmAAAAAElFTkSuQmCC';
const ICON_GIFT = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAARVBMVEVHcEzaL0faL0faL0faL0faL0faL0faL0faL0faL0faL0faL0faL0faL0faL0faL0f92Ij92Ij92Ij92Ij92Ij92Ij8q0BIqAMSAAAAFnRSTlMAIIBQYP+/MO+vEEDfj5/PYL//IM/v/5MDmAAAAQxJREFUeAHt1AXWrSAUhuGP2HZu8Mx/pqcLL3qXyN88K63XAvBRhJQK/6WkFFil6SwTWCUyOtNYkdNVobFCF3SVY1lGd2WFBVVJdxkWKXoqanjVBT0pLGnoTVsBEF1xD3cCQNXSmwYLJDn6HHlBT0WOvCeHhFdV0Ix09hSSZooKPh1t1sFDUADh/UIB5EeGREObNQKOYWQvmmGvccCNsczhoQtrrp2J94Z4upQs7w+xBQaOEeIBY5zQCI4T4t8civaxo/3+aAMy3hSJNmnjLSMXBy+aOXgBfyO052OnUAqlUAqlUAqlUArtD43hoRHvhvDQAIcNDVm4zBQWmgxmjA0JWYN/DePW0DjgGzsBdW/V34HExN8AAAAASUVORK5CYII=';
const ICON_LETTER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAvVBMVEVHcEzM1t3h6O2ZqrWdrbizwMnh6O3h6O29ydHM1t3h6O3b4+mZqrXh6O3dLkSsu8TNzNPdOk/aTmHcOU7goq7eRVnVgpHXbX3ZWGrZNkuqi5neUWTOwcrVPlLPt8DWeIfbQ1fQrLfSl6S7bH2zfIvgrriim6edoq7PUGPeaHnYQFXMTWC5o6/EXW7IVWe8hJK4usOZqrW0wcrh6O3fi5nJ09vM1t2jsr3gusPfdIPfl6Pgxc2mtb/h0djh3OKGuvcUAAAADnRSTlMAYGDvzyDPIGC/v8+/70mTZlgAAAHfSURBVHja7dFrU4JAFIDhQ1JGFkKA2lXN7H5bQaIs///P6giNp/XALjPLp8b3E8ueeWYXYNu2/9vOQWzQwQ4Utfdiw/bauXMUG3e0kjpxA3UA9uNG2ofDWRPO7BCEmDXgCAGCJBMHIZJMHIRIMnEEvJNk4rzDnCQTZw4pSSZOCmmFtMySJPlc0IsswbJS52ueIlQqfX+4RVFYsIlfrP1kyZwuGjnEpdB3153hqRYRrf2MOwXEpdD9m7/IVi4VMieHuDR15SJ0ZJk7CDFp6buazriDEJM+XW1TcghiUqSH7skhaFN6c/X55BC0KZ26NSKHIFmqD6HDIZJqQ+QQJEs3NZwTcghi0okeeiSHICa96KEJOQQx6VUPPaVaCPO0d3tIa0HdZx103a0DdbX/7UIILgF3hJhoDiRKJGAOdnuhcu4ExiTgDg6NFU5w/jukgtYjw2roisYqIGlgUOX0pUEObW57x+XOQBrlEN/0gjLn2JOHOcS3LkcKh49D6QbdjjlVEvDXJA34d66UoNrBhhv/XSGBwsHGo/W1LnGpkIA5cl4vZ4IePislUDvYeT8IeviVNRI43NHHJQcsckwkC8DWO3rJBoDdVu4YSa1dWEk2OkaSjU6e5Zg4jgXbtv3bfgBCBGD59t8fAQAAAABJRU5ErkJggg==';
const ICON_REFRESH = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAARVBMVEVHcEw7iMM7iMM7iMM7iMM7iMP///9Hj8c7iMPa6fRsptJgns6dxOG20unz+PvC2uyFtdqRvN1Ul8upy+XO4fDn8Ph4rdanxBWlAAAABnRSTlMAv+9gIM+kpfmZAAABl0lEQVR4XtXY226DMAwGYCjFds4Bur3/o05dx8xFTpotVfsf4EMJtkGenllmEmReplfuKwmz3r+dG4lze0orKWSdpoVUskyzDjRPpJR3QQaVIIhOCYKYlSAArwVBQCUIDCpBEJ0SBDGPQnsOBlrxQ5BN0E3ALmQfMBKDbQgPGEx0LQgNqEAuMiA5GrIjuOzuucZf/3EF0mbtHwvSAsejoEW4foyTNK1lB0VjJLEzNNi2VIZ2OOOGRm0AwCKUubHbw58rJRehcEI48DlyH9+3VYTOYkzUz+erA0wRgp9sXYYLrglZIbRrQfSvoa0JGR4Q7XAzmWpBXiu37iD8JFRbhCs3Qh3yJ5SLEF4GRI5Qhxyc2StjxF8eWYd4sKfOlxZf7dt1wLYhNNCAHDsPakIuQh1CDxzbhHKEMoTWbgkuOagFeRiNoQaEYdiJWIAEfyIMSf5E5NDBjuRoD8uA4LLTLyN4/SbknTjjBdlPv0XkEKFRggiDEOJ4LYhyVILIRSWI0Lx3gSCP2pJFbe2jtYhSW43pLevU1odfsmCbZK4bwUkAAAAASUVORK5CYII=';
const ICON_CLIPBOARD = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAPFBMVEVHcEzM1t3M1t3M1t3M1t3M1t2Zoqg9REgpLzPM1t3M1t3M1t3BaU/BaU/BaU/CcFjgtKf////M1dqZqrWLZiLOAAAADnRSTlMAIJ/v/zD///8QUN9Q360w504AAADiSURBVHgB7dhVgoUwEERRIIVrw/7XOoI7HRl9fRdwgKS+8J7yAwWowPcsCxX6VGjn+ApRnCRxBOVbQQGipC9CYAUpxAMUQ9k4KZCMAZ52WY6lBZrLM6aDVcunreNJOVYth70uZ57Luun6t90BRVn11WBUDZXFiVNNcaG+o1SaQeUBqsyg6s9ADRGBERE1txDxIfprELPfBgnUdie1BlB3mjPoxz6Nn+zovtbw+o99I2T/abKjv78j2ZHsSHYkUOvqsLvT3EPmnyY7aohdcwMZ9Beg0swpD1BhBhWnP1m0KxfnHV+T0IbfZ3ihAAAAAElFTkSuQmCC';

const EVENT_ICONS = {
  'Opened Email':    ICON_EMAIL,
  'Clicked Email':   ICON_EMAIL,
  'Received Email':  ICON_INBOX,
  'Placed Order':    ICON_BAG,
  'Ordered Product': ICON_BAG,
  'Fulfilled Order': ICON_GIFT,
  'Opened Ticket':   ICON_LETTER,
  'Resolved Ticket': ICON_LETTER,
  'Skio: Subscription Renewed': ICON_REFRESH,
};

const EVENT_EMOJIS = {
  'Opened Email':    '📧',
  'Clicked Email':   '📧',
  'Received Email':  '📥',
  'Placed Order':    '🛍️',
  'Ordered Product': '🛍️',
  'Fulfilled Order': '🎁',
  'Opened Ticket':   '📬',
  'Resolved Ticket': '✅',
  'Skio: Subscription Renewed': '🔄',
};

function iconForType(type) {
  if (EVENT_ICONS[type]) return EVENT_ICONS[type];
  if (type.startsWith('AfterShip:')) return ICON_GIFT;
  return ICON_CLIPBOARD;
}

function emojiForType(type) {
  if (EVENT_EMOJIS[type]) return EVENT_EMOJIS[type];
  if (type.startsWith('AfterShip:')) return '📦';
  return '📋';
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

    return { date, type, detail, icon: iconForType(type), emoji: emojiForType(type) };
  });

  return res.json({
    found: true,
    name: `${firstName} ${lastName}`.trim(),
    klaviyo_id: profileId,
    events,
  });
}
