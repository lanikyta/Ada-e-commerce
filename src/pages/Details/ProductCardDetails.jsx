import { useParams, Link as RouterLink } from 'react-router-dom'
import {
  Button,
  ButtonGroup,
  Center,
  Heading,
  Image,
  Spacer,
  Spinner,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useGet } from '../../Hooks/useGet'
import { CartAddButton } from '../../components/Cart/CartAddButton'

const ProductCardDetails = () => {
  const { id } = useParams()
  const { data, isLoading } = useGet(`/products/${id}`, 'image')
  if (isLoading) {
    return (
      <Center my="10">
        <Spinner size="lg" color="red" />
      </Center>
    )
  }
  return (
    <Stack
      p="5"
      w="60%"
      direction={['column', null, 'row']}
      mx="auto"
      my="10"
      border="2px"
      borderColor="teal.400"
      borderRadius="md"
      gap="2"
      justify="center"
      alignItems="center"
      textAlign="center"
    >
      <Image
        maxW="50%"
        src={data.data.attributes.image.data.attributes.url}
        alt={data.data.attributes.title}
      />
      <VStack>
        <Heading>{data.data.attributes.title}</Heading>
        <Text>{data.data.attributes.description}</Text>
        <Text>{data.data.attributes.price}</Text>
        <Spacer />
        <ButtonGroup>
          <Button as={RouterLink} to={`/products`} colorScheme="teal">
            Back
          </Button>
          <CartAddButton item={data?.data} />
        </ButtonGroup>
      </VStack>
    </Stack>
  )
}

export { ProductCardDetails }
