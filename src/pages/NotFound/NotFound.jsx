import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Error 404</AlertTitle>
      <AlertDescription>Page not found.</AlertDescription>
    </Alert>
  )
}

export { NotFound }
