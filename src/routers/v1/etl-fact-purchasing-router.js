var Router = require("restify-router").Router;
var messageSender = require("../../message-sender");
var FactPembelian = require('dl-module').etl.factPembelian;
var db = require('../../db');

const apiVersion = "1.0.0";

function getRouter() {

    var router = new Router();

    router.get("/", function (request, response, next) {
        db.get().then((db) => {
            var instance = new FactPembelian(db, {
                username: "unit-test"
            });

            instance.run()
                .then(() => {
                    response.send(200);
                });
        });

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
