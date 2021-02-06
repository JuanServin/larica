
const routes = require('express').Router();

routes.use('/address', require('../routes/address/address'))
routes.use("/admin", require('../routes/admin/admin'))
routes.use("/cart", require('../routes/cart/cart'))
routes.use("/products", require('../routes/products/products'))
routes.use("/categories", require('../routes/categories/categories'))
routes.use("/users", require('../routes/users/users'))
module.exports = routes;