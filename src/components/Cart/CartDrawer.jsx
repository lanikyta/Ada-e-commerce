import { Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import empty from '../../assets/emptyCart.png'
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
  useToast,
  Image,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { BsCart2 } from 'react-icons/bs'
import { CartItem } from './CartItem'

const CartDrawer = ({ onOpenModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const toast = useToast()
  const cart = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.auth)

  let count = 0
  const calculateTotal = () => {
    cart.forEach((element) => {
      count = count += element.item.attributes.price * element.quantity
    })
  }
  calculateTotal()
  const handleCheckout = () => {
    onClose()
    if (!user) {
      toast({
        title: 'Error',
        description: 'You must be logged in to access here. Plis sign in!',
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
      setTimeout(() => {
        onOpenModal()
      }, 500)
    }
  }
  return (
    <>
      <IconButton
        icon={<BsCart2 />}
        colorScheme="teal"
        fontSize="2xl"
        variant="ghost"
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
            {cart.length === 0 ? (
              <Image src={empty} w="80%" mx="auto" my="10" />
            ) : (
              <TableContainer>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Item</Th>
                      <Th />
                      <Th />
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
                      <Th />
                      <Th />
                      <Th fontFamily="mono" isNumeric>
                        {count}
                      </Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              as={RouterLink}
              to="/checkout"
              colorScheme="teal"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export { CartDrawer }
