import wretch from "wretch"
import fetch from "isomorphic-unfetch"

wretch().polyfills({
  fetch,
})

const createProduct = async product => {
  return wretch("http://localhost:3100/createProduct").post(product)
}

const updateProduct = async product => {
  return wretch("http://localhost:3100/updateProduct").post(product)
}

const getProduct = async id => {
  return wretch("http://localhost:3100/getProduct")
    .get({ id })
    .json()
}

const deleteProduct = async id => {
  return wretch("http://localhost:3100/deleteProduct")
    .options({ mode: "no-cors" })
    .post({ id })
    .json()
}

const listProducts = async (limit = 1000) => {
  return wretch(`http://localhost:3100/listProducts?limit=${limit}`)
    .get()
    .json()
}

export default {
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
  listProducts,
}
