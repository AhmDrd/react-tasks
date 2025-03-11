import React,{useState}from 'react';
import './App.css'
import viteLogo from '/vite.svg'
import chkout from './assets/chkout.jpg'
import heroimage from './assets/heroimage.webp'
import man1 from './assets/man1.jpg'
import man2 from './assets/man2.jpeg'
import woman1 from './assets/woman1.jpg'
import { AiOutlineMenu } from "react-icons/ai";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const Navbar = () => {

  return (
    <>
    {/* First Navbar */}
    <header className="text-gray-600 body-font absolute top-0 left-0 w-full z-20">
      <div className="flex flex-wrap px-12 py-4 flex-col md:flex-row items-center">
        {/* Logo and Brand Name */}
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h1 className="title-font sm:text-2xl text-xl ml-4 font-medium text-white">
            Aliexpress.com
          </h1>
        </a>

        {/* Navigation Links with Icons */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-white">
          <a className="mr-5 hover:text-gray-300 active:text-gray-500 flex flex-col text-xs"><h6>Delivery to:</h6><h5 className="flex flex-wrap justify-center items-center gap-1"><LiaFlagUsaSolid />US</h5></a>

          {/* English-USD with Globe Icon */}
          <a className="mr-5 hover:text-gray-300 active:text-gray-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            English-USD
          </a>

          {/* Checkout with Shopping Cart Icon */}
          <a className="mr-5 hover:text-gray-300 active:text-gray-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>

          {/* Sign In with User Icon */}
          <a className="mr-5 hover:text-gray-300 active:text-gray-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Sign In
          </a>
        </nav>

        {/* Sign Up Button */}
        <button className="inline-flex items-center bg-orange-500 border-0 py-2 px-5 focus:outline-none hover:bg-gray-600 rounded-full text-sm mt-4 md:mt-0 text-white">
          Sign Up
        </button>
      </div>
    </header>

    {/* Second Navbar */}
    <div className="absolute top-16 left-0 w-full z-20  backdrop-blur-sm">
      <div className="flex flex-wrap px-12 py-2 flex-col md:flex-row items-center justify-between">
        {/* Left Side Links */}
        <nav className="flex flex-wrap items-center text-base justify-center text-white">
          <a className="mr-7 hover:text-gray-300 active:text-gray-500 flex flex-wrap justify-center items-center gap-2"><AiOutlineMenu />  All Categories</a>
          <a className="mr-7 hover:text-gray-300 active:text-gray-500">Feature Selections</a>
          <a className="mr-7 hover:text-gray-300 active:text-gray-500">Trade Assurance</a>
        </nav>

        {/* Right Side Links */}
        <nav className="flex flex-wrap items-center text-base justify-center text-white">
          <a className="mr-5 hover:text-gray-300 active:text-gray-500 ">Buyer Central</a>
          <a className="mr-5 hover:text-gray-300 active:text-gray-500">Help Center</a>
          <a className="mr-5 hover:text-gray-300 active:text-gray-500">Get the App</a>
          <a className="mr-5 hover:text-gray-300 active:text-gray-500">Become a Supplier</a>
        </nav>
      </div>
    </div>
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

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={chkout}/>
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex">
                  <span class="mr-3">Color</span>
                  <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div class="flex ml-6 items-center">
                  <span class="mr-3">Size</span>
                  <div class="relative">
                    <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
                <button class="flex ml-auto text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
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
