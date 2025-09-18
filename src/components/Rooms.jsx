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
    { id: 1,type:"DELUXE ROOM", image: room_img },
    { id: 2,type:"EXECUTIVE ROOM", image: lawn_img },
    { id: 3,type:"STANDARD ROOM", image: restaurant_img },
    { id: 4,type:"DELUXE ROOM", image: hall_img },
    { id: 5,type:"DELUXE ROOM ", image: bar_img },
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
      <div>
        <div className='relative'>
          <img className='w-full max-h-[600px]' src={selectedImage} alt="Room" />
          <p className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl text-white font-serif'>DELUXE ROOM</p>
        </div>

        <div className='flex flex-wrap gap-2 mt-2'>
          {rooms.map((item, index) => (
            <img
              key={item.id}
              onClick={() => handleImage(item.image)}
              className='max-w-[100px] max-h-[100px] hover:scale-110 hover:shadow-lg shadow-amber-100 cursor-pointer'
              src={item.image}
              alt="Room"
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col  p-2 lg:p-24'>
        <div className='flex'>
          <div>
            <div className='flex  gap-4 mb-8 px-4'>
              <p className='text-6xl font-bold font-serif text-amber-800'> DELUXE AC ROOM</p>
              <span className='flex gap-4 w-2/3  '>
                <button className=' max-h-14 bg-yellow-500 text-white p-2 py-1   rounded text-md font-semibold hover:bg-yellow-400 cursor-pointer '>Double &#x20B9; 3400 per night</button>
                <button className='max-h-14 bg-yellow-500 text-white p-2 py-1  rounded text-md font-semibold hover:bg-yellow-400 cursor-pointer ' >Single &#x20B9; 2800 per night</button>
              </span>
            </div>

             <div className="text-gray-700 space-y-4">
    <p>
      The Hotel Ayodhya has 18 Deluxe Rooms, located in the heart of Kolhapur city. The hotel features spacious luxury rooms, a multicuisine restaurant, a garden café, and banquet & conference facilities perfect for business or leisure.
    </p>
    <p>
      Hotel Ayodhya is nearby to every destination which you would like to visit in and near Kolhapur: Mahalaxmi Temple, Kolhapur MIDC, Shiroli MIDC, Gokul Shirgaon MIDC, Bhavani Mandap, Rankala, New Palace, Panhala, Jyotiba, and more.
    </p>
    <p className="font-semibold text-gray-800">
      Complementary Breakfast (Time: 7:30am to 9:30am)
    </p>
  </div>
          </div>

          <div className='w-2/3 bg-green-100 p-2'>
            <p className='text-2xl font-bold font-serif mb-4 text-amber-800'> ROOM FACILITY </p>

            <ul className="space-y-3">
              <li className="flex items-center hover: rounded-xl hover:bg-sky-200 p-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-5 h-5 mr-3" />
                <span>Complimentary Wi-Fi internet Facility</span>
              </li>
              <li className="flex items-center hover: rounded-xl hover:bg-sky-200 p-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-5 h-5 mr-3" />
                <span>Complementary Breakfast</span>
              </li>
              <li className="flex items-center hover: rounded-xl hover:bg-sky-200 p-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-5 h-5 mr-3" />
                <span>1 Ltr Mineral Water</span>
              </li>
              <li className="flex items-center hover: rounded-xl hover:bg-sky-200 p-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-5 h-5 mr-3" />
                <span>Valuables to be deposited with the manager for safe deposit</span>
              </li>
              <li className="flex items-center hover: rounded-xl hover:bg-sky-200 p-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-5 h-5 mr-3" />
                <span>Company credit & cheque only on prior information</span>
              </li>
              <li className="flex items-center hover: rounded-xl hover:bg-sky-200 p-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-5 h-5 mr-3" />
                <span>We accept major credit & debit cards</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='p-2 '>
          <p className='text-2xl font-bold font-serif mb-4 text-amber-800'>ROOM FEATURES</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {amenities.map((amenity, index) => (
              <li key={index} className="flex items-center hover: rounded-xl hover:bg-sky-200 p-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-4 h-4 mr-3 flex-shrink-0" />
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Rooms
