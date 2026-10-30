import { dedupe } from "./dedupe.js";

export function handleInvoice(event, store) {
  return dedupe(store, event.invoice);
}
