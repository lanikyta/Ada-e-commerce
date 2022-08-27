import { useState } from 'react'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

const schema = object({
  email: string()
    .email('Must be a valid email')
    .required('This is a required field'),
  password: string()
    .required('This is a required field')
    .min(8, 'At least 8 characthers'),
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  const [showPassword, setShowPassword] = useState(false)
  const onSubmit = async (data) => {
    await console.log(data)
  }

  return (
    <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" {...register('email')} />

        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
          />
          <InputRightElement>
            <Button
              variant="ghost"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
      <Button colorScheme="teal" w="80%" type="submit">
        Sign In
      </Button>
    </Stack>
  )
}

export { Login }
