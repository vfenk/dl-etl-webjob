var etlFactPuchasingRouter = require('../src/routers/v1/etl-fact-purchasing-router');


module.exports = function (server) {
    etlFactPuchasingRouter().applyRoutes(server, "v1/etl/purchasing");
};
