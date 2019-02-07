import micro from "micro"
import { parse } from "url"
import Stripe from "stripe"

const stripe = Stripe(process.env.STRIPE_SECRET)

const server = micro(async (request, response) => {
  const { query } = parse(request.url, true)

  try {
    const results = await stripe.products.list({ limit: query.limit })
    return results
  } catch (error) {
    return error
  }
})

server.listen(3105, () => {
  console.log("listProducts: http://localhost:3105")
})

export default {
  pathname: "/listProducts",
  method: ["GET"],
  dest: "http://localhost:3105",
}
