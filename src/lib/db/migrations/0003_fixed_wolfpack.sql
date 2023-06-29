ALTER TABLE "orders" ADD COLUMN "subtotal" integer NOT NULL;
ALTER TABLE "orders" ADD COLUMN "payment_method" varchar(255);
ALTER TABLE "orders" ADD COLUMN "payment_code" varchar(255);
ALTER TABLE "orders" ADD COLUMN "payment_status" varchar(255) DEFAULT 'not started';