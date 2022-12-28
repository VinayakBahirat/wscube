import React from 'react';
import Typed from 'react-typed';
export default function Banner () {
    return (
        <div className='bg-[#2699fb] w-full py-[50px]'>
             <div className='max-w[1240px] py-[100px] mx-auto text-center  font-bold'>
                <h1 className='text-xl md:text-3xl pb-3 md:p-[24px]'>
                    Learn with us
                </h1>
                <h2 className='text-white text-5xl md:text-[80px] pb-5 md:p-[24px]'>
                    Grow with us.
                </h2>
                <div className='text-[20px] md:text-[50px] md:p-[24px] md:pb-[60px] pb-5 text-white '>
                    Learn
                    <Typed
                    className='pl-3'
                    strings={['Web Developmemt', 'Digital Marketing', 'Ethical Hacking']}
                    typeSpeed={120}
                    loop={true}
                    backSpeed={100}
                />
                </div>

                <button className='w-[30%] bg-black text-white p-3 hover:bg-gray-700 rounded' >
                    Get started
                </button>
             </div>
        </div>
    )
}