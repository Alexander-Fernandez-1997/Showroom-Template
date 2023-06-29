CREATE TABLE IF NOT EXISTS "address" (
	"id" serial PRIMARY KEY NOT NULL,
	"street" varchar(555) NOT NULL,
	"apartment" varchar(255) NOT NULL,
	"city" varchar(255) NOT NULL,
	"state" varchar(255) NOT NULL,
	"country" varchar(255) NOT NULL,
	"zipcode" varchar(255) NOT NULL,
	"store_id" integer NOT NULL,
	"client_id" integer
);

CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"banner_image" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"main_active" boolean,
	"store_id" integer DEFAULT 1
);

CREATE TABLE IF NOT EXISTS "clients" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"store_id" integer NOT NULL
);

CREATE TABLE IF NOT EXISTS "clothes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"price" integer NOT NULL,
	"image_main" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"slug" varchar(255) NOT NULL,
	"subcategories_ids" integer[] NOT NULL,
	"store_id" integer DEFAULT 1
);

CREATE TABLE IF NOT EXISTS "configuration" (
	"id" serial PRIMARY KEY NOT NULL,
	"store_banner" varchar(255) NOT NULL,
	"store_slogan" varchar(255) NOT NULL,
	"about_banner" varchar(255) NOT NULL,
	"about_slogan" varchar(255) NOT NULL,
	"about_html" text NOT NULL,
	"contact_banner" varchar(255) NOT NULL,
	"contact_slogan" varchar(255) NOT NULL,
	"store_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "franchises" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"address" varchar(255) NOT NULL,
	"phone" varchar(255) NOT NULL,
	"image_main" varchar(555) NOT NULL,
	"store_hours" varchar(255) NOT NULL,
	"store_id" integer NOT NULL
);

CREATE TABLE IF NOT EXISTS "notes" (
	"id" serial PRIMARY KEY NOT NULL,
	"tittle" varchar(255),
	"description" varchar(500),
	"store_id" integer
);

CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"store_id" integer NOT NULL,
	"client_id" integer,
	"email" varchar(255) NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"phone" varchar(255) NOT NULL,
	"company" varchar(255),
	"shipping_address_id" integer NOT NULL,
	"billing_address_id" integer NOT NULL,
	"status" varchar(255) NOT NULL,
	"shipping_provider_name" varchar(255) NOT NULL,
	"shipping_provider_type" varchar(255) NOT NULL,
	"shipping_price" integer NOT NULL,
	"discounts" integer,
	"taxes" integer,
	"total" integer NOT NULL,
	"currency" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"slug" varchar(255) NOT NULL,
	"subtotal" integer NOT NULL,
	"payment_method" varchar(255),
	"payment_code" varchar(255)
);

CREATE TABLE IF NOT EXISTS "orders_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_id" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"variant_id" integer NOT NULL,
	"img" varchar(255) NOT NULL,
	"quantity" integer NOT NULL,
	"price" integer NOT NULL,
	"currency" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "reviews" (
	"id" serial PRIMARY KEY NOT NULL,
	"reviewer" varchar(255),
	"review" varchar(500),
	"rating" integer,
	"clothes_id" integer,
	"created_at" timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "stores" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"logo" varchar(500) NOT NULL,
	"phone_number" varchar(50),
	"wp_number" varchar(50),
	"instagram" varchar(500),
	"email" varchar(100),
	"street" varchar(200),
	"street_number" varchar(50),
	"city" varchar(50),
	"province" varchar(50),
	"country" varchar(50),
	"main_banner" varchar(500),
	"slogan" varchar(200)
);

CREATE TABLE IF NOT EXISTS "subcategories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"banner_image" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"category_id" integer NOT NULL
);

CREATE TABLE IF NOT EXISTS "variants" (
	"id" serial PRIMARY KEY NOT NULL,
	"sku" varchar(255) NOT NULL,
	"color" varchar(255) NOT NULL,
	"size" varchar(255) NOT NULL,
	"quantity" integer NOT NULL,
	"image" text[] NOT NULL,
	"video_url" varchar,
	"weight" double precision NOT NULL,
	"height" double precision NOT NULL,
	"width" double precision NOT NULL,
	"length" double precision NOT NULL,
	"price" double precision NOT NULL,
	"discount" boolean NOT NULL,
	"discount_price" double precision NOT NULL,
	"discount_end" date NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"clothes_id" integer NOT NULL
);

DO $$ BEGIN
 ALTER TABLE "address" ADD CONSTRAINT "address_store_id_stores_id_fk" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "address" ADD CONSTRAINT "address_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "categories" ADD CONSTRAINT "categories_store_id_stores_id_fk" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "clients" ADD CONSTRAINT "clients_store_id_stores_id_fk" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "clothes" ADD CONSTRAINT "clothes_store_id_stores_id_fk" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "franchises" ADD CONSTRAINT "franchises_store_id_stores_id_fk" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "notes" ADD CONSTRAINT "notes_store_id_stores_id_fk" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "orders" ADD CONSTRAINT "orders_store_id_stores_id_fk" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "orders" ADD CONSTRAINT "orders_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "orders" ADD CONSTRAINT "orders_shipping_address_id_address_id_fk" FOREIGN KEY ("shipping_address_id") REFERENCES "address"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "orders" ADD CONSTRAINT "orders_billing_address_id_address_id_fk" FOREIGN KEY ("billing_address_id") REFERENCES "address"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "orders_items" ADD CONSTRAINT "orders_items_order_id_orders_id_fk" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "orders_items" ADD CONSTRAINT "orders_items_variant_id_variants_id_fk" FOREIGN KEY ("variant_id") REFERENCES "variants"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "reviews" ADD CONSTRAINT "reviews_clothes_id_clothes_id_fk" FOREIGN KEY ("clothes_id") REFERENCES "clothes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "subcategories" ADD CONSTRAINT "subcategories_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "variants" ADD CONSTRAINT "variants_clothes_id_clothes_id_fk" FOREIGN KEY ("clothes_id") REFERENCES "clothes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
