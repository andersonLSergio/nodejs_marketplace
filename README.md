# Credentials format

## MongoDB

File: `src/config/database.js`

```
module.exports = {
  uri: 'myConnectionString'
}
```

## JWT - Session Token

File: `src/config/auth.js`

```
module.exports = {
  secret: 'mySecret',
  ttl: 86400
}
```

## Email - Nodemailer

File: `src/config/mail.js`

```
module.exports = {
  host: 'smtp.mysmtphost.com,
  port: 587,
  secure: false,
  auth: {
    user: 'myUserName',
    pass: 'myPasswd'
  }
}
```

## Redis

File: `src/config/mail.js`

```
module.exports = {
  host: '127.0.0.1',
  port: 6379
}
```
