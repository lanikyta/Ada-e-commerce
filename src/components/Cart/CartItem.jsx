import { Tr, Td } from '@chakra-ui/react'
const CartItem = ({ element }) => {
  const {
    item: {
      attributes: { image, price, title },
    },
    quantity,
  } = element
  return (
    <Tr>
      <Td>{title}</Td>
      <Td>{quantity}</Td>
      <Td>{price * quantity}</Td>
    </Tr>
  )
}

export { CartItem }
