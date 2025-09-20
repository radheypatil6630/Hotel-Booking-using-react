import React from 'react'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/twitter'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/youtube'
import { Link } from 'react-router-dom'

const Footer = () => {
//     return (
//         <div className=' bg-[#093d41]  p-2'>
//             <div className='flex justify-around items-start p-8 text-white  gap-8 flex-wrap'>
//                 <div className='flex flex-col gap-2 w-1/2 '>
//                   <p className="text-4xl font-bold font-serif 
//    hover:text-yellow-400 transition">
//   HILTON
// </p>



//                     <p className='text-md hover:text-blue-400'>Experience the epitome of luxury and comfort at Hilton Hotels, where exceptional service meets elegant accommodations for an unforgettable stay.</p>

//                     <span className='flex gap-4 mt-4 p-2'> 
                        
//                         <SocialIcon url="https://www.facebook.com" className=' hover:scale-110 transition-transform duration-300 ease-in-out' />
//                         <SocialIcon url="https://www.twitter.com" className='hover:scale-110 transition-transform duration-300 ease-in-out' />
//                         <SocialIcon url="https://www.instagram.com" className='hover:scale-110 transition-transform duration-300 ease-in-out ' />
//                         <SocialIcon url="https://www.linkedin.com" className='hover:scale-110 transition-transform duration-300 ease-in-out ' />
//                         <SocialIcon url="https://www.youtube.com" className='hover:scale-110 transition-transform duration-300 ease-in-out ' />
//                     </span>
//                 </div>

//                 <div className='flex flex-col gap-2 cursor-pointer '>
//                     <p className='text-xl font-bold font-serif hover:text-yellow-400'>Quick Links</p>
//                     <Link to='/rooms' className='hover:text-blue-400'>Home </Link>
//                     <Link to='/rooms' className='hover:text-blue-400'>Rooms</Link>
//                     <Link to='/restaurant' className='hover:text-blue-400'>Restaurant</Link>
//                     <Link to='/about' className='hover:text-blue-400'>About Us</Link>
//                 </div>
                
//                 <div className='flex flex-col gap-2'>
//                     <p className='text-xl font-bold font-serif hover:text-yellow-400'>Contact Us</p>
//                     <p className='text-md hover:text-blue-400'>123 Luxury St, Beverly Hills, CA 90210</p>
//                     <p className='text-md hover:text-blue-400'>Phone: (123) 456-7890</p>
//                     <p className='text-md hover:text-blue-400'>Email: info@hilton.com</p>

//                 </div>
//             </div>
            
//             <div className='border-t border-white pt-2 text-center'>
//                 <p className='text-md text-white '>© 2025 Hilton Hotels. All rights reserved.</p>
//             </div>
//         </div>
//     )

return (
  <div className="bg-[#093d41] p-4 sm:p-6">
    {/* Top Section */}
    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 text-white">
      
      {/* Brand & Social */}
      <div className="flex-1 flex flex-col gap-4">
        <p className="text-3xl sm:text-4xl font-bold font-serif hover:text-yellow-400 transition">
          HILTON
        </p>
        <p className="text-sm sm:text-base hover:text-blue-400">
          Experience the epitome of luxury and comfort at Hilton Hotels, where exceptional
          service meets elegant accommodations for an unforgettable stay.
        </p>

        <div className="flex gap-3 mt-2 flex-wrap">
          <SocialIcon url="https://www.facebook.com" className="hover:scale-110 transition-transform duration-300 ease-in-out" />
          <SocialIcon url="https://www.twitter.com" className="hover:scale-110 transition-transform duration-300 ease-in-out" />
          <SocialIcon url="https://www.instagram.com" className="hover:scale-110 transition-transform duration-300 ease-in-out" />
          <SocialIcon url="https://www.linkedin.com" className="hover:scale-110 transition-transform duration-300 ease-in-out" />
          <SocialIcon url="https://www.youtube.com" className="hover:scale-110 transition-transform duration-300 ease-in-out" />
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex-1 flex flex-col gap-2 cursor-pointer">
        <p className="text-lg sm:text-xl font-bold font-serif hover:text-yellow-400">
          Quick Links
        </p>
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/rooms" className="hover:text-blue-400">Rooms</Link>
        <Link to="/restaurant" className="hover:text-blue-400">Restaurant</Link>
        <Link to="/about" className="hover:text-blue-400">About Us</Link>
      </div>

      {/* Contact */}
      <div className="flex-1 flex flex-col gap-2">
        <p className="text-lg sm:text-xl font-bold font-serif hover:text-yellow-400">
          Contact Us
        </p>
        <p className="text-sm sm:text-base hover:text-blue-400">
          123 Luxury St, Beverly Hills, CA 90210
        </p>
        <p className="text-sm sm:text-base hover:text-blue-400">
          Phone: (123) 456-7890
        </p>
        <p className="text-sm sm:text-base hover:text-blue-400">
          Email: info@hilton.com
        </p>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="border-t border-white mt-6 pt-4 text-center">
      <p className="text-sm sm:text-md text-white">
        © 2025 Hilton Hotels. All rights reserved.
      </p>
    </div>
  </div>
);

}

export default Footer
