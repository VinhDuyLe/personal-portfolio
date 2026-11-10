import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished portfolio homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Vinh Duy Le/);
  assert.match(html, /Systems/);
  assert.match(html, /that/);
  assert.match(html, /Test Automation AI Assistant/);
  assert.match(html, /Résumé agent/);
  assert.match(html, /vinh-le-resume\.pdf/);
  assert.match(html, /leduyvinh91@gmail\.com/);
  assert.match(html, /Open to backend, AI engineer, and software engineer roles/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("renders every public content route", async () => {
  const routes = [
    ["/projects", /Engineering that/],
    ["/about", /Engineering principles/],
    ["/projects/test-automation-ai-assistant", /Protocol boundary/],
    ["/projects/agent-planner", /One conversational entry point/],
    ["/projects/event-driven-search", /The data path/],
  ];

  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), expected, pathname);
  }
});

test("returns the branded not-found page", async () => {
  const response = await render("/not-a-real-route");
  assert.equal(response.status, 404);
  assert.match(await response.text(), /graceful failure/);
});
