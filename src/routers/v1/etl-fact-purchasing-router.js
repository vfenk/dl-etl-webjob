var Router = require("restify-router").Router;
var messageSender = require("../../message-sender");

function getRouter() {

    var router = new Router();

    router.get("/", function (request, response, next) {
        var message = {
            body: 'Test message',
            customProperties: {
                testproperty: 'TestValue'
            }
        };

        messageSender.send(message)
            .then((result) => {
                response.send(200, result);
            })
            .catch((e) => {
                response.send(500, e);
            });
    });
    return router;
}
module.exports = getRouter;
