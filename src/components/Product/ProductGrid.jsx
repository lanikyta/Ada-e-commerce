import { Flex, Spinner } from '@chakra-ui/react'
import { useGet } from '../../Hooks/useGet'
import { ProductCard } from './ProductCard'
const ProductGrid = () => {
  const { data, isLoading, error } = useGet()
  // console.log(data, isLoading, error)
  if (isLoading) {
    return <Spinner color="red.500" size="xl" />
  }
  return (
    <Flex my="10" gap="4" w="90%" justify="space-around" wrap="wrap" mx="auto">
      {data?.data?.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </Flex>
  )
}

export { ProductGrid }
