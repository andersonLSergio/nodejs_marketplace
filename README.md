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
