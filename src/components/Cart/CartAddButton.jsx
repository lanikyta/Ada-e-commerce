import { useDispatch } from 'react-redux'
import { useToast, Button } from '@chakra-ui/react'
import { FaCartPlus } from 'react-icons/fa'
import { addToCart } from '../../Redux/Features/Cart/CartSlice'
const CartAddButton = ({ item }) => {
  const dispatch = useDispatch()
  const toast = useToast()
  const handleClickAdd = () => {
    dispatch(
      addToCart({
        item,
        quantity: 1,
      })
    )
    toast({
      title: 'Item added',
      description: "We've added correctly the item to your cart.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Button onClick={handleClickAdd}>
      <FaCartPlus />
    </Button>
  )
}

export { CartAddButton }
