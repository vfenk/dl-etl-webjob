var Router = require("restify-router").Router;
var messageSender = require("../../message-sender");
var FactPembelian = require('dl-module').etl.factPembelian;
var db = require('../../db');
var sql = require("../../sqlConnect");
const apiVersion = "1.0.0";

function getRouter() {

    var router = new Router();

    router.get("/", function (request, response, next) {
        Promise.all([db.get(), Promise.resolve(sql)])
            .then((results) => {
                var db = results[0];
                var sql = results[1];
                var instance = new FactPembelian(db, {
                    username: "unit-test"
                }, sql);

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
