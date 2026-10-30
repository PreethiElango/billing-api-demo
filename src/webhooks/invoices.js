export function handleInvoice(event, store) {
  store.push(event.invoice);
  return store;
}
