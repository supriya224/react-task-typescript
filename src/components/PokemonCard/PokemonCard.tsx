/* eslint-disable no-debugger */
import React, { ReactNode, useEffect, useState } from 'react'
import { Bookmark } from 'react-feather'
import { Link } from 'react-router-dom'
import ImageLoading from '../ImageLoading'
import { getPokemonFromStorage, setPokemonToStorage } from '../../utils/utils'

const PokemonCard = ({
  name,
  id,
  isBookmarkIconShown = true,
}: {
  name: string
  id?: string
  isBookmarkIconShown?: boolean
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const idAlreadyInTheBookmark = (pokemonId: string) => {
    if (localStorage.getItem('pokemon')) {
      const intialPokemonBookmarks = getPokemonFromStorage()
      if (intialPokemonBookmarks.includes(pokemonId)) setIsBookmarked(true)
      else setIsBookmarked(false)
    }
  }

  const savePokemonInBookmark = (id: string) => {
    if (id) {
      if (localStorage.getItem('pokemon')) {
        const intialPokemonBookmarks = getPokemonFromStorage()
        if (intialPokemonBookmarks.includes(id)) {
          // we remove the id ,if id already exists in storage
          const modifiedBookmarkList = [...intialPokemonBookmarks].filter(
            (bookmark) => bookmark !== id,
          )
          setPokemonToStorage(modifiedBookmarkList)
          setIsBookmarked(false)
        } else {
          // we id not found at data already present in storage then this section run to append more data
          const modifiedBookmarkList = [...intialPokemonBookmarks, id]
          setPokemonToStorage(modifiedBookmarkList)
          setIsBookmarked(true)
        }
      } else {
        // if no bookmarked found then this section runs
        localStorage.setItem('pokemon', JSON.stringify([id]))
        setIsBookmarked(true)
      }
    }
  }
  useEffect(() => {
    if (id) {
      idAlreadyInTheBookmark(id)
    }
  }, [id])

  return (
    <div className='p-4'>
      <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-cyan-800 dark:border-gray-700'>
        {isBookmarkIconShown ? (
          <section id='bookmarked_icon'>
            {isBookmarked ? (
              <Bookmark
                size={20}
                className='cursor-pointer text-red-300 '
                onClick={() => savePokemonInBookmark(id || '')}
              />
            ) : (
              <Bookmark
                size={20}
                className='cursor-pointer '
                onClick={() => savePokemonInBookmark(id || '')}
              />
            )}
          </section>
        ) : null}

        <Link to={`/detail/${id}`}>
          <img className='p-9 rounded-t-lg' src='' alt='product image' />

          <div className='px-5 pb-5'>
            <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
              {name}
            </h5>
            <div className='flex items-center mt-2.5 mb-5'>
              <span className='bg-blue-100 text-blue-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                5.0
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PokemonCard
