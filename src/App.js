import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Container from './Container'
import Footer from './Footer'
import Offers from './RestaurantsOffers/Offers';
import SingleRestaurant from './RestaurantsOffers/SingleRestaurant'
import SearchPage from './SearchFolder/SearchPage';
import CuisinePage from './RestaurantsOffers/CuisinePage';


function App() {
  const linkRouter=createBrowserRouter([
    {path:'/',element:<Container/>},
    {path:'/offer',element:<Offers/>},
    {path:'/restaurant/:id',element:<SingleRestaurant/>},
    {path:'/search',element:<SearchPage/>},
    {path:'/filtered/:cuisine',element:<CuisinePage/>}
  ])
  return (
   <>
     {/* <Offers/> */}
     <RouterProvider  router={linkRouter}></RouterProvider>
     <Footer/>

   </>
  )
}

export default App;