import * as t from 'drizzle-orm/pg-core';

export const users = t.pgTable('users', {
  id: t.varchar('user_id', { length: 256 }).primaryKey(),
  fullName: t.varchar('full_name', { length: 256 }),
  phone: t.integer(),
  email : t.varchar('user_email', { length: 256 }).notNull(),
  password : t.varchar('user_pass', { length: 256 }).notNull(),
  updated_at: t.timestamp(),
  created_at: t.timestamp().defaultNow().notNull()
});
