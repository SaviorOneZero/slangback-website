# Slangback website

Lightweight static web presence for Slangback.

## Pages

- `/` — marketing landing page
- `/support/` — App Store support page
- `/privacy/` — privacy policy

Pure HTML and CSS. No framework, JavaScript, analytics, cookies, external fonts, or build step.

## Deployment

Serve the repository root as a static site. After a production domain is connected:

1. Add the canonical production hostname to metadata.
2. Add `sitemap.xml` and reference it from `robots.txt`.
3. Use the production URLs for the App Store Connect Marketing, Support, and Privacy Policy URLs.
4. Replace the “Coming to the App Store” message with the live App Store link after release.

## Privacy release check

The privacy copy assumes the Slangback release binary collects no data. Before every release, re-check the app and dependencies. If analytics, crash reporting, accounts, advertising, telemetry, or other data collection is introduced, update both this website's privacy policy and the App Store Connect disclosure before release.
