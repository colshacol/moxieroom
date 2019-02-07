import stripe from "../stripe"
import connect from "../../connect"

const create = (details = {}) => {
  const product = {
    name: null,
    type: "good",
    description: "",
    attributes: [],
    images: [],
    ...details,
  }

  const setName = name => {
    product.name = name
  }

  const setType = type => {
    product.type = type
  }

  const setDescription = description => {
    product.description = description
  }

  const addAttribute = (attribute: string) => {
    product.attributes.push(attribute)
  }

  const removeAttribute = (attribute: string) => {
    product.attributes = product.attributes.filter(_attribute => {
      return _attribute !== attribute
    })
  }

  const addImage = src => {
    product.images.push(src)
  }

  const removeImage = src => {
    product.images = product.images.filter(_src => {
      return _src !== src
    })
  }

  const save = () => {
    return product.id
      ? connect.updateProduct(product)
      : connect.createProduct(product)
  }

  const json = () => {
    return { ...product }
  }

  return {
    setName,
    setType,
    setDescription,
    addAttribute,
    removeAttribute,
    addImage,
    removeImage,
    json,
    save,
  }
}

export default create
