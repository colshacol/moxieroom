import createProxy from "micro-proxy"

import createProduct from "./services/createProduct"
import deleteProduct from "./services/deleteProduct"
import getProduct from "./services/getProduct"
import updateProduct from "./services/updateProduct"
import listProducts from "./services/listProducts"

const proxy = createProxy([
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  listProducts,
])

proxy.listen(3100, err => {
  if (err) throw err
  console.log(`proxy: http://localhost:3100`)
})
