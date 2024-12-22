'use client';
import axios from 'axios';
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


        <img src={propertyDetails.image} className="h-80 w-full object-cover object-center rounded-lg" alt="" />

        <div className='mt-10'>
          <h1 className='text-2xl font-bold'>{propertyDetails.name}</h1>
          <p>{propertyDetails.category}</p>
        </div>
      </div>

    </div>
  )
}

export default ViewProperty;