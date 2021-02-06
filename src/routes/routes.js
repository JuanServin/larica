
const routes = require('express').Router();

routes.use('/address', require('../routes/address/address'))
routes.use("/admin", require('../routes/admin/admin'))
routes.use("/cart", require('../routes/cart/cart'))
routes.use("/produtos", require('../routes/products/products'))
routes.use("/categoria", require('../routes/categories/categories'))
routes.use("/user", require('../routes/users/users'))
module.exports = routes;