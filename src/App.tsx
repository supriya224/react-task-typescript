import React, { useEffect } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from './components/Loading/Spinner'
import { fetchAllPokemons, fetchDittoPokemon } from './services/thunks'
import { useAppDispatch, useAppSelector } from './redux/store'
const Detail = React.lazy(() => import('./Pages/Details.page'))
const Bookmark = React.lazy(() => import('./Pages/Bookmark.page'))
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import ImageLoading from './components/ImageLoading'
import Home from './Pages/Home.page'

import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Layout from './Pages/Layout.page'

function App() {
  const dispatch = useAppDispatch()
  const { limit, offset } = useAppSelector((state) => state.pokemon)
  const fetchPokemons = (newPage: number) => {
    dispatch(fetchAllPokemons(`offset=${offset}&limit=${newPage}`))
  }
  useEffect(() => {
    fetchPokemons(limit)
  }, [limit])

  const queryClient = new QueryClient()
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path='detail/:id'
            element={
              <React.Suspense fallback={<>...</>}>
                <Detail />
              </React.Suspense>
            }
          />
          <Route
            path='bookmarks'
            element={
              <React.Suspense fallback={<>...</>}>
                <Bookmark />
              </React.Suspense>
            }
          />
          <Route path='*' element={<h1>Not found</h1>} />
        </Route>
      </Routes>
      <QueryClientProvider client={queryClient}>
        <ImageLoading />
      </QueryClientProvider>
    </div>
  )
}

export default App
