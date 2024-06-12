'use client'
import React from 'react'
import Link from 'next/link';
import { useRouter ,usePathname} from 'next/navigation';
import { CustomDropdown } from './CustomDropdown';

export default function Navbar() {
  const router = useRouter();
  const pathname=usePathname();
    const navigationItems=[
        
        {path:'/dashboard/pricing', label:'Pricing'},
        {path:'/dashboard/settings', label:'Settings'}    ]
  return (
    <div className='w-full h-16 py-1 bg-white flex justify-around justify-items-center'>
        <nav className="flex w-1/4 p-4">
        <ul className="flex space-x-4">
        {navigationItems.map(navItem=>(
            <li key={navItem.label} className="px-1">
            <Link  href={navItem.path} className={`hover:text-gray-400 ${
                  pathname === navItem.path ? 'text-gray-400 font-bold' : ''
                }`}>
            
              {navItem.label}
    
            </Link>
            </li>
        ))}
            
            
            
        </ul>  
        </nav>
        <div className="" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
        <div className="py-1" role="none">
        <CustomDropdown />
        </div>
        </div>
    </div>
  )
}
