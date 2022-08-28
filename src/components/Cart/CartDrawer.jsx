import { useSelector } from 'react-redux'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { GrCart } from 'react-icons/gr'
import { CartItem } from './CartItem'

const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const cart = useSelector((state) => state.cart)
  return (
    <>
      <IconButton
        ref={btnRef}
        icon={<GrCart />}
        colorScheme="teal"
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>This is your cart</DrawerHeader>

          <DrawerBody>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Item</Th>
                    <Th isNumeric>N°</Th>
                    <Th isNumeric>$</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cart.map((element) => (
                    <CartItem key={element.item.id} element={element} />
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Total</Th>

                    <Th isNumeric></Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export { CartDrawer }
