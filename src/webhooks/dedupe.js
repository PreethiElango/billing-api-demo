// Payment providers retry webhooks; an invoice is recorded once per ID.
export function dedupe(store, invoice) {
  return store.some((i) => i.id === invoice.id) ? store : [...store, invoice];
}
