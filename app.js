const express = require('express')
const https = require('https')
const path = require('path')
const fs = require('fs')

const app = express()
app.use('/', (req, res, next) => {
    res.send("Hello from SSl server")
})

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert-loc', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert-loc', 'cert.pem'))
}, app)

sslServer.listen(3443, () => console.log(`Secure server is running on port 3443`))