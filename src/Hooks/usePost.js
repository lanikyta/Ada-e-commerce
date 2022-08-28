import { useEffect, useState } from 'react'
import shopApi from '../services/api'

const usePost = (data, createAcc) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const postData = () => {
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
        .then((res) => console.log(res))
        .then(setIsLoading(false))
        .catch((err) => {
          setError(err)
          setIsLoading(false)
        })
    }
    postData()
  }, [])

  return { error }
}

export { usePost }
