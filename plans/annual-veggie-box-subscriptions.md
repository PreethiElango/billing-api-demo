# Annual veggie-box subscriptions

## Problem

Customers can only pay monthly. A third of churn happens at the monthly renewal, and our best customers keep asking for a yearly plan.

## Outcome

- Customers choose monthly or annual at checkout, and can switch at renewal.
- Annual plans are billed once a year at 2 months free.
- Every existing subscription keeps working, unchanged.

## Steps

1. **Database migration:** add `interval` and `renews_at` columns, defaulting to monthly.
2. **Billing service:** annual pricing, proration and yearly renewals in `src/billing/renewals.ts`.
3. **Webhooks:** annual invoices, de-duplicated by invoice ID.
4. **Storefront:** a monthly / annual switcher at checkout and at renewal.

## Risks

- Double charges during the switch: renewals take a row lock and are idempotent.
- Tax on annual invoices: reuse the existing tax service, no new rules.

## Open questions

- Do gift boxes count toward an annual plan? Assumed no; confirm with Priya.
