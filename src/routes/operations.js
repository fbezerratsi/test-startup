const OperationsController = require('../controllers/operationsController')

module.exports = routes => {
    routes.post('/sum', OperationsController.sum)
}
