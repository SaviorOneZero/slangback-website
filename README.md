# Slangback website

Lightweight static website for Slangback.

## Pages

- `/` — product overview
- `/support/` — App Store support page
- `/privacy/` — privacy policy

The site is plain HTML and CSS. It has no framework, JavaScript, analytics, cookies, external fonts, or build step.

## Brand assets

The app's 1024px Light and Dark AppIcon artwork is the source for the website's homepage artwork and web icons.

- `assets/app-icon-light.png` and `assets/app-icon-dark.png` are 512px homepage assets. The Light version is also the social sharing image.
- `assets/brand-mark-light.png` and `assets/brand-mark-dark.png` are transparent 180px derivatives for the site header.
- `assets/favicon-light.png` and `assets/favicon-dark.png` are transparent 32px browser icons.
- `assets/apple-touch-icon.png` is an opaque 180px Light icon so iOS can apply its own mask cleanly.

The iOS Tinted AppIcon is intentionally not used on the web: browsers do not provide an equivalent system tint treatment, so either the Light or Dark artwork is more faithful in every supported website context.

## Deployment

The canonical site is independently deployed on Vercel at <https://slangback.sync33.com/>. GitHub Pages continues to publish the repository root from `main` at <https://savioronezero.github.io/slangback-website/> as a compatible legacy entry point. Its canonical metadata points to the Sync33 domain.

Run `node --test tests/static-site.test.mjs` before publishing. The test is also enforced in pull requests and on `main`.

Before the app is released:

1. Replace “Coming to the App Store” with the live App Store link.
2. Confirm that the support mailbox is monitored.
3. Re-check the privacy policy against the release binary and App Store Connect privacy details.
4. Use `/`, `/support/`, and `/privacy/` for the App Store Connect Marketing, Support, and Privacy Policy URLs.

## Privacy release check

The privacy copy reflects the current Slangback app: a bundled local catalog, no account, no analytics or advertising SDKs, and no direct network service. The app can still open research links, draft correction emails, and hand share cards to the iOS share sheet. Re-check those behaviors and any new dependencies before every release.
