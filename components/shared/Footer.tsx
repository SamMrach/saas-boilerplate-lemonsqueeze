import React from 'react'

export default function Footer() {
  return (
    <footer className='fixed bottom-0 w-full py-3 flex flex-col align-items bg-white ' >
      <div className='mx-auto '>
         <div className='mb-4'>
         <p className='text-xl text-center font-bold'>SwipeMate Tinder Auto Swiper</p>
      </div>
      <div className='' >
      <ul className="flex space-x-4 list-none mr-10">
        <li className="mb-3">
          <a href="#" className="text-gray-600 hover:text-gray-800 text-base">About</a>
        </li>
        <li className="mb-3">
          <a href="#" className="text-gray-600 hover:text-gray-800 text-base">Privacy Policy</a>
        </li>
        <li className="mb-3">
          <a href="#" className="text-gray-600 hover:text-gray-800 text-base">Terms of Service</a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-800 text-base">Contact</a>
        </li>
      </ul>
      </div>
      </div>
     
    </footer>
  )
}
