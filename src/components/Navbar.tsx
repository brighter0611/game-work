"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { RootState } from '@/Store/store';
import { useSelector } from 'react-redux';
import { FaCartArrowDown } from 'react-icons/fa';
import {CiDeliveryTruck} from 'react-icons/ci'
import { MdFavorite } from 'react-icons/md';
import ToggleTheme from './Toggle';


export default function Navbar() {
    const router = useRouter()
    const [Scrolled, setScrolled] = useState(false);
    const user =  useSelector((state : RootState) => state.User.userData)

    useEffect(() => {
        window.onscroll = () => {
            setScrolled(window.pageYOffset < 30 ? false : true)
            return () => window.onscroll = null
        }
    }, [Scrolled])



    const handleLogout = () => {
        Cookies.remove('token');
        localStorage.clear();
        location.reload();
    }

    return (
        <div className={`navbar bg-white  fixed text-white top-2 left-0 z-50`}>
            <div className='container'>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-active text-white btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-gray-50 rounded-box w-52">
                        <li><Link href={'/'}>Homepage</Link></li>
                        <li><Link href={'/'}>Shop</Link></li>
                        <li><Link href={"/"}>My Orders</Link></li>
                        <li><Link href={"/userdashboard"}>Dashboard</Link></li>
                    </ul>
                </div>
            </div>
            <div className='navbar-end'>
                <div className="flex-none">
                    <ToggleTheme />

                    {
                        user ?
                        <div className='flex items-center justify-end  min-h-full'>
                         <button onClick={handleLogout} className='btn text-white mx-2'>logout</button>
                         <button onClick={() => router.push("/")} className='btn btn-circle  mx-2'><FaCartArrowDown className='text-white text-xl' /></button>
                         <button onClick={() => router.push("/")} className='btn btn-circle  mx-2'><MdFavorite className='text-white text-xl' /></button>
                         <button onClick={() => router.push("/")} className='btn btn-circle  mx-2'><CiDeliveryTruck className='text-white text-xl' /></button>
                         
                        </div>
                            :
                            <div className='flex items-center justify-end  min-h-full'>
                                <button onClick={() => router.push('/auth/login')} className='btn text-white mx-2'>Login</button>
                            </div>
                            
                    }


                </div>
            </div>
            </div>
            
        </div>
    )
}
