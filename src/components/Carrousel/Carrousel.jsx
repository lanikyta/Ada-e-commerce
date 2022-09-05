import { Box, Image, Spinner } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import { useGet } from '../../Hooks/useGet'

const Carrousel = () => {
  const { data, isLoading } = useGet('/carousels', 'image')
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  if (isLoading) {
    return <Spinner color="red.500" size="xl" />
  }
  return (
    <Box w={['80%', null, null, '40em', '40em']} mx="auto" my="10">
      <Slider {...settings}>
        {data?.data.map((elem) => (
          <Image
            w="100"
            src={elem.attributes.image.data.attributes.url}
            key={elem.id}
          />
        ))}
      </Slider>
    </Box>
  )
}
export { Carrousel }
