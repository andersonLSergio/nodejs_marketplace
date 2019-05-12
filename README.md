# Credentials format (DotEnv)

## MongoDB

File: `src/config/database.js`

```
module.exports = {
  uri: process.env.DB_URL
}
```

## JWT - Session Token

File: `src/config/auth.js`

```
module.exports = {
  secret: process.env.APP_SECRET,
  ttl: 86400
}
```

## Email - Nodemailer

File: `src/config/mail.js`

```
module.exports = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
}
```

## Redis

File: `src/config/redis.js`

```
module.exports = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
}
```

## Sentry

File: `src/config/sentry.js`

```
module.exports = {
  dsn: process.env.SENTRY_DSN
}
```
