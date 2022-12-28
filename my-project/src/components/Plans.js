import React from 'react';
import development from "../assets/images/Web-development-img.png";
import marketing from "../assets/images/Digital-Marketing-img.png";
import AppDevelopment from "../assets/images/App-Development-img.png";
export default function Plans () {
    return (
        <div className='max-w-[1240px] mx-auto md:flex gap-6 my-10 md:my-[80px]'>
            <div className='shadow-xl my-5 hover:scale-105 duration-500'>
                <img className='w-[100px] mx-auto md:pl-[30px] mt-5' src={development} alt=' Web development '/>
                <div className='text-center p-5 pt-5 pb-10'>
                    <h4 className='text-[20px] md:text[40px] font-bold'>
                        Web development 
                    </h4>
                    <span className='block text-[40px] font-bold py-4'>
                        $149
                    </span>
                    <div className='px-6'>
                        <p className='border-b py-2'>
                            Lorem Ipsum is simply
                        </p>
                        <p  className='border-b py-2'>
                            Lorem Ipsum has been the industry's standard dummy text
                        </p>
                        <p  className='border-b py-2'>
                            Lorem Ipsum is not simply random text
                        </p>
                    </div>
                </div>
            </div>
            <div className='shadow-xl my-5 bg-gray-100 hover:scale-105 duration-500'>
                 <img className='w-[70px] mx-auto mt-5' src={marketing} alt='Digital Marketing' />
                <div className='text-center p-5 py-10'>
                        <h4 className='text-[20px] md:text[40px] font-bold'>
                            Digital Marketing 
                        </h4>
                        <span className='block text-[40px] font-bold py-4'>
                            $149
                        </span>
                        <div className='px-6'>
                            <p className='border-b py-2'>
                                Lorem Ipsum is simply
                            </p>
                            <p  className='border-b py-2'>
                                Lorem Ipsum has been the industry's standard dummy text
                            </p>
                            <p  className='border-b py-2'>
                                Lorem Ipsum is not simply random text
                            </p>
                        </div>
                </div>
            </div>
            <div className='shadow-xl my-5 hover:scale-105 duration-500'>
                <img className='w-[70px] mx-auto mt-5' src={AppDevelopment} alt='App-Development' />
                <div className='text-center p-5 py-10'>
                        <h4 className='text-[20px] md:text[40px] font-bold'>
                            App Development
                        </h4>
                        <span className='block text-[40px] font-bold py-4'>
                            $149
                        </span>
                        <div className='px-6'>
                            <p className='border-b py-2'>
                                Lorem Ipsum is simply
                            </p>
                            <p  className='border-b py-2'>
                                Lorem Ipsum has been the industry's standard dummy text
                            </p>
                            <p  className='border-b py-2'>
                                Lorem Ipsum is not simply random text
                            </p>
                        </div>
                </div>
           </div>
        </div>
    )
}