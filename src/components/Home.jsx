
import Hero from './Hero'
import image1 from '../assets/lobby3.png'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faContactBook, faLocation } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const cards = [
    { title: "Moder Comfort", image: image1 },
    { title: "Moder Comfort", image: image1 },
    { title: "Moder Comfort", image: image1 },
    { title: "Moder Comfort", image: image1 },
    { title: "Moder Comfort", image: image1 },
    { title: "Moder Comfort", image: image1 },
    { title: "Moder Comfort", image: image1 },
    { title: "Moder Comfort", image: image1 },
    { title: "Moder Comfort", image: image1 },
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

      <div className='flex flex-col p-12 gap-4  overflow-hidden'>
        <span className='text-4xl font-bold text-center font-serif'>
          <p>Indulge In Five-Star</p>
          <p>Facility & Sophistication</p>
        </span>

        <span className='text-md  text-center '>

          <p>Our lavishly appointed rooms & suites feature world-class amenities including</p>
          <p>plush bedding, panoramic views, and state-of-the-art technology.</p>
        </span>

        <div className='relative flex  '>
       

        <div className='flex overflow-hidden w-full' >
            <div
              className='flex transition-transform duration-500'
               style={{ transform: `translateX(-${current * 316}px)` }}
            >
              {cards.map((card, index) => (
                  <div key={index} className='w-[300px] flex-shrink-0 flex  flex-col item-center bg-[#f8f4ec] text-black font-semibold p-8  m-4 gap-8 hover:bg-[#0d4a4e] hover:text-white transition duration-300  '
                 >
                    
                    

                  <p className='text-lg'>{card.title}</p>
                  <img className='rounded-xl h-[150px] w-full' src={card.image} alt={card.title} />
                  <button className="text-black text-sm rounded-xl p-1 py-2 w-[120px] bg-white hover:bg-yellow-500">Explore More</button>
                </div>
              ))}
            </div>
          </div>


        <button
          onClick={prevSlide}
          className="absolute  left-0 top-1/2 translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-yellow-300 hover:text-black"
        >
          &#60;
        </button>


        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-yellow-300 hover:text-black"
        >
          &#62;
        </button>
      </div>

    </div>

     <div className=' flex  h-[700px] '>
      <div className='relative w-1/2 flex flex-col bg-[#0d4a4e] items-center justify-center gap-4 text-white p-8 text-center'>
      <p className='text-4xl font-bold font-serif'>Your Private Heaven Hilton Luxury Gym</p>
      <p>Unwind and rejuvenate in our state-of-the-art fitness center, equipped with the latest technology and personalized training programs.</p>

        <div className='flex justify-evenly'>
          <div className='bg-yellow-500 text-black font-semibold text-md px-2 py-1 rounded-lg ml-4 hover:bg-yellow-400 transition duration-300 flex items-center gap-2  cursor-pointer justify-center'>
            <FontAwesomeIcon icon={faCalendar} className="w-6 h-6" />
            Join Gym Club
          </div>
          <div className=' text-white font-semibold text-md px-2 py-1 rounded-lg ml-4 hover:underline  transition duration-300 flex items-center gap-2  cursor-pointer justify-center'>
            <FontAwesomeIcon icon={faLocation} className="w-6 h-8 rounded-full bg-white text-red-500 p-1" />
            Watch Hilton View
          </div>
        </div>
        <div className='absolute left-4 bottom-4 flex gap-2 text-sm'>
          <img src={image1} alt="Gym" className='w-12 h-12 object-cover rounded-sm '/>
        <span className='flex flex-col'>
            <p>Get Collects to Our Membership</p>
            <p>Exclusive benefits and offers await you.</p>
        </span>
        </div>
        </div>
      <div className='w-1/2'>
      <img className='w-full h-full' src={image1}/>
      </div>
     </div>

    <div className=' flex p-12 gap-2 '>
      
      <div className='flex flex-col  gap-4 justify-between'>
        <p className='font-bold text-4xl font-serif text-black'>Hilton Hotel The Epitome</p>
      <p className='font-bold text-4xl font-serif text-black'>Of Refined Comfort of Living</p>

      <div className='flex gap-4 p-4'>
        <img className='w-2/3 h-[300px] p-2 shadow-lg shadow-black' src={image1}/>
        <p className='text-md text-black p-4'>Ensuring a seamless blend of comfort & luxury. Each space is thoughtfully designed to provide the ultimate in relaxation & refinement.</p>
      </div>

      </div>
      <div className='relative w-1/4 rounded-xl '>
          <img
    className="w-full h-[300px] object-cover rounded-xl pl-12   shadow-[2px_2px_0px_rgba(0,0,0,0.2)] shadow-black"
    src={image1}
    alt="Main"
  />

 
  <img
    className="w-[200px] h-[250px] object-cover rounded-lg absolute bottom-20 left-0 border-2 border-white shadow-lg shadow-black"
    src={image1}
    alt="Overlay"
  />
      </div>
    </div>
    </div >
  )
}

export default Home
