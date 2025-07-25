import * as t from 'drizzle-orm/pg-core';

import { users } from './user';

export const otp = t.pgTable('otp', {
  userId: t
    .varchar('user_id', { length: 256 })
    .references(() => users.id)
    .primaryKey(),
  userOtp: t.varchar('user_otp', { length: 10 }),
  updated_at: t.timestamp('updated_at').defaultNow(),
  created_at: t.timestamp('created_at').defaultNow().notNull(),
});
