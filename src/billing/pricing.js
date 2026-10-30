export const MONTHLY_CENTS = 3200;
// Annual plans: 12 months for the price of 10.
export const ANNUAL_CENTS = MONTHLY_CENTS * 10;

export function priceFor(sub) {
  return sub.interval === "year" ? ANNUAL_CENTS : MONTHLY_CENTS;
}
