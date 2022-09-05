import { useSelector } from 'react-redux'
import { usePost } from '../../Hooks/usePost'
import {
  Heading,
  VStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react'
import { CheckoutItem } from './CheckoutItem'
import { Navigate } from 'react-router-dom'

const Checkout = () => {
  const cart = useSelector((state) => state.cart)
  const { postOrder } = usePost()

  const handleOrder = () => {
    postOrder(cart)
  }
  let count = 0
  const calculateTotal = () => {
    cart.forEach((element) => {
      count = count += element.item.attributes.price * element.quantity
    })
  }
  calculateTotal()
  if (cart.length === 0) {
    return <Navigate to="/" replace />
  }
  return (
    <VStack my="10">
      <Heading>My Cart</Heading>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Thanks for buying in Kida&#39;s Shop</TableCaption>
          <Thead>
            <Tr>
              <Th />
              <Th>Item</Th>
              <Th isNumeric>Qtty</Th>
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((product) => (
              <CheckoutItem key={product.item.id} product={product} />
            ))}
          </Tbody>

          <Tfoot>
            <Tr fontSize="sm">
              <Td>Subtotal</Td>
              <Td />
              <Td />
              <Td isNumeric>{count}</Td>
            </Tr>
            <Tr fontSize="sm">
              <Td>Shipment</Td>

              <Td>We are note making shipments at the moment =(</Td>
              <Td />
              <Td isNumeric>0</Td>
            </Tr>
            <Tr>
              <Th>Total</Th>
              <Td />
              <Td />
              <Th fontFamily="body" fontSize="xl" isNumeric>
                {count}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Button onClick={handleOrder}>Buy</Button>
    </VStack>
  )
}

export { Checkout }
