import {
  Button,
  Heading,
  HStack,
  Image,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { FaCartPlus } from 'react-icons/fa'

const ProductCard = ({ item }) => {
  const {
    attributes: { image, description, price, title },
  } = item
  const toast = useToast()
  const handleClickAdd = () => {
    toast({
      title: 'Item added',
      description: "We've added correctly the item to your cart.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }
  return (
    <VStack boxShadow="md" p="2" my="2">
      <Image src={image.data?.attributes.url} w="300px" />
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <Text>${price}</Text>
      <HStack>
        <Button>Details</Button>
        <Button onClick={handleClickAdd}>
          <FaCartPlus />
        </Button>
      </HStack>
    </VStack>
  )
}

export { ProductCard }
