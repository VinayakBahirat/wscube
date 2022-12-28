
import React, { useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
export default function Header() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] py[12px] flex justify-between mx-auto'>
                <div className='text-3xl font-bold'>
                   <a href='#'>
                        WsCube Tech
                    </a>   
                </div>

                {
                    toggle ? 
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                }
                <ul className='hidden md:flex text-white gap-10 items-center '>
                    <li>
                        <a className='hover:text-black' href='#'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a className='hover:text-black' href='#'>
                            Company
                        </a>
                    </li>
                    <li> 
                        <a className='hover:text-black' href='#'>
                            Recources
                        </a>
                    </li>
                    <li>
                        <a className='hover:text-black' href='#'>
                            About
                        </a>
                    </li>
                    <li>
                        <a className='hover:text-black' href='#'>
                            Contact
                        </a>
                    </li>
                </ul>
                {/* Responsive Menu */}
                <ul className={`md:hidden w-full h-screen text-white fixed bg-black top-[92px] 
                        ${toggle ? 'left-[0]' : 'left-[-100%]'}
                        `}>
                    <li className='p-5'>
                        <a href='#'>
                            Home
                        </a>
                    </li>
                    <li className='p-5'>
                        <a href='#'>
                            Company
                        </a>
                    </li>
                    <li  className='p-5'> 
                        <a href='#'>
                            Recources
                        </a>
                    </li>
                    <li className='p-5'>
                        <a href='#'>
                            About
                        </a>
                    </li>
                    <li className='p-5'>
                        <a href='#'>
                            Contact
                        </a>
                    </li>
                </ul>
                
             </div>
        </div>
    )


}