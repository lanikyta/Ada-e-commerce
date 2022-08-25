import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  Stack,
} from '@chakra-ui/react'
const Filter = () => {
  return (
    <Stack as="form" direction="row" alignItems="flex-end">
      <FormControl>
        <Input id="name" placeholder="Search" />
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
      <FormControl>
        <Select placeholder="Category">
          <option value="movies">Movies</option>
          <option value="anime">anime</option>
          <option value="series">series</option>
        </Select>
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
      <Button type="submit">Search</Button>
    </Stack>
  )
}

export { Filter }
