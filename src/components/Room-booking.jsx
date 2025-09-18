import React, { useState } from 'react';
import Footer from './Footer';
import { FaCalendarAlt, FaUserFriends, FaBed, FaStar } from 'react-icons/fa';

// --- Helper Data (no changes) ---
const roomData = {
  deluxe: {
    name: 'Deluxe King Room',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6', // This will be the main background image
    rating: 4.8,
    size: '35 sq m',
    beds: '1 King Bed',
  },
  suite: {
    name: 'Executive Suite',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
    rating: 5.0,
    size: '70 sq m',
    beds: '1 King Bed, 1 Sofa Bed',
  },
  standard: {
    name: 'Standard Queen Room',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    rating: 4.5,
    size: '30 sq m',
    beds: '1 Queen Bed',
  },
};

const RoomBooking = () => {
  const [selectedRoom, setSelectedRoom] = useState('deluxe');
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value);
  };

  const currentRoom = roomData[selectedRoom]; // This `currentRoom.image` is still used for the preview card
  
  const totalNights = (bookingDetails.checkIn && bookingDetails.checkOut)
    ? (new Date(bookingDetails.checkOut) - new Date(bookingDetails.checkIn)) / (1000 * 3600 * 24)
    : 1;

  const totalPrice = currentRoom.price * (totalNights > 0 ? totalNights : 1);

  return (
   <div>
    <div 
      className="relative min-h-screen w-full bg-cover bg-center filter  " 
      style={{ backgroundImage: `url(${roomData.deluxe.image})` }} 
    >
      
      <div className="absolute inset-0 bg-black opacity-60"></div> 

      {/* --- Main content wrapper - now needs relative and z-10 --- */}
      <div className="relative z-10 container mx-auto p-4 md:p-8 ">
        {/* --- Header --- */}
        <header className="text-center mb-8 md:mb-12 pt-12">
          {/* Changed text color to white for contrast against dark overlay */}
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Book Your Stay</h1>
          <p className="text-gray-200 mt-2">Experience luxury and comfort like never before.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- Booking Form (Left Column) - Keep light/white for contrast with blurred background --- */}
          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl shadow-lg"> {/* Form background is white */}
            <h2 className="text-2xl font-bold text-[#0d4a4e] mb-6">Reservation Details</h2>
            <form className="space-y-6">
              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="checkIn" className="block text-sm font-medium text-gray-600 mb-1">Check-in Date</label>
                  <FaCalendarAlt className="absolute top-9 left-3 text-gray-400" />
                  <input type="date" name="checkIn" id="checkIn" value={bookingDetails.checkIn} onChange={handleInputChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"/>
                </div>
                <div className="relative">
                  <label htmlFor="checkOut" className="block text-sm font-medium text-gray-600 mb-1">Check-out Date</label>
                  <FaCalendarAlt className="absolute top-9 left-3 text-gray-400" />
                  <input type="date" name="checkOut" id="checkOut" value={bookingDetails.checkOut} onChange={handleInputChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"/>
                </div>
              </div>
              
              {/* Guests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="adults" className="block text-sm font-medium text-gray-600 mb-1">Adults</label>
                  <FaUserFriends className="absolute top-9 left-3 text-gray-400" />
                  <select name="adults" id="adults" value={bookingDetails.adults} onChange={handleInputChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition">
                    {[...Array(8)].map((_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
                  </select>
                </div>
                <div className="relative">
                  <label htmlFor="children" className="block text-sm font-medium text-gray-600 mb-1">Children</label>
                  <FaUserFriends className="absolute top-9 left-3 text-gray-400" />
                  <select name="children" id="children" value={bookingDetails.children} onChange={handleInputChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition">
                     {[...Array(5)].map((_, i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
              </div>

              {/* Room Type */}
              <div className="relative">
                <label htmlFor="roomType" className="block text-sm font-medium text-gray-600 mb-1">Room Type</label>
                <FaBed className="absolute top-9 left-3 text-gray-400" />
                <select name="roomType" id="roomType" value={selectedRoom} onChange={handleRoomChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition">
                  <option value="deluxe">Deluxe King Room</option>
                  <option value="suite">Executive Suite</option>
                  <option value="standard">Standard Queen Room</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300">
                  Check Availability
                </button>
              </div>
            </form>
          </div>
          
          {/* --- Room Preview (Right Column) --- */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-8">
              <img src={currentRoom.image} alt={currentRoom.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0d4a4e]">{currentRoom.name}</h3>
                <div className="flex items-center text-yellow-500 mt-2">
                  <FaStar />
                  <span className="ml-1 text-gray-600 font-semibold">{currentRoom.rating}</span>
                </div>
                <div className="text-gray-600 mt-4 space-y-2">
                   <p><span className='font-semibold'>Size:</span> {currentRoom.size}</p>
                   <p><span className='font-semibold'>Beds:</span> {currentRoom.beds}</p>
                </div>
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Total Price</p>
                    <p className="text-2xl font-bold text-[#0d4a4e]">
                      ₹{totalPrice.toLocaleString('en-IN')}
                    </p>
                  </div>
                   <p className="text-sm text-gray-500 text-right">for {totalNights > 0 ? totalNights : 1} night(s)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
      <Footer />
    </div>
  );
}

export default RoomBooking;