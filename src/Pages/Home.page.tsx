import React from 'react'
import { Button, PokemonList } from '../components'
import SearchBar from '../components/SearchBar/SearchBar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const gotoBookmark = () => navigate('/bookmarks')

  return (
    <div id='Home_page' className='mt-4 mx-auto '>
      <section className='flex w-full gap-2 justify-center '>
        <SearchBar />
        <Button onClick={gotoBookmark}>bookmark</Button>
      </section>
      <PokemonList />
    </div>
  )
}

export default Home
