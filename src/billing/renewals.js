const addMonths = (d, n) => new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + n, d.getUTCDate()));

export function scheduleRenewal(sub) {
  const months = sub.interval === "year" ? 12 : 1;
  const next = addMonths(sub.renewsAt ?? sub.startedAt, months);
  return { ...sub, renewsAt: next };
}
