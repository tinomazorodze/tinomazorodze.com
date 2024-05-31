import { drizzle } from 'drizzle-orm/postgres-js'
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core'
import { eq } from 'drizzle-orm'
import postgres from 'postgres'
import { genSaltSync, hashSync } from 'bcrypt-ts'

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle
let client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`)
let db = drizzle(client)

let users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 64 }),
  email: varchar('email', { length: 64 }),
  password: varchar('password', { length: 64 }),
  username: varchar('username', { length: 64 }),
})

export async function getUser(email: string) {
  return await db.select().from(users).where(eq(users.email, email))
}

export async function createUser(
  email: string,
  name: string,
  password: string,
  username: string,
) {
  let salt = genSaltSync(10)
  let hash = hashSync(password, salt)

  return await db
    .insert(users)
    .values({ name, email, password: hash, username })
}
