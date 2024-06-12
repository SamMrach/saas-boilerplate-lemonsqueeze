import Navbar from '@/components/shared/Navbar';
import React,{ ReactNode }  from 'react'
 
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
    <div className='w-screen h-screen flex flex-col bg-gray-100'>
    <header>
      <Navbar/>
    </header>
    <main>{children}</main>
    </div>
    </body>
    </html>
  )
}
