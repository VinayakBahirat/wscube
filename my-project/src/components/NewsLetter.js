import React from 'react';
export default function NewsLetter () {
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
                <div className='m-2'>
                    <h2 className='text-[20px] md:text-[40px] font-bold text-white'>
                        Want to letust I.T skills?
                    </h2>
                    <span className='text-white'>
                        Sign up to our newsletter and stay up to date.
                    </span>
                </div>
                <div className='m-2'>
                    <input type='text' className='w-full md:w-[60%] rounded mb-5 md:mb-2 p-3 mr-2 text-slate-600' href='mailto:#Email' placeholder='Email' />
                    <button className='bg-black text-white p-3 mb-3 rounded hover:bg-gray-700'>
                        Get started
                    </button>
                    <p className='text-white py-1'>
                        We care bout the protection of your data. Read our 
                        <span className='text-black block'>
                            Privecy Policy 
                        </span> 
                    </p>
                </div>

            </div>
        </div>
    )
 }