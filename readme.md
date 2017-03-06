# React SPA

### Usage
1. Edit server/config.js
2. `openssl genrsa 1024 > server/ssl/private.key`
3. `openssl req -new -key server/ssl/private.key -out server/ssl/cert.csr`
4. `openssl x509 -req -in server/ssl/cert.csr -signkey server/ssl/private.key -out server/ssl/certificate.pem`
5. `npm i`
6. `npm i gulp-cli -g`
7. `npm run dev` - https://localhost:3000
8. `npm run prod` - minify files
9. `npm start` - https://localhost
