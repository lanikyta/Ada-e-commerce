import { Box } from '@chakra-ui/react'
import { Footer } from './Footer'
import { Header } from './Header'
const ShopLayout = ({ children }) => {
  return (
    <Box minH="100vh" w="100vw" pb="10" boxSizing="border-box">
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}

export { ShopLayout }
