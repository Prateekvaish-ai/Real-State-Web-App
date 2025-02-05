'use client';
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ViewProperty = () => {

  const { id } = useParams();
  const [propertyDetails, setPropertyDetails] = useState(null);

  const fetchProductData = async () => {
    const res = await axios.get('http://localhost:5000/property/getbyid/' + id);
    console.log(res.data);
    setPropertyDetails(res.data);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  if (propertyDetails === null) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <div className='max-w-[90%] mx-auto'>
       <div className='mt-10'>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2">
      {/* images - start */}
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        </div>
        <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
          <img
            src={propertyDetails.image}
            loading="lazy"
            alt="Photo by Himanshu Dewangan"
            className="h-full w-full object-cover object-center"
          />
          <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
            sale
          </span>
          <Link
            href=""
            className="absolute right-4 top-4 inline-block rounded-lg border bg-white px-3.5 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-gray-700 md:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </Link>
        </div>
      </div>
      {/* images - end */}
      {/* content - start */}
      <div className="md:py-8">
        {/* name - start */}
        <div className="mb-2 md:mb-3">
          <span className="mb-0.5 inline-block text-gray-500">New Property</span>
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{propertyDetails.name}
          </h2>
        </div>
        {/* name - end */}
        {/* rating - start */}
        <div className="mb-6 flex items-center gap-3 md:mb-10">
          <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 px-2 text-white">
            <span className="text-sm">4.2</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span className="text-sm text-gray-500 transition duration-100">
            56 ratings
          </span>
        </div>
        {/* rating - end */}
        {/* color - start */}
        
        
        {/* color - end */}
        {/* size - start */}
        <div className="mb-8 md:mb-10">
          <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
            Category
          </span>
          <div className="flex flex-wrap gap-3">
           <button
              type="button"
              className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              {propertyDetails.category}
            </button> 
          </div>
        </div>
        {/* size - end */}
        {/* price - start */}
        <div className="mb-4">
        <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
            Price
          </span>
          <div className="flex items-end gap-2">
            <span className="text-xl font-bold text-gray-800 md:text-2xl">
            {propertyDetails.price}
            </span>
          </div>
          <span className="text-sm text-gray-500">incl. VAT plus shipping</span>
        </div>
        {/* price - end */}
        {/* shipping notice - start */}
        <div className="mb-6 flex items-center gap-2 text-gray-500">
          <h2 className='font-bold'>Contact</h2>
           <div><span>{propertyDetails.contact}</span></div>
        </div>
        {/* shipping notice - end */}
        {/* buttons - start */}
        <div className="flex gap-2.5">
          <h2 className='font-bold'>Address</h2>
          <div><span>{propertyDetails.address}</span></div>
        </div>
        <div className="flex gap-2.5">
          <h2 className='font-bold'>Owner</h2>
          <div><span>{propertyDetails.owner}</span></div>
        </div>
        {/* buttons - end */}
      </div>
      {/* content - end */}
    </div>
  </div>
</div>

          
        </div>
      </div>

    </div>
  )
}

export default ViewProperty;