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
} from '@chakra-ui/react'

const Checkout = () => {
  return (
    <VStack>
      <Heading>My Cart</Heading>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            These are the products you have added so far
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th isNumeric>Quantity</Th>
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>map y por cada item devuelve un checkoutitem</Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </VStack>
  )
}

export { Checkout }
