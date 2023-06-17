import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface PokemonImageProps {
  name: string
  title: string
  headers: string
  id: number
  email: string
  address: string | number
  pictures: string
}

const PokemonImage: React.FC<PokemonImageProps> = ({ name }) => {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0${name}`,
        )
        const { sprites } = response.data
        const frontDefaultImageUrl: string = sprites.front_default
        setImageUrl(frontDefaultImageUrl)
      } catch (error) {
        console.log(error)
      }
    }

    fetchPokemonData()
  }, [name])

  return <div>{imageUrl && <img src={imageUrl} alt={name} />}</div>
}

export default PokemonImage
