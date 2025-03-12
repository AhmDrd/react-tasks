import React,{useState,useEffect}from 'react';
import './App.css'
import chkout from './assets/chkout.jpg'
import ckt1 from './assets/ckt1.webp'
import ckt2 from './assets/ckt2.jpg'
import heroimage from './assets/heroimage.webp'
import man1 from './assets/man1.jpg'
import man2 from './assets/man2.jpeg'
import woman1 from './assets/woman1.jpg'
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { PiCubeThin } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaChevronLeft, FaChevronRight, FaHeart, FaSearchPlus } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* First Navbar */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white text-black shadow-md" : "bg-black text-white"
        }`}>
        <div className="flex flex-wrap px-6 md:px-12 py-4 items-center justify-between">
          {/* Logo and Brand Name */}
          <a className="flex title-font font-medium items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke={scrolled ? 'oklch(0.705 0.213 47.604)' : '#fff'}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h1 className={`sm:text-2xl text-lg ml-2 md:ml-4 font-medium ${scrolled ? 'text-orange-500' : 'text-white'}`}>
              Alibaba.com
            </h1>
          </a>

          <div
              className={`hidden md:flex fixed top-3 left-2/5 transform -translate-x-1/2 w-[500px] bg-white border border-gray-300 rounded-full shadow-md items-center px-2 py-1 transition-all ${
                scrolled ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {/* Dropdown Button */}
              <button className="flex items-center px-3 text-gray-700 border-r border-gray-300">
                Products ▼
              </button>

              {/* Search Input */}
              <input
                type="text"
                placeholder="March Expo"
                className="flex-1 px-3 py-2 focus:outline-none text-gray-700"
              />

              {/* Camera Icon */}
              <button className="p-2">
                <AiOutlineCamera className="text-gray-700 text-lg" />
              </button>

              {/* Search Button */}
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center">
                <AiOutlineSearch className="mr-1" /> Search
              </button>
            </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:ml-auto items-center justify-end text-white text-sm md:text-base w-md gap-3">
            <a className={`mr-4 md:mr-6 hover:opacity-75 flex flex-col text-xs ${scrolled ? 'text-black' : 'text-white'}`}>
              <h6>Delivery to:</h6>
              <h5 className="flex items-center gap-1">
                <LiaFlagUsaSolid />
                US
              </h5>
            </a>

            <a className={`mr-4 md:mr-6 hover:opacity-75 flex items-center ${scrolled ? 'text-black' : 'text-white'}`}>
              🌍 English-USD
            </a>

            <a className={`mr-4 md:mr-6 hover:opacity-75 flex items-center ${scrolled ? 'text-black' : 'text-white'}`}>
              🛒
            </a>

            <a className={`mr-4 md:mr-6 hover:opacity-75 flex items-center ${scrolled ? 'text-black' : 'text-white'}`}>
              👤 Sign In
            </a>
          </nav>

          {/* Sign Up Button */}
          <button className={`"hidden md:inline-flex items-center lg:mr-20 bg-orange-500 border-0 py-2 px-4 md:px-7 rounded-full text-sm hover:bg-gray-600" ${scrolled ? 'text-white' : 'text-white'}`}>
            Sign Up
          </button>

          {/* Mobile Burger Menu */}
          <button
            className={`md:hidden text-2xl ${scrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white shadow-md">
            <nav className="flex flex-col items-center text-sm p-4">
              <a className="py-2 hover:text-gray-300">Delivery to: US</a>
              <a className="py-2 hover:text-gray-300">🌍 English-USD</a>
              <a className="py-2 hover:text-gray-300">🛒 Checkout</a>
              <a className="py-2 hover:text-gray-300">👤 Sign In</a>
              <button className="w-full bg-orange-500 py-2 mt-2 rounded-full hover:bg-gray-600">
                Sign Up
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Second Navbar (Hidden on Small Screens) */}
      {!scrolled && (
        <div className="hidden md:block fixed top-16 left-0 w-full z-40 backdrop-blur-sm bg-black/80 transition-opacity duration-300">
          <div className="flex flex-wrap px-6 md:px-12 py-2 items-center justify-between">
            {/* Left Side Links */}
            <nav className="flex items-center text-white text-sm md:text-base space-x-4 md:space-x-6">
              <a className="hover:text-gray-300 flex items-center">
                <AiOutlineMenu /> All Categories
              </a>
              <a className="hover:text-gray-300">Feature Selections</a>
              <a className="hover:text-gray-300">Trade Assurance</a>
            </nav>

            {/* Right Side Links */}
            <nav className="flex items-center text-white text-sm md:text-base space-x-4 md:space-x-6">
              <a className="hover:text-gray-300">Buyer Central</a>
              <a className="hover:text-gray-300">Help Center</a>
              <a className="hover:text-gray-300">Get the App</a>
              <a className="hover:text-gray-300 mr-18">Become a Supplier</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

function App() {

  const testimonials = [
    {
      id: 1,
      name: "Hannah bur",
      name2:"Co Founder",
      description:
        '"Pour-over craft beer pug drinking vinegar live-edge gastropub, Echo park sriracha pinterest actually, palo santo tumeric. Tofu before they sold out adaptogen, gluten-free chia."',
      image: woman1,
    },
    {
      id: 2,
      name: "John Doe",
      name2:"Co Founder",
      description:
        '"Sustainable fashion axe meditation, hexagon pitchfork ethical.  cloud bread disrupt. Echo park pinterest actually, palo santo tumeric. Tofu before they sold out adaptogen, gluten-free chia."',
      image: man1,
    },
    {
      id: 3,
      name: "Jane Smith",
      name2:"Co Founder",
      description:
        '"Echo park sriracha pinterest actually, palo santo tumeric. gluten-free chia. Echo park sriracha pinterest actually, palo santo tumeric. Tofu before they sold out adaptogen, gluten-free chia."',
      image: man2,
    },
  ];
  const images = [
    chkout,
    ckt1,
    ckt2,
    chkout,
    ckt1,
    ckt2,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      {/* // Hero Section */}
      <section className="relative body-font">
      <Navbar />
      <div className="container mx-auto flex px-5 py-70 md:flex-row flex-col items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)), url(${heroimage})`,
          }}
        >
          <div className="bg-black opacity-30 w-full h-full"></div>
        </div>
        <div className="relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-white z-10">
          <h3 className="title-font sm:text-xl text-xl mb-4 font-medium gap-2 flex items-center">
          <IoMdArrowDroprightCircle /> Learn about Alibaba.com
          </h3>
          <h1 className="mb-8 leading-relaxed text-5xl font-semibold">
            The Leading B2B Ecommerce Platform for<br /> Global Trade
          </h1>
        </div>
      </div>
    </section>

      {/* // Card Section */}
      <section class="text-gray-600 body-font">
        <div class="bg-[#4A1E12] px-5 py-24 mx-auto min-h-[50vh]">
          <div class="flex flex-wrap -m-4 min-h-[50vh]">
          
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-[#371006] p-12 rounded-lg h-full transition-all duration-300 hover:bg-[#4A1E12] group hover:shadow-lg flex flex-col">
                <div class="icon-container self-start bg-gray-100/10 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#D4A56A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div class="mt-12  text-start">
                  <h2 class="text-2xl text-white font-extrabold title-font mb-3">Millions of Business Offering</h2>
                  <p class="leading-relaxed text-base text-[#E0D3C5]">Connect with millions of verified suppliers worldwide. Connect with millions of verified suppliers worldwide.</p>
                </div>
              </div>
            </div>

            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-[#371006] p-12 rounded-lg h-full transition-all duration-300 hover:bg-[#4A1E12] group hover:shadow-lg flex flex-col">
                <div class="icon-container self-start bg-gray-100/10 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#D4A56A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div class="mt-12  text-start">
                  <h2 class="text-2xl text-white font-extrabold title-font mb-3">Market Expansion</h2>
                  <p class="leading-relaxed text-base text-[#E0D3C5]">Explore new markets and business opportunities globally. Connect with millions of verified suppliers worldwide.</p>
                </div>
              </div>
            </div>

            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-[#371006] p-12 rounded-lg h-full transition-all duration-300 hover:bg-[#4A1E12] group hover:shadow-lg flex flex-col">
                <div class="icon-container self-start bg-gray-100/10 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#D4A56A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
                <div class="mt-12  text-start">
                  <h2 class="text-2xl text-white font-extrabold title-font mb-3">Product Discovery</h2>
                  <p class="leading-relaxed text-base text-[#E0D3C5]">Find exactly what you need with our powerful search tools. Connect with millions of verified suppliers worldwide.</p>
                </div>
              </div>
            </div>

            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-[#371006] p-12 rounded-lg h-full transition-all duration-300 hover:bg-[#4A1E12] group hover:shadow-lg flex flex-col">
                <div class="icon-container self-start bg-gray-100/10 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#D4A56A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <div class="mt-12  text-start">
                  <h2 class="text-2xl text-white font-extrabold title-font mb-3">Business Insights</h2>
                  <p class="leading-relaxed text-base text-[#E0D3C5]">Make data-driven decisions with comprehensive analytics. Connect with millions of verified suppliers worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* // testemonlias section */}
      <section className="text-gray-600 body-font relative">
        <div className="container mx-auto px-5 py-24 flex justify-center">
          {/* Testimonial Container */}
          <div className="w-full lg:w-5/6 xl:w-3/4 flex flex-row items-center bg-gray-50 rounded-lg shadow-lg py-12 px-8 relative overflow-hidden">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="flex items-center justify-center pr-3 lg:pr-4 hover:bg-gray-200 transition-colors rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-8 lg:w-8 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Testimonial Slide */}
            <div
              key={testimonials[currentSlide].id}
              className="w-full min-h-55 transition-opacity duration-500 ease-in-out"
            >
              <div className="flex flex-col lg:flex-row items-center justify-around">
                {/* Image */}
                <div className="w-42 h-42 lg:w-48 lg:h-48 flex justify-center">
                  <img
                    className="object-cover w-42 h-42 lg:w-48 lg:h-48 object-center rounded-full border-4 border-[#D4A56A]"
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                  />
                </div>

                {/* Name (Centered Between Image and Description) */}
                <div className="lg:w-1/4 flex flex-col justify-center lg:justify-start lg:pl-8">
                  <h1 className="title-font font-bold text-xl lg:text-2xl text-gray-900 text-left lg:text-left">
                    {testimonials[currentSlide].name}
                  </h1>
                  <h1 className="title-font font-bold text-base lg:text-sm text-gray-400 text-left lg:text-left">
                    {testimonials[currentSlide].name2}
                  </h1>
                </div>

                {/* Description (Right-Aligned) */}
                <div className="lg:w-2/4 w-full mt-6 lg:mt-0 lg:pl-8">
                  <p className="leading-relaxed text-black text-lg font-semibold lg:text-xl text-left lg:text-left">
                    {testimonials[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="flex items-center justify-center pl-3 lg:pl-4 hover:bg-gray-200 transition-colors rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-8 lg:w-8 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* // checkout section */}
      <section class="text-gray-600 body-font overflow-hidden bg-white ">
      
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap border-0 border-black shadow-xl">
            <div className="hidden md:hidden lg:flex flex-col space-y-3 absolute left-18">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 
                      ${index === currentIndex ? "border-orange-500" : "border-transparent"}`}
                    onClick={() => handleThumbnailClick(index)}
                  />
                ))}
        </div>
          <div className="relative w-full lg:w-1/2 flex items-center justify-center ">
              {/* Image */}
              <img
                alt="ecommerce"
                className="w-full h-64 lg:h-auto lg:w-120 object-cover object-center rounded"
                src={images[currentIndex]}
              />

              {/* Left and Right Backgrounds */}
              <div className="absolute top-0 left-0 h-full w-18 bg-gray-200"></div>
              <div className="absolute top-0 right-0 h-full w-18 bg-gray-200"></div>

              {/* Left Arrow */}
              <button
                className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white text-base text-black p-4 rounded-full shadow-lg hover:bg-gray-300"
                onClick={showPrevious}
              >
                <FaChevronLeft size={20} />
              </button>

              {/* Right Arrow */}
              <button
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white text-base text-black p-4 rounded-full shadow-lg hover:bg-gray-300"
                onClick={showNext}
              >
                <FaChevronRight size={20} />
              </button>

              {/* Icons on the top right (Heart & Zoom) */}
              <div className="hidden md:hidden lg:flex absolute top-4 right-4 flex-col space-y-3">
                <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-300">
                  <FaHeart className="text-red-500" size={20} />
                </button>
                <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-300">
                  <FaSearchPlus className="text-gray-700" size={20} />
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:px-6 p-2 lg:mt-0">
              {/* Free Shipping Banner */}
              <div className="flex flex-col items-start">

              <h2 className="flex flex-wrap items-start text-sm font-semibold title-font text-black bg-orange-200 tracking-widest px-2 py-1 mb-4">
                {/* Truck Icon */}
                <TbTruckDelivery className="inline-block text-orange-700 m-1 text-3xl" />
                
                {/* FREE shipping */}
                <p>
                  <span className="text-orange-700 font-bold">FREE shipping</span> capped at $20.00 on your first<br />order
                </p>
              </h2>

              <h4 className="text-xs title-font text-white bg-orange-500 tracking-widest px-2 py-1 inline-block mb-4">
                180-day lowest price
              </h4>
              </div>

              {/* Price Breakdown */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="mb-4">
                    <div className="text-gray-600 text-sm">1 - 499 pieces</div>
                    <div className="text-gray-900 font-bold text-2xl">$3.68</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-gray-600 text-sm">2000 - 4999 pieces</div>
                    <div className="text-gray-900 font-bold text-2xl">$2.98</div>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <div className="text-gray-600 text-sm">500 - 1999 pieces</div>
                    <div className="text-gray-900 font-bold text-2xl">$3.28</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-gray-600 text-sm">≥= 5000 pieces</div>
                    <div className="text-gray-900 font-bold text-2xl">$2.48</div>
                  </div>
                </div>
              </div>


              {/* Sample Price and Button */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-100">
                  <div className="flex items-center text-gray-600">
                    <PiCubeThin className="text-xl mr-2" />
                    <span className="text-black font-semibold">Sample price:</span>
                    <span className="ml-1">$6.00</span>
                  </div>
                  <button className="text-black bg-white border px-4 py-1.5 text-sm font-medium rounded-full hover:bg-gray-200">
                    Get sample
                  </button>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              <div className="mb-6 pt-2 border-separate">
                <h3 className="text-gray-900 font-medium mb-2">Variations</h3>
                <p className="text-gray-600 mb-4">Total options: <strong>2 color</strong>; <strong>1 Voltage (V)</strong>; <strong>4 pl...</strong></p>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-4">Color:</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none bg-yellow-400"></button>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none bg-gray-700 ml-2"></button>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-gray-900 font-medium mb-2"><strong>Voltage</strong> V-1: 110V-220V </h3>
                <p className="text-gray-600 mb-4 px-2 bg-gray-100 border-2 rounded-lg border-black w-fit">110V-220V</p>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-4">Color:</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none bg-yellow-400"></button>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none bg-gray-700 ml-2"></button>
                </div>
              </div>

              {/* Price and Buttons */}
              <div className="flex items-center">
                <span className="title-font font-bold text-2xl text-gray-900">$3.68</span>
                <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-gray-300">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
