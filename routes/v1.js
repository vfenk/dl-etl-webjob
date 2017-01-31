var etlFactPuchasingRouter = require('../src/routers/v1/etl-fact-purchasing-router');
var etlFactTotalHutangRouter = require('../src/routers/v1/etl-fact-total-hutang-router');
var etlDimCategoryRouter = require('../src/routers/v1/etl-dim-category-router');
var etlDimDivisionRouter = require('../src/routers/v1/etl-dim-division-router');
var etlDimSupplierRouter = require('../src/routers/v1/etl-dim-supplier-router');
var etlDimUnitRouter = require('../src/routers/v1/etl-dim-unit-router');

module.exports = function (server) {
    etlFactPuchasingRouter().applyRoutes(server, "v1/etl/purchasing");
    etlFactTotalHutangRouter().applyRoutes(server, "v1/etl/total-hutang");
    etlDimCategoryRouter().applyRoutes(server, "v1/etl/dim-category");
    etlDimDivisionRouter().applyRoutes(server, "v1/etl/dim-division");
    etlDimSupplierRouter().applyRoutes(server, "v1/etl/dim-supplier");
    etlDimUnitRouter().applyRoutes(server, "v1/etl/dim-unit");
};
