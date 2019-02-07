import micro from "micro"
import Stripe from "stripe"

const stripe = Stripe(process.env.STRIPE_SECRET)

const server = micro(async (request, response) => {
  const product = await micro.json(request)

  try {
    await stripe.products.create(product)
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
})

server.listen(3101, () => {
  console.log("createProduct: http://localhost:3101")
})

export default {
  pathname: "/createProduct",
  method: ["POST"],
  dest: "http://localhost:3101",
}
