import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                        {/* 1st block */}
                        <div className="col-span-12 lg:col-span-4">
                            <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                                <h3 className="font-bold text-4xl mb-4">striv</h3>
                                <div className='text-md font-medium text-gray-600'>
                                    <h5>striv digital</h5>
                                    <p>Calgary,</p>
                                    <p>Alberta</p>
                                    <p>Canada</p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                                </li>
                            </ul>
                        </div>

                        {/* 3rd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Web Development</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Digital Marketing</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Content Creation</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">General IT Consultations</Link>
                                </li>
                            </ul>
                        </div>

                        {/* 4th block */}
                        <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                            <div className="text-xl mb-6">
                                Social Media Links.
                            </div>

                            <div className="text-md font-medium mb-6">
                                Follow us on social media.
                            </div>
                            <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li>
                                        <Link to="https://www.linkedin.com/in/jeromegarcia" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="LinkedIn">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 12h5.535v2.254h.079c.771-1.461 2.657-3.004 5.471-3.004 5.849 0 6.915 3.847 6.915 8.854v10.196h-5.774v-9.032c0-2.153-.039-4.92-3.006-4.92-3.009 0-3.469 2.355-3.469 4.773v9.179h-5.75V12zM2 12h6.015v20.251H2V12zm15.142-7.75a3.515 3.515 0 110-7.031 3.515 3.515 0 010 7.03zM7 7.512C7 5.198 8.575 3.5 11.082 3.5s4.059 1.698 4.059 4.012-1.568 4.012-4.059 4.012-4.083-1.798-4.083-4.012z" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="ml-4">
                                        <Link to="https://www.facebook.com/jeromegarcia" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.026 24.83v-7.097h-2.38V15.22h2.38v-2.148c0-2.357 1.44-3.638 3.54-3.638 1.01 0 1.877.075 2.126.109v2.464h-1.457c-1.15 0-1.372.546-1.372 1.346V15.22h2.73l-.357 2.513h-2.373v7.097h-2.77z" />
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                            <div className="text-sm text-gray-200 font-semibold py-1">
                                Copyright &copy; {new Date().getFullYear()}{" "}
                                <HashLink
                                    to="#"
                                    className=" hover:text-gray-900"
                                >
                                    striv digital
                                </HashLink>. All rights reserved.
                            </div>
                        </div>
                    </div>

                </div>

            </footer>
        </>
    )
}
export default Footer;
