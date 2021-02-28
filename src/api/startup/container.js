const { createContainer, asClass, asFunction, asValue } = require("awilix");

// ===== Configurations =====


const app = require('./index');
const config = require("../../config");


// ===== Routes =====

const { TestRoutes } = require("../routes/index.router");
const Routes = require("../routes")

//  ==== Controllers =====


const { TestController } = require("../controllers/index");

// ===== Container =====


const container = createContainer();


container
    .register({ // Configuration
        app: asClass(app).singleton(),
        config: asValue(config),
        router: asFunction(Routes).singleton(),
    })
    .register({ // Routes
        TestRoutes: asFunction(TestRoutes).singleton()
    })
    .register({ // Controllers
        TestController: asClass(TestController).singleton()
    })
    .register({ // Models

    })
    .register({ // Repositories

    })
    .register({ // Services

    })


module.exports = container;