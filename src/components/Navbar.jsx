import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faContactBook } from "@fortawesome/free-solid-svg-icons";
import { faHome, faBed, faUtensils, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import image1 from '../assets/logo.png'


const Navbar = () => {
        return (
                <div className="fixed top-0 left-0 w-full mt-4 z-30 flex items-center justify-evenly p-2 bg-transparent">

                        <p className="font-semibold text-white text-4xl hover:text-amber-300">HILTON</p>

                        <ul className="flex justify-evenly gap-4 items-center w-[40%] 
           ">
                                <li className="group relative flex flex-col items-center">
                                        <Link to="/">
                                                <span className="font-bold text-white hover:text-black p-1 hover:bg-yellow-500 px-2 hover:rounded-xl ">Home</span>
                                        </Link>

                                </li>
                                <li className="group relative flex flex-col items-center">
                                        <Link to="/rooms">
                                                <span className="font-bold text-white hover:text-black p-1 hover:bg-yellow-500 px-2 hover:rounded-xl ">Rooms</span>
                                        </Link>

                                </li>
                                <li className="group relative flex flex-col items-center">
                                        <Link to="/restaurant">
                                                <span className="font-bold text-white hover:text-black p-1 hover:bg-yellow-500 px-2 hover:rounded-xl ">Restaurant</span>
                                        </Link>

                                </li>
                                <li className=" flex flex-col items-center">
                                        <Link to="/about">
                                                <span className="font-bold text-white hover:text-black p-1 hover:bg-yellow-500 px-2 hover:rounded-xl ">About</span>
                                        </Link>

                                </li>
                        </ul>


                        <Link to="/room-booking">

                                <div className='bg-white text-black font-semibold text-md px-2 py-1 rounded-lg ml-4 hover:bg-yellow-500 transition duration-300 flex items-center gap-2'>
                                        <FontAwesomeIcon icon={faContactBook} className="w-6 h-6" />
                                        Contact HILTON
                                </div>
                        </Link>
                </div>
        )
}

export default Navbar
