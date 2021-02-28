if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
module.exports = {
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI,
}