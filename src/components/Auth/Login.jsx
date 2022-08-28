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
import shopApi from '../../services/api'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/Features/Auth/AuthSlice'

const schema = object({
  username: string().min(4, 'At least 4 characthers'),
  email: string()
    .email('Must be a valid email')
    .required('This is a required field'),
  password: string()
    .required('This is a required field')
    .min(8, 'At least 8 characthers'),
})

const Login = ({ onClose, createAcc }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  const [showPassword, setShowPassword] = useState(false)
  const idR = 'R'
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    shopApi
      .post(
        `/auth/local${createAcc ? '/register' : ''}`,
        createAcc
          ? {
              username: data.username,
              email: data.email,
              password: data.password,
            }
          : {
              identifier: data.email,
              password: data.password,
            }
      )
      .then((res) => {
        dispatch(login(res.data))
        onClose()
      })

      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Stack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      alignItems="center"
      gap="2"
    >
      {createAcc && (
        <>
          <FormControl isInvalid={errors.username}>
            <FormLabel htmlFor={'usernameR'}>Username</FormLabel>
            <Input id={'usernameR'} {...register('username')} />
            <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
          </FormControl>
        </>
      )}
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor={`email${createAcc ? idR : ''}`}>Email</FormLabel>
        <Input id={`email${createAcc ? idR : ''}`} {...register('email')} />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password}>
        <FormLabel htmlFor={`password${createAcc ? idR : ''}`}>
          Password
        </FormLabel>
        <InputGroup>
          <Input
            id={`password${createAcc ? idR : ''}`}
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
