import { VStack } from '@chakra-ui/react'
import { Footer } from './Footer'
import { Header } from './Header'
const ShopLayout = ({ children }) => {
  return (
    <VStack minH="100vh">
      <Header />
      <main>{children}</main>
      <Footer />
    </VStack>
  )
}

export { ShopLayout }
