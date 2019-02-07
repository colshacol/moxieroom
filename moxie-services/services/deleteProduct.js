import micro from "micro"
import Stripe from "stripe"

const stripe = Stripe(process.env.STRIPE_SECRET)

const server = micro(async (request, response) => {
  const product = await micro.json(request)
  console.log("DELETING PRODUCT:", product)

  try {
    const confirmation = await stripe.products.del(product.id)
    return confirmation
  } catch (error) {
    return error
  }
})

server.listen(3103, () => {
  console.log("deleteProduct: http://localhost:3103")
})

export default {
  pathname: "/deleteProduct",
  method: ["POST"],
  dest: "http://localhost:3103",
}
