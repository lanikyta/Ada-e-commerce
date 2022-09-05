import {
  ButtonGroup,
  IconButton,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import '../../App.css'
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs'
const Footer = () => {
  const footColor = useColorModeValue(
    'linear(to-l, blue.300, green.100)',
    'linear(to-l, red.100, pink.700)'
  )
  return (
    <Stack
      w="100%"
      p="2"
      className="footer"
      bgGradient={footColor}
      alignItems="center"
      justify="center"
    >
      <Text color="blackAlpha.600">
        Hecho por{' '}
        <Link color="pink.500" href="" isExternal>
          Aylen ♥
        </Link>
      </Text>
      <ButtonGroup>
        <IconButton
          as={Link}
          href="https://www.linkedin.com/feed/"
          icon={<BsLinkedin />}
          fontSize="2xl"
          colorScheme="teal"
          variant="ghost"
          isExternal
        />
        <IconButton
          as={Link}
          href="https://www.facebook.com/Nikycruz"
          icon={<BsFacebook />}
          fontSize="2xl"
          colorScheme="teal"
          variant="ghost"
          isExternal
        />
        <IconButton
          as={Link}
          href="https://github.com/lanikyta/"
          icon={<BsGithub />}
          fontSize="2xl"
          colorScheme="teal"
          variant="ghost"
          isExternal
        />
      </ButtonGroup>
    </Stack>
  )
}

export { Footer }
