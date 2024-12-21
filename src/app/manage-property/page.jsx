'use client';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageProperty = () => {

    const [propertyList, setPropertyList] = useState([]);
    const token = localStorage.getItem('token');

    const router = useRouter();

    const fetchProperties = () => {
        axios.get('http://localhost:5000/property/getall', {
            // headers: {
            //     'x-auth-token': token
            // }
        })
            .then((result) => {
                console.log(result.data);
                setPropertyList(result.data);
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

    const deleteProperty = async (id) => {
        const res = await axios.delete(`http://localhost:5000/property/delete/${id}`);
        if (res.status === 200) {
            toast.success('Property deleted successfully');
            fetchProperties();
        } else {
            toast.error('Failed to delete Property');
        }
    }

    const updateProperty = async (id) => {
      const res = await axios.put(`http://localhost:5000/property/put/${id}`);
      if (res.status === 200) {
          toast.success('Property update successfully');
          fetchProperties();
      } else {
          toast.error('Failed to update Property');
      }
  }


    return (
        <div className='bg-gray-200 h-screen py-10'>
            <div className='container mx-auto'>
                <h1 className='text-center text-3xl font-bold'>Manage Properties</h1>

                <table className='my-5 w-full'>
                    <thead className='border bg-slate-700 border-slate-700 text-white'>
                        <tr>
                            <th className='p-2'>ID</th>
                            <th className='p-2'>Name</th>
                            <th className='p-2'>Email</th>
                            <th className='p-2'>City</th>
                            <th className='p-2'>Registered at</th>
                            <th className='p-2' colSpan={2}></th>
                        </tr>
                    </thead>
                    <tbody className='bg-gray-400'>
                        {
                            propertyList.map((property) => {
                                return <tr key={property._id} >
                                    <td className='p-2 border border-gray-300'>{property._id}</td>
                                    <td className='p-2 border border-gray-300'>{property.name}</td>
                                    <td className='p-2 border border-gray-300'>{property.email}</td>
                                    <td className='p-2 border border-gray-300'>{property.city}</td>
                                    <td className='p-2 border border-gray-300'>{property.createdAt}</td>
                                    <td>
                                        <button onClick={() => { deleteProperty(property._id) }} className='bg-red-500 text-white px-3 py-1 rounded-full'>
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button  onClick={() => { updateProperty(property._id)}} className='bg-blue-500 text-white px-3 py-1 rounded-full'>
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ManageProperty;