import React, { useState } from 'react'
import room_img from '../assets/room1.jpg'
import lawn_img from '../assets/lawn1.jpg'
import restaurant_img from '../assets/restaurant1.jpg'
import hall_img from '../assets/banquet_hall1.jpg'
import bar_img from '../assets/bar1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer'

const Restaurants = () => {
  const rooms = [
    { id: 1, image: room_img },
    { id: 2, image: lawn_img },
    { id: 3, image: restaurant_img },
    { id: 4, image: hall_img },
    { id: 5, image: bar_img },
  ];



  const [selectedImage, setSelectedImage] = useState(rooms[0].image);

  const handleImage = (image) => {
    setSelectedImage(image);
  };

  
return (
  <div>
  
    <div className="relative">
      <img
        className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
        src={selectedImage}
        alt="Room"
      />
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     text-2xl sm:text-4xl md:text-5xl lg:text-6xl 
                     text-white font-serif text-center px-4">
        Mithila Restaurant
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-2 mt-4 px-2 sm:px-4">
      {rooms.map((item) => (
        <img
          key={item.id}
          onClick={() => handleImage(item.image)}
          className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-md object-cover
                     hover:scale-110 hover:shadow-lg transition cursor-pointer"
          src={item.image}
          alt="Room"
        />
      ))}
    </div>

    
    <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-24 py-6 sm:py-10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-amber-800">
          Mithila Restaurant : Hotel Hilton
        </p>


      </div>

      <div className="text-gray-700 space-y-4 text-sm sm:text-base leading-relaxed">
        <p>
          The Hotel Hilton has 18 Deluxe Rooms, located in the heart of Kolhapur city. The hotel features spacious luxury rooms, a multicuisine restaurant, a garden café, and banquet & conference facilities perfect for business or leisure.
        </p>
        <p>
          We welcome you to delicious special cuisine at Mithila Restaurant in Hotel Ayodhya, Kolhapur. We serve wide range of Indian, Chinese, Continental cuisines to choose from. We guarantee you a grand feast experience in our restaurant. People with different tastes and liking will always find their solace at either of the restaurants of their preferences of cuisine.
        </p>
      </div>
    </div>

    <Footer />
  </div>
);

}



export default Restaurants
