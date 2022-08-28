import {
  Button,
  Heading,
  HStack,
  Image,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'

import { CartAddButton } from '../Cart/CartAddButton'

const ProductCard = ({ item }) => {
  const {
    attributes: { image, description, price, title },
  } = item

  return (
    <VStack boxShadow="md" p="2" my="2">
      <Image src={image.data?.attributes.url} w="300px" />
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <Text>${price}</Text>
      <HStack>
        <Button>Details</Button>
        <CartAddButton item={item} />
      </HStack>
    </VStack>
  )
}

export { ProductCard }
