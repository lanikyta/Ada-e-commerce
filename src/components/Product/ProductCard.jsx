import {
  Button,
  Heading,
  Image,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { FaCartPlus } from 'react-icons/fa'

const ProductCard = () => {
  const toast = useToast()
  const handleClickAdd = () => {
    toast({
      title: 'Item added',
      description: "We've added correctly the item to your cart.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }
  return (
    <VStack>
      <Image src="https://collectors-land.com/wp-content/uploads/2021/01/719IK-W1LNL._AC_SL1400_.jpg" />
      <Heading>Nombre del art xD</Heading>
      <Text>Aqui va breve descripcion del art</Text>
      <Button>Details</Button>
      <Button onClick={handleClickAdd}>
        <FaCartPlus />
      </Button>
    </VStack>
  )
}

export { ProductCard }
