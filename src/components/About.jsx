import { faArrowRight, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import room_img from '../assets/room1.jpg'
import lawn_img from '../assets/lawn1.jpg'
import { faSpa, faSwimmingPool, faUtensils } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';


const imageLarge = room_img;
const imageSmall = lawn_img;


function AboutSection() {
  return (
    <section className="bg-white">
      <div className="relative flex flex-col lg:flex-row items-center max-w-full mx-auto">
        
        {/* === Text Content Section === */}
        <div className="relative z-10 w-full lg:w-4/6 bg-[#0d4a4e] text-white p-8 md:p-16 min-h-[600px] flex flex-col justify-center">
          
          <p className="font-semibold text-yellow-400 tracking-widest uppercase mb-2">
            A World of Comfort
          </p>

          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-4">
            A Sanctuary of Elegance & Comfort.
          </h1>

          <p className="text-gray-300 leading-relaxed max-w-xl mb-8">
            Discover a place where luxury and comfort converge. Our hotel offers unparalleled service, elegant design, and world-class amenities, creating a memorable experience for every guest.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="group flex items-center gap-3 bg-yellow-500 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-400 transition-all duration-300">
              Explore Our Suites
              <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group flex items-center gap-3 text-white font-bold px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300">
              <FontAwesomeIcon icon={faVideo} className="text-yellow-500" />
              Watch Our Story
            </button>
          </div>
        </div>

        {/* === Image Gallery Section === */}
        <div className="w-full lg:w-2/5 h-[400px] lg:h-auto lg:absolute lg:top-0 lg:right-0 lg:bottom-0">
          <div className="relative w-full h-full">
            <img 
              src={imageLarge} 
              alt="Luxury hotel lobby" 
              className="absolute top-0 right-0 w-full lg:w-[85%] h-[80%] lg:h-[85%] object-cover rounded-bl-[100px] lg:rounded-bl-[150px] shadow-2xl" 
            />
            <img 
              src={imageSmall} 
              alt="Comfortable hotel room bed" 
              className="absolute bottom-0 left-0 w-1/2 lg:w-[55%] h-1/2 lg:h-[45%] object-cover rounded-tr-[50px] lg:rounded-tr-[80px] border-8 border-[#0d4a4e] shadow-2xl z-10" 
            />
          </div>
        </div>

      </div>
      <FeaturesSection/>

      <Footer/>
    </section>
  );
}



const features = [
  {
    icon: faSwimmingPool,
    title: 'Infinity Pool',
    description: 'Take a dip in our stunning rooftop infinity pool with panoramic city views.',
  },
  {
    icon: faSpa,
    title: 'Serenity Spa',
    description: 'Indulge in a wide range of treatments designed to relax and rejuvenate your body and mind.',
  },
  {
    icon: faUtensils,
    title: 'Fine Dining',
    description: 'Experience exquisite culinary creations from our award-winning chefs at our in-house restaurant.',
  },
];

function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d4a4e]">Our World-Class Amenities</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          We offer the finest facilities to ensure your stay is both comfortable and unforgettable.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 bg-yellow-400 rounded-full mx-auto">
                <FontAwesomeIcon icon={feature.icon} className="h-8 w-8 text-[#0d4a4e]" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;