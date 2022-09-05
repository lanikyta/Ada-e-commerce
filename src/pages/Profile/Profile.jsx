import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Button,
  Collapse,
  Fade,
  Heading,
  HStack,
  Image,
  Spinner,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useGet } from '../../Hooks/useGet'
import { Pedido } from './Pedido'
import pop from '../../assets/popPerfil.png'
import { logout } from '../../Redux/Features/Auth/AuthSlice'

const Profile = () => {
  const { user } = useSelector((state) => state.auth)
  const { data, isLoading, error } = useGet(`/users/${user.id}`, 'orders')
  const { isOpen, onToggle } = useDisclosure()
  const dispatch = useDispatch()
  return (
    <Stack
      direction={['column', 'row', 'row', 'row', 'row']}
      w="70%"
      my="10"
      mx="auto"
      justify="space-around"
    >
      <VStack>
        <Heading>Profile</Heading>
        <Stack>
          <Button colorScheme="teal" variant="outline" onClick={onToggle}>
            My Orders
          </Button>
          <Collapse in={isOpen} animateOpacity>
            <Box
              p="40px"
              mt="4"
              rounded="md"
              shadow="md"
              bg="whiteAlpha.300"
              w={['90vw', '60vw', '42vw']}
            >
              {isLoading ? (
                <Spinner />
              ) : (
                data?.orders?.map((item) => (
                  <Pedido key={item.id} item={item} />
                ))
              )}
            </Box>
          </Collapse>
        </Stack>
      </VStack>
      <VStack>
        <Image src={pop} />
        <Heading>Welcome {user.username}</Heading>
        <Text>Your email: {user.email}</Text>
        <Button onClick={() => dispatch(logout())} colorScheme="red">
          Sign Out
        </Button>
      </VStack>
    </Stack>
  )
}

export { Profile }
