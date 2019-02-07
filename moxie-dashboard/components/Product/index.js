import * as React from "react"
import connect from "@moxieroom/connect"

import $Product from "./styles"

type PropsT = {
  name: string,
  object: string,
  images: string[],
  attributes: string[],
  description: string,
  active: boolean,
  caption: string,
  created: number,
  url: string | null,
  updated: number,
  shippable: boolean,
  product_dimensions: any,
}

const Product = (props: PropsT) => {
  return (
    <$Product>
      <div className="top">
        <div className="image">
          <img src={props.images[0]} />
        </div>
      </div>
      <div className="bottom">
        <button onClick={() => connect.deleteProduct(props.id)}>DELETE</button>
        <div className="createdDate">{props.created}</div>
        <div className="updatedDate">{props.updated}</div>
      </div>
    </$Product>
  )
}

Product.defaultProps = {
  name: "",
  object: "",
  attributes: [],
  images: [],
  description: "",
  active: false,
  caption: "",
  created: 0,
  url: "",
  updated: 0,
  shippable: false,
  product_dimensions: null,
}

export default Product
