const container = require("./src/api/startup/container");

const Server = container.resolve("app");

const { DB_URI } = container.resolve("config")


const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

mongoose.connect(DB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => Server.start())
    .catch(console.log)