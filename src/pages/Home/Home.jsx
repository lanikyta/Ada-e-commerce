import { Box, Heading } from '@chakra-ui/react'
import { Filter } from '../../components/Filter/Filter'
import { ProductGrid } from '../../components/Product/ProductGrid'

const Home = () => {
  return (
    <Box>
      <Heading>Our products</Heading>
      <Filter />
      <ProductGrid />
    </Box>
  )
}

export { Home }
