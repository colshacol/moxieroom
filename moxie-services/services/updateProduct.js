import micro from "micro"
import Stripe from "stripe"

const stripe = Stripe(process.env.STRIPE_SECRET)

const server = micro(async (request, response) => {
  const product = await micro.json(request)

  try {
    await stripe.products.update(product.id, product)
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
})

server.listen(3102, () => {
  console.log("updateProduct: http://localhost:3102")
})

export default {
  pathname: "/updateProduct",
  method: ["POST"],
  dest: "http://localhost:3102",
}
