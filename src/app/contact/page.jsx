'use client';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  
  return (
    <div >
      <section className="text-gray-400 bg-gray-900 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3504.5148064990226!2d77.3556!3d28.5543!3m2!1i1024!2i768!4f13.1!2m1!1sshop%20no.%205%2C%20East%20sapphire%20society%20sector%2045%20Noida%20%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1734519114342!5m2!1sen!2sin"
  width="100%"
  height="100%"
  title="map"
  className="absolute inset-0"
  frameBorder={0}
  marginHeight={0}
  marginWidth={0}
  scrolling="no"
  // style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16) "}}
/>

      <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            Shop No.5, Eash Sapphire Society Sector 45 
            Noida, Uttar Pradesh 201301
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            EMAIL
          </h2>
          <Link className="text-indigo-400 leading-relaxed" href="gmail">prateekvaish449@gmail.com</Link>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">6394195811</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-white text-lg mb-1 font-medium title-font">
        Feedback
      </h2>
      
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Button
      </button>
      <p className="text-xs text-gray-400 text-opacity-90 mt-3">
        Keep in touch.
      </p>
    </div>
  </div>
</section>



    </div>
  )
}

export default Contact;
