import { Center, Link, Text } from '@chakra-ui/react'
import '../../App.css'
const Footer = () => {
  return (
    <Center
      className="footer"
      h="3em"
      bgGradient="linear(to-l, blue.300, green.100)"
    >
      <Text color="red.400">
        Hecho por{' '}
        <Link color="pink.500" href="https://www.linkedin.com/feed/">
          Aylen ♥
        </Link>
      </Text>
    </Center>
  )
}

export { Footer }
