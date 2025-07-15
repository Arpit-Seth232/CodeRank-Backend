import * as t from 'drizzle-orm/pg-core';

export const users = t.pgTable('users', {
  id: t.varchar('user_id', { length: 256 }).primaryKey(),
  fullName: t.varchar('full_name', { length: 256 }),
  phone: t.varchar('user_phone', { length: 15 }),
  email: t.varchar('user_email', { length: 256 }).notNull(),
  password: t.varchar('user_pass', { length: 256 }).notNull(),
  collegeName: t.varchar('user_college_name', { length: 256 }),
  updated_at: t.timestamp('updated_at').defaultNow(),
  created_at: t.timestamp('created_at').defaultNow().notNull(),
});
