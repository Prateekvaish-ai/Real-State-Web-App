'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

const BrowseProperties = () => {

  const [propertylist, setpropertyList] = useState([]);

  const token = localStorage.getItem('token');

  const router = useRouter();

  const fetchProperties = () => {
    axios.get('http://localhost:5000/property/getall', {

    })
      .then((result) => {
        console.log(result.data);
        setpropertyList(result.data);  // state ko update kar rha h jaise hi data aayega list bna dega
      }).catch((err) => {
        console.log(err);

        if (err.response.status === 403 || err.response.status === 401) {
          toast.error('Please Login to Continue');
          router.push('/login');
        }
      });
  }

  useEffect(() => {
    fetchProperties();
  }, []);



  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
             Browse Property
            </h2>
            
          </div>
          {/* text - end */}
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {
              propertylist.map(property => (

                <Link
                  key={property._id}
                  href={'/view-property/' + property._id}
                  className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                >
                  <img
                    src={property.image}
                    loading=""
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
                  <div className="relative mt-auto p-4">
                    <span className="block text-sm text-gray-200">{new Date(property.createdAt).toDateString()}</span>
                    <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                      {property.name}
                    </h2>
                    <span className="font-semibold text-indigo-300">Read more</span>
                  </div>
                </Link>
              ))
            }
            {/* article - end */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default BrowseProperties;