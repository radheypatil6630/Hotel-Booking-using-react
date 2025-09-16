import './App.css'
import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Rooms from './components/Rooms'
import Restaurant from './components/Restaurants'
import About from './components/About'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RoomBooking from './components/Room-booking'
import NotFound from './components/NotFound'

function Layout({ children }) {
  return (
    <>
      <Navbar />
  
      {children}
    </>
  )
}

function App() {
const routes = createBrowserRouter([
    {
        path:"/",
        element:<Layout>
            <Home/>
        </Layout>
    },
    {
        path:"/rooms",
        element:<Layout>
            <Rooms/>
        </Layout>
    },
    {
        path:"/restaurant",
        element:<Layout>
            <Restaurant/>
        </Layout>
    },
    {
        path:"/about",
        element:<Layout>
            <About/>
        </Layout>
    },
    {
        path:"/room-booking",
        element:<Layout>
            <RoomBooking/>
        </Layout>
    },
    {
        path:"*",
        element:<NotFound/>
    }
])

    return (
      <>
         <RouterProvider router={routes}/>
            {/* <Navbar/> */}
        {/* </RouterProvider> */}

        {/* <Navbar/>
        <Hero/> */}
      </>
     
    )

}

export default App
