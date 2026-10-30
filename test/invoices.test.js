import { test } from "node:test";
import assert from "node:assert/strict";
import { handleInvoice } from "../src/webhooks/invoices.js";

test("a retried invoice webhook is recorded once", () => {
  const event = { invoice: { id: "in_42", cents: 32000 } };
  assert.equal(handleInvoice(event, handleInvoice(event, [])).length, 1);
});
