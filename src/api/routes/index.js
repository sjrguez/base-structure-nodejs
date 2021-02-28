const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const bodyParser = require("body-parser");


// app middlewares

const { NotFoundMiddleWare } = require("../middleware")


module.exports = ({ TestRoutes }) => {

    const router = express.Router();
    const apiRouter = express.Router();

    apiRouter
        .use(bodyParser.urlencoded({ limit: "5mb", extended: true }))
        .use(bodyParser.json({ limit: "5mb", extended: true }))
        .use(cors())
        .use(helmet())
        .use(compression())


    // App routers
    apiRouter.use('/test', TestRoutes)


    // Main router

    router.use("/v1/api", apiRouter)

    // using app middleware
    router.use(NotFoundMiddleWare)


    return router
}