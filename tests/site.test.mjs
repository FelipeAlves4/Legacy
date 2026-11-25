import { test } from "node:test";
import assert from "node:assert/strict";

const base = process.env.TEST_BASE_URL || "http://localhost:3000";
const routes = [
  "/",
  "/sobre",
  "/ecossistema",
  "/gestao",
  "/educacao",
  "/digital",
  "/contato",
  "/portal",
  "/privacidade",
];

for (const route of routes) {
  test(`${route} renders an institutional page`, async () => {
    const response = await fetch(`${base}${route}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /<main\b/);
    assert.match(html, /<h1\b/);
    assert.match(html, /<title>/);
    assert.doesNotMatch(html, /href="#"/);
  });
}

test("portal states that integration is pending", async () => {
  const response = await fetch(`${base}/portal`);
  const html = await response.text();
  assert.match(html, /Integração em preparação/);
  assert.doesNotMatch(html, /type="password"/);
});

test("discovery endpoints are available", async () => {
  for (const route of ["/robots.txt", "/sitemap.xml"]) {
    const response = await fetch(`${base}${route}`);
    assert.equal(response.status, 200);
  }
});
