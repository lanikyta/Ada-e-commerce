import { Link as RouterLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import logocarrito from '../../assets/logocarrito.png'
import {
  Heading,
  IconButton,
  Spacer,
  Flex,
  Link,
  Button,
  ButtonGroup,
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
import { FaRegUser } from 'react-icons/fa'
import { logout } from '../../Redux/Features/Auth/AuthSlice'

const Header = () => {
  const [menu] = useMediaQuery('(min-width: 460px)')

  const { colorMode, toggleColorMode } = useColorMode()

  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  return (
    <Flex
      direction="row"
      px="1"
      align="center"
      bgGradient="linear(to-r, blue.300, green.100)"
      className="navbar"
    >
      {menu ? (
        <>
          <Image ml="3" src={logocarrito} w="30px" />

          <Heading p="2" m="1" fontSize="2xl" color="pink.700">
            Kida Shop
          </Heading>
          <Link as={RouterLink} fontSize="xl" to="/" color="pink">
            Home
          </Link>
          <Spacer></Spacer>
          <Flex fontSize="md" gap="3">
            <CartDrawer />
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
            {user ? (
              <ButtonGroup>
                <Button
                  as={RouterLink}
                  leftIcon={<FaRegUser />}
                  to="/profile"
                  colorScheme="teal"
                >
                  Profile
                </Button>
                <Button colorScheme="red" onClick={() => dispatch(logout())}>
                  Sign Out
                </Button>
              </ButtonGroup>
            ) : (
              <ModalAuth />
            )}
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
