import { useEffect, useState } from 'react'
import shopApi from '../services/api'
import { useSelector } from 'react-redux'

const useGet = (params, pop, queryPage) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const filter = useSelector((state) => state.filter)
  useEffect(() => {
    const getData = () => {
      shopApi
        .get(`${params}?populate=${pop}&${queryPage}&${filter}`)
        .then((res) => {
          setData(res.data)
          setIsLoading(false)
        })
        .catch((err) => {
          setError(err)
          setIsLoading(false)
        })
    }
    getData()
  }, [params, pop, queryPage, filter])

  return { data, isLoading, error }
}

export { useGet }
