import { Button } from "@moxieroom/components"
import connect from "@moxieroom/connect"

import Product from "../components/Product"

class Index extends React.Component {
  static async getInitialProps() {
    const response = await connect.listProducts()
    return { products: response.data }
  }

  render() {
    console.log(this.props)

    return (
      <div>
        <p>{this.props.products.length} products...</p>
        {this.props.products.map(product => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    )
  }
}

Index.defaultProps = {
  products: [],
}

export default Index
