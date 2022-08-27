import { Box, Heading } from '@chakra-ui/react'
import { Filter } from '../../components/Filter/Filter'
import { ProductGrid } from '../../components/Product/ProductGrid'

const Home = () => {
  return (
    <Box w="95vw" mx="auto" my="10" textAlign="center">
      <Heading m="2">Our products</Heading>
      <Filter />
      <ProductGrid />
    </Box>
  )
}

export { Home }
