import {
  Avatar,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Tag,
  Td,
  Tr,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/Features/Cart/CartSlice'

const CheckoutItem = ({ product }) => {
  const {
    item: {
      attributes: { title, price, image },
    },
    quantity,
  } = product
  const [quantityNew, setQuantityNew] = useState(quantity)

  const dispatch = useDispatch()
  const handleChangeQtty = () => {
    dispatch(
      addToCart({
        item: product.item,
        quantity: quantityNew - quantity,
      })
    )
  }
  return (
    <Tr>
      <Td>
        <Avatar src={image.data.attributes.url} />
        <Tag size="sm" colorScheme="pink">
          {quantity}
        </Tag>
      </Td>
      <Td>{title}</Td>
      <Td isNumeric>
        <NumberInput
          size="xs"
          maxW={16}
          defaultValue={1}
          min={1}
          value={quantityNew}
          onChange={handleChangeQtty}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper
              onClick={() => setQuantityNew(quantityNew + 1)}
            />
            <NumberDecrementStepper
              onClick={() => quantity !== 1 && setQuantityNew(quantityNew - 1)}
            />
          </NumberInputStepper>
        </NumberInput>
      </Td>
      <Td isNumeric>{price * quantity}</Td>
    </Tr>
  )
}

export { CheckoutItem }
