class TestController {

    constructor() {}
    index(req, res) {
        console.log(req.query);
        return res.json({ message: "This is the test" });
    }

}

module.exports = TestController