import {
  pgTable,
  pgEnum,
  pgSchema,
  AnyPgColumn,
  foreignKey,
  serial,
  varchar,
  integer,
  timestamp,
  text,
  doublePrecision,
  boolean,
  date,
} from "drizzle-orm/pg-core";

export const clothes = pgTable("clothes", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  price: integer("price").notNull(),
  imageMain: varchar("image_main", { length: 255 }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow().notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  subcategoriesIds: integer("subcategories_ids").array().notNull(),
  storeId: integer("store_id")
    .default(1)
    .references(() => stores.id),
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey().notNull(),
  storeId: integer("store_id")
    .notNull()
    .references(() => stores.id),
  clientId: integer("client_id").references(() => clients.id),
  email: varchar("email", { length: 255 }).notNull(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }),
  shippingAddressId: integer("shipping_address_id")
    .notNull()
    .references(() => address.id),
  billingAddressId: integer("billing_address_id")
    .notNull()
    .references(() => address.id),
  status: varchar("status", { length: 255 }).notNull(),
  shippingProviderName: varchar("shipping_provider_name", {
    length: 255,
  }).notNull(),
  shippingProviderType: varchar("shipping_provider_type", {
    length: 255,
  }).notNull(),
  shippingPrice: integer("shipping_price").notNull(),
  discounts: integer("discounts"),
  taxes: integer("taxes"),
  total: integer("total").notNull(),
  currency: varchar("currency", { length: 255 }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow().notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  subtotal: integer("subtotal").notNull(),
  paymentMethod: varchar("payment_method", { length: 255 }),
  paymentCode: varchar("payment_code", { length: 255 }),
  paymentStatus: varchar("payment_status", { length: 255 }).default(
    "not started"
  ),
});

export const ordersItems = pgTable("orders_items", {
  id: serial("id").primaryKey().notNull(),
  orderId: integer("order_id")
    .notNull()
    .references(() => orders.id),
  name: varchar("name", { length: 255 }).notNull(),
  variantId: integer("variant_id")
    .notNull()
    .references(() => variants.id),
  img: varchar("img", { length: 255 }).notNull(),
  quantity: integer("quantity").notNull(),
  price: integer("price").notNull(),
  currency: varchar("currency", { length: 255 }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow().notNull(),
});

export const address = pgTable("address", {
  id: serial("id").primaryKey().notNull(),
  street: varchar("street", { length: 555 }).notNull(),
  apartment: varchar("apartment", { length: 255 }).notNull(),
  city: varchar("city", { length: 255 }).notNull(),
  state: varchar("state", { length: 255 }).notNull(),
  country: varchar("country", { length: 255 }).notNull(),
  zipcode: varchar("zipcode", { length: 255 }).notNull(),
  storeId: integer("store_id")
    .notNull()
    .references(() => stores.id),
  clientId: integer("client_id").references(() => clients.id),
});

export const franchises = pgTable("franchises", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  address: varchar("address", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 255 }).notNull(),
  imageMain: varchar("image_main", { length: 555 }).notNull(),
  storeHours: varchar("store_hours", { length: 255 }).notNull(),
  storeId: integer("store_id")
    .notNull()
    .references(() => stores.id),
});

export const configuration = pgTable("configuration", {
  id: serial("id").primaryKey().notNull(),
  storeBanner: varchar("store_banner", { length: 255 }).notNull(),
  storeSlogan: varchar("store_slogan", { length: 255 }).notNull(),
  aboutBanner: varchar("about_banner", { length: 255 }).notNull(),
  aboutSlogan: varchar("about_slogan", { length: 255 }).notNull(),
  aboutHtml: text("about_html").notNull(),
  contactBanner: varchar("contact_banner", { length: 255 }).notNull(),
  contactSlogan: varchar("contact_slogan", { length: 255 }).notNull(),
  storeId: integer("store_id").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow().notNull(),
});

export const notes = pgTable("notes", {
  id: serial("id").primaryKey().notNull(),
  tittle: varchar("tittle", { length: 255 }),
  description: varchar("description", { length: 500 }),
  storeId: integer("store_id").references(() => stores.id),
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey().notNull(),
  reviewer: varchar("reviewer", { length: 255 }),
  review: varchar("review", { length: 500 }),
  rating: integer("rating"),
  clothesId: integer("clothes_id").references(() => clothes.id),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
});

export const variants = pgTable("variants", {
  id: serial("id").primaryKey().notNull(),
  sku: varchar("sku", { length: 255 }).notNull(),
  color: varchar("color", { length: 255 }).notNull(),
  size: varchar("size", { length: 255 }).notNull(),
  quantity: integer("quantity").notNull(),
  image: text("image").array().notNull(),
  videoUrl: varchar("video_url"),
  weight: doublePrecision("weight").notNull(),
  height: doublePrecision("height").notNull(),
  width: doublePrecision("width").notNull(),
  length: doublePrecision("length").notNull(),
  price: doublePrecision("price").notNull(),
  discount: boolean("discount").notNull(),
  discountPrice: doublePrecision("discount_price").notNull(),
  discountEnd: date("discount_end").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow().notNull(),
  clothesId: integer("clothes_id")
    .notNull()
    .references(() => clothes.id),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  bannerImage: varchar("banner_image", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow().notNull(),
  mainActive: boolean("main_active"),
  storeId: integer("store_id")
    .default(1)
    .references(() => stores.id),
});

export const subcategories = pgTable("subcategories", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  bannerImage: varchar("banner_image", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
  categoryId: integer("category_id")
    .notNull()
    .references(() => categories.id),
});

export const stores = pgTable("stores", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 50 }).notNull(),
  logo: varchar("logo", { length: 500 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 50 }),
  wpNumber: varchar("wp_number", { length: 50 }),
  instagram: varchar("instagram", { length: 500 }),
  email: varchar("email", { length: 100 }),
  street: varchar("street", { length: 200 }),
  streetNumber: varchar("street_number", { length: 50 }),
  city: varchar("city", { length: 50 }),
  province: varchar("province", { length: 50 }),
  country: varchar("country", { length: 50 }),
  mainBanner: varchar("main_banner", { length: 500 }),
  slogan: varchar("slogan", { length: 200 }),
});

export const clients = pgTable("clients", {
  id: serial("id").primaryKey().notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  storeId: integer("store_id")
    .notNull()
    .references(() => stores.id),
});
