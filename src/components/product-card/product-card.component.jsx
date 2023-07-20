import { useContext } from 'react'
import { CartContext } from '../contexts/cart.context'

import {
  ProductCardContainer,
  Footer,
  FooterName,
  FooterPrice,
  ProductContainerButton,
} from './product-card.styles'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <FooterName>{name}</FooterName>
        <FooterPrice>{price}$</FooterPrice>
      </Footer>
      <ProductContainerButton onClick={addProductToCart}>
        Add to Card
      </ProductContainerButton>
    </ProductCardContainer>
  )
}

export default ProductCard
