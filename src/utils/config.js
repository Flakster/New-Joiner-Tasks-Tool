require('dotenv').config();

// Connection related environment variables
const PORT = process.env.PORT || 3000

// AMQP message broker authentication
const MB_USER = process.env.AMQP_USER
const MB_PASS = process.env.AMQP_PASS
const MB_URL = process.env.AMQP_URL

module.exports={
    PORT,
    MB_USER,
    MB_PASS,
    MB_URL
}