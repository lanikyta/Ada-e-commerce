import { Box, Heading, Image } from '@chakra-ui/react'
import { Carrousel } from '../../components/Carrousel/Carrousel'
import { useDispatch } from 'react-redux'
import { clearFilter } from '../../Redux/Features/Filter/FilterSlice'
import popStore from '../../assets/popStore.png'

const Home = () => {
  const dispatch = useDispatch()
  dispatch(clearFilter())
  return (
    <Box my="10" textAlign="center">
      <Carrousel />
      <Image w="7em" src={popStore} mx="auto" />
      <Heading m="2">Find the best Funko Pops and more!</Heading>
    </Box>
  )
}

export { Home }
