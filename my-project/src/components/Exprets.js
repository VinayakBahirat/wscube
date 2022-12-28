import React from 'react';
import laptop from "../assets/images/laptop-img.jpg";
export default function Exprets () {
    return (
        <div className='max-w-[1240px] p-2 mx-auto my-10 md:my-[100px]  md:grid grid-cols-2'>
            <div className='col-span-1 md:w-[80%] text-center'>
                <img className='w-full' src={laptop} alt='laptop-img'/>
            </div>
            <div className='mt-[100px]'>
                <h2 className='text-[#00df9a] font-bold justify-center'>
                    LEARN FROM Exprets
                </h2>
                <p className='my-2 mb-5 text-justify'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                     a type specimen book.
                </p>
                <button className='w-[30%] bg-black text-white p-3 rounded hover:bg-gray-700' >
                    Get started
                </button>
            </div>
        </div>
    )
        

}