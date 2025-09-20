
import Hero from './Hero'
import family_restaurant from '../assets/lobby3.png'
import room_img from '../assets/room1.jpg'
import lawn_img from '../assets/lawn1.jpg'
import restaurant_img from '../assets/restaurant1.jpg'
import hall_img from '../assets/banquet_hall1.jpg'
import bar_img from '../assets/bar1.jpg'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faContactBook, faLocation } from "@fortawesome/free-solid-svg-icons";
import Footer from './Footer'

const Home = () => {
  const [current, setCurrent] = useState(0);
  const cards = [
    { title: "Deluxe AC Room", image: room_img },
    { title: "Vrundavan Multipurpose Lawn", image: lawn_img },
    { title: "Mithila Family Restaurant", image: restaurant_img },
    { title: "Luvkush Banquet Hall", image: hall_img },
    { title: "Texas Restaurant & Bar", image: bar_img },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cards.length]);


  function nextSlide() {
    setCurrent(prev => (prev + 1) % cards.length);
  }


  function prevSlide() {
    setCurrent(prev => (prev - 1 + cards.length) % cards.length);
  }


  return (
    <div>
      <Hero />

      {/* Section 1 */}
      <div className="flex flex-col p-4 sm:p-6 md:p-12 gap-4 overflow-hidden">
        <span className="text-xl sm:text-2xl md:text-4xl font-bold text-center font-serif">
          <p>Indulge In Five-Star</p>
          <p>Facility & Sophistication</p>
        </span>

        <span className="text-xs sm:text-sm md:text-md text-center">
          <p>
            Our lavishly appointed rooms & suites feature world-class amenities
            including
          </p>
          <p>
            plush bedding, panoramic views, and state-of-the-art technology.
          </p>
        </span>

        {/* Carousel */}
        <div className="relative flex">
          <div className="flex overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 316}px)` }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-[220px] sm:w-[260px] md:w-[300px] flex-shrink-0 flex flex-col item-center rounded-lg bg-[#f8f4ec] text-black font-semibold p-3 sm:p-4 md:p-8 m-2 md:m-4 gap-4 md:gap-8 hover:bg-[#0d4a4e] hover:text-white transition duration-300"
                >
                  <p className="text-sm sm:text-base md:text-lg">{card.title}</p>
                  <img
                    className="rounded-xl h-[100px] sm:h-[130px] md:h-[150px] w-full object-cover"
                    src={card.image}
                    alt={card.title}
                  />
                  <button className="text-black text-xs sm:text-sm rounded-xl px-2 py-2 w-[90px] sm:w-[100px] md:w-[120px] bg-white hover:bg-yellow-500">
                    Explore More
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 translate-y-1/2 bg-black/50 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full hover:bg-yellow-300 hover:text-black"
          >
            &#60;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full hover:bg-yellow-300 hover:text-black"
          >
            &#62;
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row h-auto md:h-[700px]">
      

        <div className="relative w-full md:w-1/2  flex flex-col bg-[#0d4a4e] items-center justify-center gap-3 sm:gap-4 text-white p-4 sm:p-6 md:p-8 text-center">
          <p className="text-xl sm:text-2xl md:text-4xl font-bold font-serif">
            Your Private Heaven Hilton Luxury Gym
          </p>
          <p className="text-xs sm:text-sm md:text-base">
            Unwind and rejuvenate in our state-of-the-art fitness center, equipped
            with the latest technology and personalized training programs.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-evenly gap-2">
            <div className="bg-yellow-500 text-black font-semibold text-sm md:text-md px-2 py-1 rounded-lg hover:bg-yellow-400 transition duration-300 flex items-center gap-2 cursor-pointer justify-center">
              <FontAwesomeIcon icon={faCalendar} className="w-5 h-5 md:w-6 md:h-6" />
              Join Gym Club
            </div>
            <div className="text-white font-semibold text-sm md:text-md px-2 py-1 rounded-lg hover:underline transition duration-300 flex items-center gap-2 cursor-pointer justify-center">
              <FontAwesomeIcon
                icon={faLocation}
                className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white text-red-500 p-1"
              />
              Watch Hilton View
            </div>
          </div>

          {/* Bottom-left info box */}
          <div className="flex gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm mt-4 md:mt-0 md:absolute md:left-4 md:bottom-4">
            <img
              src={room_img}
              alt="Gym"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover rounded-sm"
            />
            <span className="flex flex-col">
              <p>Get Collects to Our Membership</p>
              <p>Exclusive benefits and offers await you.</p>
            </span>
          </div>
        </div>


        <div className="w-full md:w-1/2">
          <img className="w-full h-full object-cover" src={room_img} />
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col lg:flex-row p-4 sm:p-6 md:p-12 gap-4 lg:gap-2">
        <div className="flex flex-col gap-3 sm:gap-4 justify-between flex-1">
          <p className="font-bold text-xl sm:text-2xl md:text-4xl font-serif text-black">
            Hilton Hotel The Epitome
          </p>
          <p className="font-bold text-xl sm:text-2xl md:text-4xl font-serif text-black">
            Of Refined Comfort of Living
          </p>

          <div className="flex flex-col md:flex-row gap-4 p-2 sm:p-4">
            <img
              className="w-full md:w-2/4 lg:w-2/3 h-[160px] sm:h-[200px] lg:h-[300px] p-1 sm:p-2 shadow-lg shadow-black object-cover"
              src={room_img}
            />
            <p className="text-xs sm:text-sm md:text-md text-black p-2 sm:p-4">
              Ensuring a seamless blend of comfort & luxury. Each space is
              thoughtfully designed to provide the ultimate in relaxation &
              refinement.
            </p>
          </div>
        </div>
      
<div className="relative w-full md:w-1/3 lg:w-1/4 rounded-xl mt-4 md:mt-0">

  <img
    className="w-full h-[180px] sm:h-[220px] md:h-[250px] object-cover rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,0.2)] shadow-black"
    src={room_img}
    alt="Main"
  />


  <img
    className="
      absolute left-2 sm:left-4 md:left-6 lg:left-0 
      bottom-4 sm:bottom-6 md:bottom-10 lg:bottom-20
      
      w-[100px] h-[130px] 
      sm:w-[130px] sm:h-[200px] 
      md:w-[160px] md:h-[250px] 
      lg:w-[200px] lg:h-[300px] 

      object-cover rounded-lg border-2 border-white shadow-lg shadow-black
    "
    src={room_img}
    alt="Overlay"
  />
</div>


      </div>

      <Footer />
    </div>
  );

}

export default Home
