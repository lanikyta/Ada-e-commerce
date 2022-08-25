import logocarrito from '../../assets/logocarrito.png'
import {
  Heading,
  IconButton,
  Spacer,
  Flex,
  Link,
  Button,
  Image,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  useColorMode,
} from '@chakra-ui/react'

import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import '../../App.css'
import { ModalAuth } from '../Auth/Modal'
import { CartDrawer } from '../Cart/CartDrawer'

const Header = () => {
  const [menu] = useMediaQuery('(min-width: 460px)')

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      direction="row"
      w="100vw"
      align="center"
      bgGradient="linear(to-r, red.900, pink.900)"
      className="navbar"
    >
      {menu ? (
        <>
          <Image ml="3" src={logocarrito} w="30px" />

          <Heading p="2" m="1" fontSize="2xl" color="pink.700">
            Kida Shop
          </Heading>
          <Link fontSize="xl" href="/" color="pink">
            Home
          </Link>

          <Spacer></Spacer>
          <Flex fontSize="md" gap="3">
            <CartDrawer />
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
            <ModalAuth />
            <Button color="gray.700" bgColor="whiteAlpha.500" m="1" size="sm">
              Sign Up
            </Button>
          </Flex>
        </>
      ) : (
        <Flex m="1" direction="row" alignItems="center" w="100vw">
          <Menu>
            <MenuButton
              colorScheme="red"
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>Sign Up</MenuItem>
              <MenuItem>Log in</MenuItem>
            </MenuList>
          </Menu>
          <Link mx="2" fontSize="xl" href="/" color="pink">
            Popular!
          </Link>
          <Spacer></Spacer>
          <LinkBox>
            <LinkOverlay href="https://www.themoviedb.org/" isExternal>
              <Image ml="3" src={logocarrito} w="30px" />
            </LinkOverlay>
          </LinkBox>
        </Flex>
      )}
    </Flex>
  )
}

export { Header }
