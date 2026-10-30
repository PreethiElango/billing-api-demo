import { test } from "node:test";
import assert from "node:assert/strict";
import { scheduleRenewal } from "../src/billing/renewals.js";

test("a monthly subscription renews a month later", () => {
  const sub = scheduleRenewal({ startedAt: new Date("2026-01-15T00:00:00Z") });
  assert.equal(sub.renewsAt.toISOString().slice(0, 10), "2026-02-15");
});
