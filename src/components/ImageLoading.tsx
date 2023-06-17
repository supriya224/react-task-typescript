import React, { useState } from 'react'
import { useQuery } from 'react-query'

const ImageLoading = () => {
  // const [imageObjectURL, setImageObjectURL] = useState<string>();
  const query = useQuery<string | undefined>(
    ['image', 1],
    (): Promise<string | undefined> => {
      return fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(async (r) => {
        if (r.status !== 200) {
          console.log('error')
        }
        const b = await r.blob()
        const cImageObjectURL = URL.createObjectURL(b)
        console.log(cImageObjectURL)
        // setImageObjectURL(cImageObjectURL);
        return cImageObjectURL
      })
    },
    {
      refetchOnWindowFocus: false,
    },
  )
  return (
    <div>
      <div style={{ marginBottom: 150 }}>a</div>
      {query.isLoading && 'Loading...'}
      {query.isError && 'Error...'}
      {query.isSuccess && <img src={query.data ?? ''} width='250px' loading='lazy' />}
    </div>
  )
}

export default ImageLoading
