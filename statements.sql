-- FOR USERS TABLE

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR,
    username VARCHAR,
    "emailVerified" TIMESTAMPTZ,
    source VARCHAR,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ DEFAULT now(),
    "lastSignedIn" TIMESTAMPTZ DEFAULT now(),
    roles TEXT[] DEFAULT ARRAY['USER'::TEXT],
    "identityProvider" TEXT DEFAULT 'TINOMAZORODZEBLOG',
    CONSTRAINT email_unique UNIQUE (email)
);
CREATE INDEX "User_email_idx" ON users (email);