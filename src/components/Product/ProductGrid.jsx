import { Button, Flex } from '@chakra-ui/react'
import { useGet } from '../../Hooks/useGet'
import { ProductCard } from './ProductCard'
const ProductGrid = () => {
  const { data, isLoading, error } = useGet()
  console.log(data, isLoading, error)
  if (isLoading) {
    return <Button isLoading />
  }
  return (
    <Flex my="10" gap="4" justify="space-around">
      {data?.data?.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </Flex>
  )
}

export { ProductGrid }
