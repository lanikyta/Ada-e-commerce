import {
  Button,
  Heading,
  HStack,
  Image,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'

const ProductCardDetails = ({ item }) => {
  return (
    <Box>
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
    </Box>
  )
}

export { ProductCardDetails }
