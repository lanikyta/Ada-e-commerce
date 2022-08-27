import { useEffect, useState } from 'react'
import shopApi from '../services/api'

const useGet = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    const getData = async () => {
      await shopApi
        .get('/products?populate=image')
        .then((res) => setData(res.data))
        .then(setIsLoading(false))
        .catch((err) => {
          setError(err)
          setIsLoading(false)
        })
    }
    getData()
  }, [])

  return { data, isLoading, error }
}

export { useGet }
