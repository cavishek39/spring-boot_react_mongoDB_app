import { useState } from 'react'
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import './App.css'
import api from './api/axiosConfig'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/home/Home'
import Trailer from './components/trailer/Trailer'
import Reviews from './components/reviews/Reviews'
import NotFound from './components/notFound/NotFound'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Trailer/:ytTrailerId' element={<Trailer />}></Route>
            <Route
              path='/Reviews/:movieId'
              element={
                <Reviews
                // getMovieData={getMovieData}
                // movie={movie}
                // reviews={reviews}
                // setReviews={setReviews}
                />
              }></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  )
}

export default App
