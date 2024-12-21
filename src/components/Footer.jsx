import React from 'react'

const Footer = () => {
  return (
    <div>
     <>
  {/* ========== FOOTER ========== */}
  <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
    {/* Grid */}
    <div className="text-center">
      <div>
        <a
          className="flex-none text-xl font-semibold text-black dark:text-white"
          href="#"
          aria-label="Brand"
        >
          Brand
        </a>
      </div>
      {/* End Col */}
      <div className="mt-3">
        <p className="text-gray-500 dark:text-neutral-500">
          We're part of the{" "}
          <a
            className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
            href="#"
          >
            Networth realty
          </a>{" "}
          family.
        </p>
        <p className="text-gray-500 dark:text-neutral-500">
          © 2024 .
        </p>
      </div>
      
    </div>
    {/* End Grid */}
  </footer>
  {/* ========== END FOOTER ========== */}
</>

    </div>
  )
}

export default Footer;
