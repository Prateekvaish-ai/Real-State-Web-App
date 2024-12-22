'use client';
import { IconCheck, IconLoader3 } from '@tabler/icons-react';
import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import toast from 'react-hot-toast';

const Addproperty = () => {
  // initializing formik
  const propertyForm = useFormik({
    initialValues: {
      name: '',
      address: '',
      category: '',
      contact: '',
      image: '',
      price: '',
      owner: ''
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {

      // setTimeout(() => {
      // console.log(values);
      // resetForm();
      //}, 2000);

      //fetch
      axios.post('http://localhost:5000/property/add', values)
        .then((result) => {
          toast.success('Property registered successfully');
          resetForm();
          router.push('/login');
        }).catch((err) => {
          console.log(err);
          toast.error('Property registration failed');
          setSubmitting(false);

        });
      // send values to backend
    },
    //
  });

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', 'mypreset');
    formData.append('cloud_name', 'dtyeyssrb');

    const res = await axios.post('https://api.cloudinary.com/v1_1/dtyeyssrb/image/upload', formData);

    if (res.status === 200) {
      console.log(res.data);
      toast.success('Image uploaded successfully');
      propertyForm.setFieldValue('image', res.data.url);
    }
  }


  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Add Property
            </h2>
          </div>
          {/* text - end */}
          {/* form - start */}
          <form onSubmit={propertyForm.handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="Name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                onChange={propertyForm.handleChange}
                value={propertyForm.values.name}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div>
              <label
                htmlFor="Price"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                onChange={propertyForm.handleChange}
                value={propertyForm.values.price}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="category"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                onChange={propertyForm.handleChange}
                value={propertyForm.values.category}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                onChange={propertyForm.handleChange}
                value={propertyForm.values.address}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div>
              <label
                htmlFor="owner"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Owner
              </label>
              <input
                type="text"
                name="owner"
                onChange={propertyForm.handleChange}
                value={propertyForm.values.owner}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="contact"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Contact
              </label>
              <input
                type="text"
                name="contact"
                onChange={propertyForm.handleChange}
                value={propertyForm.values.contact}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Image
              </label>
              <input
                type="file"
                onChange={uploadImage}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>


            <div className="flex items-center justify-between sm:col-span-2">

              <span className="text-sm text-gray-500"></span>
            </div>
            <p className="text-xs text-gray-400">
              {" "}
              <a
                href="#"
                className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >

              </a>
              .
            </p>
            <button
              type="submit"
              disabled={propertyForm.isSubmitting}
              className="flex sm:col-span-2 w-1/2 mx-auto items-center gap-3 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              {propertyForm.isSubmitting ? (<IconLoader3 className='animate-spin' />) : (<IconCheck />)}
              Submit
            </button>
          </form>
          {/* form - end */}
        </div>
      </div>

    </div>
  )
}

export default Addproperty;