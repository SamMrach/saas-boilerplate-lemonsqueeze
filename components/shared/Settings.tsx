'use client';
import React, { useState } from 'react'

export default function Settings() {
    const [name,setName]=useState();
    const [email,setEmail]=useState();

    const handleNameChange=(e)=>{setName(e.target.value)};
    const handleEmailChange=(e)=>{setEmail(e.target.value)};
  return (
    <div className='w-1/2 mx-auto shadow-md rounded-lg bg-white p-6 mt-10'>
        <div className='w-full my-5'>
           <label className='block text-gray-600 mb-2'>Name</label>
           <input
            type="text"
            id="name"
            placeholder='enter your name'
            value={name}
            onChange={handleNameChange}
            className="shadow appearance-none border rounded w-full px-3 py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

        </div>
        <div className='w-full my-4'>
           <label className='block text-gray-600 mb-2'>Email</label>
           <input
            type="text"
            id="email"
            placeholder='enter your email'
            value={email}
            onChange={handleEmailChange}
            className="shadow appearance-none border rounded w-full px-3 py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

        </div>

        <button className="px-6 py-2 bg-[#FC3E8A] text-white rounded mt-2 "> Save </button>
    </div>
  )
}
