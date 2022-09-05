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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  useColorMode,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import '../../App.css'
import { ModalAuth } from '../Auth/Modal'
import { CartDrawer } from '../Cart/CartDrawer'
import { FaRegUser } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { logout } from '../../Redux/Features/Auth/AuthSlice'

const Navbar = () => {
  const [menu] = useMediaQuery('(min-width: 460px)')
  const navColor = useColorModeValue(
    'linear(to-r, blue.300, green.100)',
    'linear(to-r, red.100, pink.700)'
  )
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  return (
    <Flex
      direction="row"
      px="4"
      align="center"
      bgGradient={navColor}
      className="navbar"
      w="100%"
    >
      {menu ? (
        <>
          <Image ml="3" src={logocarrito} w="80px" m="2" />
          <Heading m="1" fontSize="2xl" color="pink.700">
            Kida&#39;s Shop
          </Heading>
          <IconButton
            as={RouterLink}
            to="/"
            icon={<GoHome />}
            fontSize="2xl"
            colorScheme="teal"
            variant="ghost"
          />
          <Button
            variant="ghost"
            as={RouterLink}
            fontSize="xl"
            to="/products"
            colorScheme="teal"
          >
            Store
          </Button>
          <Spacer></Spacer>
          <Flex fontSize="md" gap="3">
            <CartDrawer onOpenModal={onOpenModal} />
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              colorScheme="teal"
              variant="ghost"
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
              <>
                <Button
                  onClick={onOpenModal}
                  colorScheme="teal"
                  variant="outline"
                >
                  Log In
                </Button>
                <ModalAuth
                  isOpenModal={isOpenModal}
                  onCloseModal={onCloseModal}
                />
              </>
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
              {user ? (
                <>
                  <MenuItem as={RouterLink} to="/profile">
                    Profile
                  </MenuItem>
                  <MenuItem onClick={() => dispatch(logout())}>
                    Sign Out
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={onOpenModal}>Log in</MenuItem>
                  <ModalAuth
                    isOpenModal={isOpenModal}
                    onCloseModal={onCloseModal}
                  />
                </>
              )}
            </MenuList>
          </Menu>
          <IconButton
            as={RouterLink}
            to="/"
            icon={<GoHome />}
            fontSize="2xl"
            colorScheme="teal"
            variant="ghost"
          />
          <Link
            as={RouterLink}
            mx="2"
            fontSize="xl"
            to="/products"
            color="whiteAlpha.800"
          >
            Store
          </Link>
          <Spacer></Spacer>
          <CartDrawer />
        </Flex>
      )}
    </Flex>
  )
}

export { Navbar }
