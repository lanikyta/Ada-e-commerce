import { useSelector } from 'react-redux'
import { Heading, Text, VStack } from '@chakra-ui/react'

const Profile = () => {
  const { user } = useSelector((state) => state.auth)
  console.log(user)
  return (
    <VStack>
      <Heading>PROFILE</Heading>
      <Heading>Welcome {user.username}</Heading>
      <Text>Your email: {user.email}</Text>
    </VStack>
  )
}

export { Profile }
