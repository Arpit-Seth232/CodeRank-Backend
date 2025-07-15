import * as t from 'drizzle-orm/pg-core';

import { users } from './user';

export const userInfo = t.pgTable('user_info', {
  userId: t
    .varchar('user_id', { length: 256 })
    .references(() => users.id)
    .primaryKey(),
  userBio: t.varchar('user_bio', { length: 256 }),
  userLeetcode: t.varchar('user_leetcode', { length: 100 }),
  userCodechef: t.varchar('user_codechef', { length: 100 }),
  userCodeforces: t.varchar('user_codeforces', { length: 100 }),
  userHackerank: t.varchar('user_hackerank', { length: 100 }),
  userPoints: t.doublePrecision('user_points'),
  userCertificateUrl: t.varchar('user_certificate_url', { length: 256 }),
  userLinkedIn: t.varchar('user_linked_in', { length: 256 }),
  userTwitter: t.varchar('user_twitter', { length: 256 }),

  isCertificateDownloaded: t.boolean('is_cerificate_downloaded').default(false),
  isCertificateDeleted: t.boolean('is_cerificate_deleted').default(false),

  updated_at: t.timestamp('updated_at').defaultNow(),
  created_at: t.timestamp('created_at').defaultNow().notNull(),
});
