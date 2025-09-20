import React, { useState } from 'react'
import room_img from '../assets/room1.jpg'
import lawn_img from '../assets/lawn1.jpg'
import restaurant_img from '../assets/restaurant1.jpg'
import hall_img from '../assets/banquet_hall1.jpg'
import bar_img from '../assets/bar1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer'

const Rooms = () => {
  const rooms = [
    { id: 1, type: "DELUXE ROOM", image: room_img },
    { id: 2, type: "EXECUTIVE ROOM", image: lawn_img },
    { id: 3, type: "STANDARD ROOM", image: restaurant_img },
    { id: 4, type: "DELUXE ROOM", image: hall_img },
    { id: 5, type: "DELUXE ROOM ", image: bar_img },
  ];

  const amenities = [
    '32" LED TV', 'Free Shoe Shine', 'Laundry with same day delivery',
    'Hair Dryer', 'Generator Backup', 'Doctor On Call',
    'Double Bed', 'Ample car parking', 'Room Service',
    '24 Hours Hot & Cold Water', 'Quiet & peaceful surrounding'
  ];


  const [selectedImage, setSelectedImage] = useState(rooms[0].image);

  const handleImage = (image) => {
    setSelectedImage(image);
  };



  return (
    <div>

      <div className="relative">
        <img
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:max-h-[600px] object-cover"
          src={selectedImage}
          alt="Room"
        />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     text-3xl sm:text-5xl md:text-6xl lg:text-8xl 
                     text-white font-serif text-center px-2">
          DELUXE ROOM
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-4 px-2 sm:px-4">
        {rooms.map((item) => (
          <img
            key={item.id}
            onClick={() => handleImage(item.image)}
            className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] object-cover 
                     rounded-md hover:scale-110 hover:shadow-lg shadow-amber-100 cursor-pointer transition"
            src={item.image}
            alt="Room"
          />
        ))}
      </div>


      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-8 lg:p-24">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <p className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif text-amber-800">
              DELUXE AC ROOM
            </p>
            <span className="flex flex-wrap gap-3">
              <button className="bg-yellow-500 text-white px-3 py-2 rounded text-sm sm:text-md font-semibold hover:bg-yellow-400 cursor-pointer">
                Double &#x20B9; 3400 / night
              </button>
              <button className="bg-yellow-500 text-white px-3 py-2 rounded text-sm sm:text-md font-semibold hover:bg-yellow-400 cursor-pointer">
                Single &#x20B9; 2800 / night
              </button>
            </span>
          </div>

          <div className="text-gray-700 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              The Hotel Ayodhya has 18 Deluxe Rooms, located in the heart of Kolhapur city. The hotel features spacious luxury rooms, a multicuisine restaurant, a garden café, and banquet & conference facilities perfect for business or leisure.
            </p>
            <p>
              Hotel Ayodhya is nearby to every destination which you would like to visit in and near Kolhapur: Mahalaxmi Temple, Kolhapur MIDC, Shiroli MIDC, Gokul Shirgaon MIDC, Bhavani Mandap, Rankala, New Palace, Panhala, Jyotiba, and more.
            </p>
            <p className="font-semibold text-gray-800">
              Complimentary Breakfast (Time: 7:30am – 9:30am)
            </p>
          </div>
        </div>

      
        <div className="w-full lg:w-1/3 bg-green-100 p-4 rounded-md">
          <p className="text-xl sm:text-2xl font-bold font-serif mb-4 text-amber-800">
            ROOM FACILITY
          </p>
          <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex items-center hover:bg-sky-200 rounded-xl p-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-5 h-5 mr-3" />
              <span>Complimentary Wi-Fi internet Facility</span>
            </li>
            <li className="flex items-center hover:bg-sky-200 rounded-xl p-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-5 h-5 mr-3" />
              <span>Complementary Breakfast</span>
            </li>
            <li className="flex items-center hover:bg-sky-200 rounded-xl p-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-5 h-5 mr-3" />
              <span>1 Ltr Mineral Water</span>
            </li>
            <li className="flex items-center hover:bg-sky-200 rounded-xl p-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-5 h-5 mr-3" />
              <span>Valuables to be deposited with the manager for safe deposit</span>
            </li>
            <li className="flex items-center hover:bg-sky-200 rounded-xl p-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-5 h-5 mr-3" />
              <span>Company credit & cheque only on prior information</span>
            </li>
            <li className="flex items-center hover:bg-sky-200 rounded-xl p-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-5 h-5 mr-3" />
              <span>We accept major credit & debit cards</span>
            </li>
          </ul>
        </div>
      </div>

     
      <div className="p-4 sm:p-8 lg:p-24">
        <p className="text-xl sm:text-2xl font-bold font-serif mb-4 text-amber-800">
          ROOM FEATURES
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-sm sm:text-base">
          {amenities.map((amenity, index) => (
            <li
              key={index}
              className="flex items-center hover:bg-sky-200 rounded-xl p-2"
            >
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-4 h-4 mr-3 flex-shrink-0" />
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );

}

export default Rooms
