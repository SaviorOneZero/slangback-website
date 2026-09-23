# Slangback website

Lightweight static website for Slangback.

## Pages

- `/` — product overview
- `/support/` — App Store support page
- `/privacy/` — privacy policy

The site is plain HTML and CSS. It has no framework, JavaScript, analytics, cookies, external fonts, or build step.

## Deployment

GitHub Pages publishes the repository root from `main` at <https://savioronezero.github.io/slangback-website/>.

Before the app is released:

1. Replace “Coming to the App Store” with the live App Store link.
2. Confirm that the support mailbox is monitored.
3. Re-check the privacy policy against the release binary and App Store Connect privacy details.
4. Use `/`, `/support/`, and `/privacy/` for the App Store Connect Marketing, Support, and Privacy Policy URLs.

## Privacy release check

The privacy copy reflects the current Slangback app: a bundled local catalog, no account, no analytics or advertising SDKs, and no direct network service. The app can still open research links, draft correction emails, and hand share cards to the iOS share sheet. Re-check those behaviors and any new dependencies before every release.
