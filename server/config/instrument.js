import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://8df5924b6d53ce9412890707bf79401d@o4510216273854464.ingest.us.sentry.io/4510216276869120",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [
    Sentry.mongooseIntegration()
  ]
});