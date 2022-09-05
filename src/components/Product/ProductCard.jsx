import { Link as RouterLink } from 'react-router-dom'
import { Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'

import { CartAddButton } from '../Cart/CartAddButton'

const ProductCard = ({ item }) => {
  const {
    attributes: { image, description, price, title },
  } = item

  return (
    <VStack
      bg="whiteAlpha.200"
      boxShadow="lg"
      p="3"
      my="2"
      borderRadius="2xl"
      w="20em"
      justify="space-between"
    >
      <Image src={image.data?.attributes.url} w="300px" />
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <Text>${price}</Text>
      <HStack>
        <Button as={RouterLink} to={`/products/${item.id}`}>
          Details
        </Button>
        <CartAddButton item={item} />
      </HStack>
    </VStack>
  )
}

export { ProductCard }
