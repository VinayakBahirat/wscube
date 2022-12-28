import React from 'react';
import {AiFillFacebook, AiOutlineInstagram, AiFillTwitterSquare, AiFillGithub} from "react-icons/ai";
export default function Footer () {
    return (
        <div className='w-full bg-[#2699fb]'>   
            <div className='max-w-[1240px] mx-auto py-[40px] pl-4  md:pt-[70px] md:pb-[40px]'>
                <div className='md:flex gap-[160px]'>
                    <div className='py-2 text-start'>
                        <h2 className='text-2xl font-bold'>
                                WsCube Tech.
                        </h2>
                        <p className='py-2'> 
                            Contrary to popular belief, Lorem Ipsum is
                            <span className='md:block'>
                                not simply random text. 
                            </span> 
                        </p>
                        <ul className='flex gap-3 my-3'>
                            <li>
                                <a className='text-white' href="https://www.facebook.com/" target={'blank'}>
                                    <AiFillFacebook className='text-white text-[20px] hover:text-black'/>
     
                                </a>
                           </li>
                            <li>
                                <a className='text-white' href="https://www.instagram.com/" target={'black'}>
                                    <AiOutlineInstagram className='text-white text-[20px] hover:text-black'/>
 
                                </a>
                           </li>
                            <li>
                                <a className='text-white' href="https://twitter.com/i/flow/login" target={'black'}>
                                    <AiFillTwitterSquare  className='text-white text-[20px] hover:text-black'/>
                                </a>
                                
                            </li>
                            <li>
                                <a className='text-white' href="https://github.com/" target={'black'}>
                                    <AiFillGithub  className='text-white text-[20px] hover:text-black'/>
      
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='py-2'>
                        <h4 className='font-bold'>
                            Solutions
                        </h4>
                        <ul>
                            <li className='my-3'>
                                <a className='text-white hover:text-black' href='#'>
                                    Analytics              
                                </a>
                            </li>
                            <li className='my-3'>
                                <a className='text-white hover:text-black' href='#'>
                                    Marketing
                                </a>   
                            </li>
                           <li className='my-3'>
                                <a className='text-white hover:text-black' href='#'>
                                    Commerce
                                </a>   
                            </li>
                            <li className='my-3'>
                                <a className='text-white hover:text-black' href='#'>
                                    Insights
                                </a>   
                            </li>
                        </ul>
                    </div>
                     <div className='py-2'>
                        <h4 className='font-bold'>
                            Support
                        </h4>
                        <ul>
                            <li className='my-3'>
                                <a className='text-white hover:text-black' href='#'>
                                    Pricing              
                                </a>
                            </li>
                            <li className='my-3'>
                                <a className='text-white hover:text-black' href='#'>
                                    Documentaion
                                </a>   
                            </li>
                           <li className='my-3'>
                                <a className='text-white hover:text-black' href='#'>
                                    Guides
                                </a>   
                            </li>
                            <li className='my-3'>
                                <a className='text-white hover:text-black' href='#'>
                                    API Status
                                </a>   
                            </li>
                        </ul>
                    </div>
                    <div className='pt-2'>
                    <h4 className='font-bold'>
                            Company
                        </h4>
                        <ul>
                            <li className='my-3'>
                                <a className='text-white hover:text-black' href='#'>
                                    About             
                                </a>
                            </li>
                            <li className='my-3'>
                                <a className='text-white hover:text-black' href='#'>
                                   Blog
                                </a>   
                            </li>
                           <li className='my-3'>
                                <a className='text-white hover:text-black' href='#'>
                                    Jobd
                                </a>   
                            </li>
                            <li className='my-3'>
                                <a className='text-white hover:text-black' href='#'>
                                    Press
                                </a>   
                            </li>
                            <li className='my-3'>
                                <a className='text-white hover:text-black' href='#'>
                                    Careers
                                </a>   
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>  
    )
}