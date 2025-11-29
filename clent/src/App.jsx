import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favourite from './pages/Favourite'

const App = () => {
  return (
    <>
      <h1>Movie Booking App</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path= '/mybookings' element= {<MyBookings />} />
        <Route path='/favourite' element={<Favourite />} />
      </Routes>
    </>
  )
}

export default App