import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://YOUR_PUBLIC_KEY@YOUR_ORG.ingest.sentry.io/YOUR_PROJECT_ID",
  tracesSampleRate: 1.0,
});

