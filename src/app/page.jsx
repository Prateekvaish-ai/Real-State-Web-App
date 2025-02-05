'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const Home = () => {

  const [propertyList, setPropertyList] = useState([]);

  const fetchPropertyData = async () => {
    const res = await axios.get('http://localhost:5000/property/getall')
    console.log(res.data);
    setPropertyList(res.data);
  }

  useEffect(() => {
    fetchPropertyData();
  }, [])

  return (
    <div>
      <>
  {/* hero - start */}
  <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div className="mx-auto">
      
      <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
        {/* image - start */}
        <img
          src="https://u.realgeeks.media/glasgowrealtygroup/shutterstock_1709893657.jpeg"
          loading=" "
          alt=" "
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* image - end */}
        {/* overlay - start */}
        <div className="absolute inset-0  mix-blend-multiply" />
        {/* overlay - end */}
        {/* text start */}
        <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
          <p className="mb-4 text-center text-lg text-sky-400 font-bold sm:text-xl md:mb-8">
            Let us find your
          </p>
          <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
            Forever Home.
          </h1>
          <p className='mb-2 text-center text-lg text-white '>
            Welcome to our home listings designed for you. Explore to find your perfect match. we're here to make finding your dream home a smooth, enjoyable experience.
          </p>
          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <Link
              href="browse-property"
              className="inline-block rounded-lg bg-sky-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-sky-300 transition duration-100 hover:bg-sky-600 focus-visible:ring active:bg-sky-700 md:text-base"
            >
               Get Start 
            </Link>
            <Link
              href="about"
              className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
        {/* text end */}
      </section>
    </div>
  </div>
  {/* hero - end */}
  {/* gallery - start */}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
       Property Gallery
      </h2>
      <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
        {/* image - start */}
        
        
        {
            propertyList.slice(0, 4).map(property => (
              <div key={property._id}>
                <Link
                  href={'/view-property/' + property._id}
                  className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
                >
                  <img
                    src={property.image}
                    loading=""
                    alt=""
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </Link>
                <div>
                  <p
                    className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                  >
                    {property.category}
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="font-bold text-gray-800 lg:text-lg">{property.name}</span>
                  </div>
                </div>
              </div>
            ))
          }
        
        {/* image - end */}
      </div>
      
    </div>
  </div>
  {/* gallery - end */}
  {/* stats - start */}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-lg px-4 md:px-8">
      {/* text - start */}
      <div className="mb-8 md:mb-12">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Our Team by the numbers
        </h2>
      </div>
      {/* text - end */}
      <div className="grid grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
        {/* stat - start */}
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
            200
          </div>
          <div className="text-sm text-indigo-200 sm:text-base">People</div>
        </div>
        {/* stat - end */}
        {/* stat - start */}
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
            500+
          </div>
          <div className="text-sm text-indigo-200 sm:text-base">People</div>
        </div>
        {/* stat - start */}
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
            1000+
          </div>
          <div className="text-sm text-indigo-200 sm:text-base">Customers</div>
        </div>
        {/* stat - end */}
        {/* stat - start */}
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
            A couple
          </div>
          <div className="text-sm text-indigo-200 sm:text-base">
            Coffee breaks
          </div>
        </div>
        {/* stat - end */}
      </div>
    </div>
  </div>
  {/* stats - end */}
  
 
</>

    </div>
  )
}

export default Home;
