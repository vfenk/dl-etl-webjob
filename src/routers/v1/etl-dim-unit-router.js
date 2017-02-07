var Router = require("restify-router").Router;
var messageSender = require("../../message-sender");
var DimUnit = require("dl-module").etl.dimUnit;
var dbConnect = require("../../db");
var sqlConnect = require("../../sql-db");

const apiVersion = "1.0.0";

function getRouter() {

    var router = new Router();

    router.get("/", function (request, response, next) {

        var message = {
            body: "Test message",
            customProperties: {
                testproperty: "TestValue"
            }
        };

        messageSender.send(message)
            .then((result) => {
                response.send(200, result);
            })
            .catch((e) => {
                response.send(500, e);
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance = new DimUnit(db, {
                        username: "unit-test"
                    }, sql);

                    instance.run();

                });
            });
    });

    return router;
}

module.exports = getRouter;