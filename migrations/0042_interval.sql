ALTER TABLE subscriptions ADD COLUMN interval TEXT NOT NULL DEFAULT 'month';
ALTER TABLE subscriptions ADD COLUMN renews_at TIMESTAMPTZ;
UPDATE subscriptions SET renews_at = started_at + INTERVAL '1 month';
