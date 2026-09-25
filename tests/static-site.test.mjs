import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import test from "node:test";

const root = resolve(import.meta.dirname, "..");
const pages = ["index.html", "support/index.html", "privacy/index.html", "404.html"];
const read = (path) => readFile(join(root, path), "utf8");

test("public pages keep semantic and metadata essentials", async () => {
  for (const page of pages) {
    const html = await read(page);
    assert.match(html, /<html lang="en">/);
    assert.match(html, /<meta name="viewport"/);
    assert.match(html, /<title>/);
    assert.match(html, /<main/);
    assert.match(html, /skip-link/);
  }
});

test("local links and assets resolve", async () => {
  for (const page of pages) {
    const html = await read(page);
    for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(?:https?:|mailto:|#)/.test(value)) continue;
      const pathOnly = value.split("#")[0].split("?")[0];
      if (!pathOnly) continue;
      const absolute = pathOnly.startsWith("/") ? join(root, pathOnly) : resolve(root, dirname(page), pathOnly);
      const info = await stat(absolute);
      if (info.isDirectory()) await stat(join(absolute, "index.html"));
    }
  }
});

test("canonical host and studio attribution are current", async () => {
  for (const page of pages.slice(0, 3)) {
    const html = await read(page);
    assert.match(html, /https:\/\/slangback\.sync33\.com\//);
    assert.match(html, /A Sync33 Laboratories product/);
    assert.doesNotMatch(html, /savioronezero\.github\.io/);
  }
});
