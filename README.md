# gorgias-klaviyo-activity-log-integ

> A sidebar widget inside Gorgias showing a customer's recent Klaviyo activity —
> emails opened and clicked, orders placed, subscription renewals — so agents
> have context without opening Klaviyo.

## What it is and why it exists

An agent answering a ticket often needs to know what the customer has recently
received and done: did they get the dispatch email, did they open it, have they
ordered since, did their subscription renew. This renders that timeline in the
Gorgias sidebar instead of requiring a second tab and a Klaviyo login.

Single Vercel serverless function, `api/activity.js`, called by the Gorgias
sidebar. Event icons are inlined as base64 data URIs so the widget renders with
no external asset requests.

## Ownership

| | |
| --- | --- |
| **Built by** | Fil Bell, ~April 2026 |
| **Current owner** | Fil Bell |
| **Backup owner** | _unassigned — needs filling in_ |
| **Escalate to** | _to be set_ |
| **Who consumes the output** | Customer care agents, per ticket |

## How it runs

| | |
| --- | --- |
| **Trigger** | On demand — the Gorgias sidebar calls the endpoint. **No cron, no scheduled job.** |
| **Entry point** | `api/activity.js` |
| **Runtime** | Vercel serverless, `maxDuration: 10` |
| **Hosting** | Vercel |
| **Manual test** | Open a Gorgias ticket, or call the endpoint directly with a customer email |

## What it reads and writes

| Direction | System | Notes |
| --- | --- | --- |
| Reads | Klaviyo API | profile + recent events for one customer |
| Writes | nothing | fully read-only |

This job changes no state anywhere. Failure degrades the sidebar; it cannot
corrupt data.

## Secrets and access

Set in **Vercel** (Settings → Environment Variables), not GitHub — there is no
GitHub Actions workflow in this repo.

| Secret | Stored as | Notes |
| --- | --- | --- |
| Klaviyo private API key | Vercel env var | needs read scope on Profiles and Events |

> The Klaviyo key must be recorded in the shared password manager. It exists only
> in Vercel today, and Vercel env vars are as unreadable after the fact as GitHub
> secrets are.

## Important flags and gotchas

- **This repo is currently PUBLIC and should be private.** It contains no
  credentials — that was verified — but it is internal Heights tooling with no
  reason to be world-readable, and public-by-default is how the Okendo key in
  `heights-review-tool` ended up exposed.
- No `.gitignore`. Add one before any local `.env` work.
- Icons are base64-inlined deliberately. Replacing them with file paths will
  break rendering inside the Gorgias iframe.
- Event type names are matched as **literal strings** (`'Placed Order'`,
  `'Skio: Subscription Renewed'`, …). If a Klaviyo metric is renamed, that event
  silently stops appearing — no error, just a shorter timeline.

## If it fails

**How you find out**
- There is no alerting and, being request-driven, there is nothing to alert on a
  schedule. **You find out when an agent says the sidebar is empty or spinning.**
- If it matters more than that, the fix is a Vercel log drain or an uptime check
  against the endpoint — not a cron.

**What breaks downstream, and how urgent**
- Agents lose Klaviyo context on tickets and fall back to opening Klaviyo
  directly. Mildly annoying, not blocking, nothing lost.

**How to diagnose**
1. Vercel dashboard → this project → **Logs**, and find the failing invocation.
2. Common causes:
   - **401/403** → Klaviyo key rotated or lost its scopes.
   - **Timeouts** → Klaviyo slow; `maxDuration` is 10s.
   - **Empty timeline for a known-active customer** → a renamed Klaviyo metric
     (see above), not an outage.
   - **Widget blank in Gorgias but endpoint fine** → the Gorgias HTTP integration
     URL, not this app.

**Is a re-run safe?**
- **Yes, trivially.** Read-only with no state. Retry freely.

**How to recover**
- Rotate/repair the Klaviyo key in Vercel and redeploy, or roll back to the last
  good Vercel deployment.

**If nobody can fix it**
- Tell the care team to use Klaviyo directly. No data impact.

## Local development

```bash
npm install
vercel dev
```

## Significant changes

| Date | Change | By |
| --- | --- | --- |
| 2026-09-07 | README added; flagged for change to private | Fil |
