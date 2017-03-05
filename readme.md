# Start SPA React Webpack

### Usage
1. Edit server/config.js
2. `openssl genrsa 1024 > server/ssl/private.key`
3. `openssl req -new -key server/ssl/private.key -out server/ssl/cert.csr`
4. `openssl x509 -req -in server/ssl/cert.csr -signkey server/ssl/private.key -out server/ssl/certificate.pem`
2. `npm i`
3. `npm run dev`
