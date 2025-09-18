// Hero.jsx
import React from 'react'
import image1 from '../assets/hotelimg.jpg'
import image2 from '../assets/lobby3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faContactBook, faLocation } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[100vh] ">


      <img
        src={image1}
        alt="Hotel"
        className="absolute inset-0 w-full h-[100vh] object-cover z-0"
      />

      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#093f44] to-transparent"></div>



      <div className="relative z-10 flex flex-col  justify-center md:w-[700px] h-full text-center text-white  bg-opacity-50 p-4 gap-6 md:ml-12">
        <div>
          <p className='text-6xl font-bold font-serif'>Hilton A Sanctuary of Elegance And Comfort</p>
        </div>
        <div>
          <p className='text-xl'>Experience luxury and comfort at Hilton, where exceptional service meets elegant design. Book your stay today!</p>
        </div>
        <div className='flex justify-evenly'>
          <Link to='/room-booking' className=' no-underline'>
            <div className='bg-yellow-500 text-black font-semibold text-md px-4 py-2 rounded-lg ml-4 hover:bg-yellow-400 transition duration-300 flex items-center gap-2  cursor-pointer justify-center'>
              <FontAwesomeIcon icon={faCalendar} className="w-6 h-6" />
              Book Now
            </div>
          </Link>
          <div className=' text-white font-semibold text-md px-2 py-1 rounded-lg ml-4 hover:underline  transition duration-300 flex items-center gap-2  cursor-pointer justify-center'>
            <FontAwesomeIcon icon={faLocation} className="w-6 h-8 rounded-full bg-white text-red-500 p-1" />
            Watch Hilton View
          </div>
        </div>
      </div>

      <div className=' absolute z-10 flex flex-col bg-opacity-0 p-4  bg-gray-500 rounded-xl  right-40 bottom-2 w-[280px] h-[250px] gap-2 mb-4'>

        <img src={image2} alt="Hotel" className="w-full  rounded-xl rounded-lg shadow-md h-[150px]" />
        <div className=' flex justify-between'>
          <p className='text-white'>Enjoy the moment in sea beach with family</p>
          <div className='flex  flex-col w-1/3'>
            <p className='text-white font-bold text-xl'>&#x20B9; 800</p>
            <p className='text-yellow-400'> per day</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Hero
