const addMonths = (d, n) => new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + n, d.getUTCDate()));

export function scheduleRenewal(sub) {
  const next = addMonths(sub.startedAt, 1);
  return { ...sub, renewsAt: next };
}
