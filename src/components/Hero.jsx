
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocation } from "@fortawesome/free-solid-svg-icons";

import image1 from '../assets/hotelimg.jpg';
import image2 from '../assets/lobby3.png';

const Hero = () => {
  return (
    <div className="relative h-[100vh] w-full">
     
      <img
        src={image1}
        alt="Hotel"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

     
      <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-[#093f44] to-transparent"></div>

      <div className="relative z-10 flex flex-col justify-center h-full text-white text-center md:text-left p-4 sm:p-8 md:p-12 gap-6 md:ml-12 lg:ml-24 max-w-[90%] md:max-w-[700px] mx-auto md:mx-0">
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-snug">
            Hilton A Sanctuary of Elegance And Comfort
          </p>
        </div>
        <div>
          <p className="text-base sm:text-lg md:text-xl">
            Experience luxury and comfort at Hilton, where exceptional service meets elegant design. Book your stay today!
          </p>
        </div>

       
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
          <Link to="/room-booking" className="no-underline">
            <div className="bg-yellow-500 text-black font-semibold md:text-md md:px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300 flex items-center gap-2 cursor-pointer justify-center">
              <FontAwesomeIcon icon={faCalendar} className="w-6 h-6" />
              Book Now
            </div>
          </Link>
          <div className="text-white font-semibold text-md px-2 py-1 rounded-lg hover:underline transition duration-300 flex items-center gap-2 cursor-pointer justify-center">
            <FontAwesomeIcon icon={faLocation} className="w-6 h-8 rounded-full bg-white text-red-500 p-1" />
            Watch Hilton View
          </div>
        </div>
      </div>

  
      <div
        className=" hidden md:block
          absolute z-10 bg-gray-600 bg-opacity-60 p-3 rounded-xl 
          w-[220px] sm:w-[150px] md:w-[280px] 
          bottom-4 right-4 md:right-12 lg:right-40 
        "
      >
        <img
          src={image2}
          alt="Hotel"
          className="w-full rounded-xl shadow-md h-[120px] sm:h-[150px] object-cover"
        />
        <div className="flex justify-between items-start mt-2 lg:p-2">
          <p className="text-white text-sm sm:text-base">
            Enjoy the moment in sea beach with family
          </p>
          <div className="flex flex-col w-1/3 ">
            <p className="text-white font-bold text-lg sm:text-xl">&#x20B9; 800</p>
            <p className="text-yellow-400 text-sm">per day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
