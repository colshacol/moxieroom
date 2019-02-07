import micro from "micro"
import Stripe from "stripe"

const stripe = Stripe(process.env.STRIPE_SECRET)

const server = micro(async (request, response) => {
  const product = await micro.json(request)

  try {
    const result = await stripe.products.retrieve(product.id)
    return { success: true, result }
  } catch (error) {
    return { success: false, error }
  }
})

server.listen(3104, () => {
  console.log("getProduct: http://localhost:3104")
})

export default {
  pathname: "/getProduct",
  method: ["GET"],
  dest: "http://localhost:3104",
}
