import { Box, useColorModeValue } from '@chakra-ui/react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
const ShopLayout = ({ children }) => {
  const bg = useColorModeValue('red.100', 'cyan.900')
  const color = useColorModeValue('blue.900', 'cyan.200')
  return (
    <Box minH="100vh" maxW="100vw" pb="14" bg={bg} color={color}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}

export { ShopLayout }
