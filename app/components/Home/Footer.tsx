import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#111111]">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-center pb-[2rem] border-b-2 border-white border-opacity-10">
            {/* 1st part of footer */}
            <div>
                <h1 className="text-[24px] text-white mb-[1rem] font-bold uppercase">Jobify</h1>
                <p className="text-[14px] text-white text-opacity-70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aut voluptatem magni saepe voluptatum? Consectetur, minima. Dolorum, at voluptates repellat excepturi voluptatibus atque amet magni mollitia eum est, ad asperiores?
                </p>
                {/* Social icons */}
                <div className="mt-[1.5rem] flex items-center space-x-3">
                    <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col">
                        <FaFacebookF className="text-white"/>
                    </div>
                    <div className="w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center justify-center flex-col">
                        <FaTwitter className="text-white"/>
                    </div>
                    <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col">
                        <FaYoutube className="text-white"/>
                    </div>
                    <div className="w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col">
                        <FaInstagram className="text-white"/>
                    </div>
                </div>
            </div>
            {/* 2nd part of footer */}
            <div>
                <h1 className="text-[2rem] w-fit text-white font-semibold mb-[1.5rem]">About Us</h1>
                <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]">
                    <Link href="/">Job</Link>
                </p>
                <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]">
                    <Link href="/">Privacy</Link>
                </p>
                <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]">
                    <Link href="/">Police</Link>
                </p>
                <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]">
                    <Link href="/">Application</Link>
                </p>
                <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]">
                    <Link href="/">Candidates</Link>
                </p>
            </div>
            {/* 3rd part of footer */}
            <div>
                <h1 className="text-[2rem] w-fit text-white font-semibold mb-[1.5rem]">Quick Link</h1>
                <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]">
                    <Link href="/">All Job</Link>
                </p>
                <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]">
                    <Link href="/">Job Details</Link>
                </p>
                <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]">
                    <Link href="/">How To Apply</Link>
                </p>
                <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-70 mb-[0.7rem]">
                    <Link href="/">Resume</Link>
                </p>
            </div>
            {/* 4th part of footer */}
            <div>
                <h1 className="text-[2rem] w-fit text-white font-semibold mb-[1.5rem]">Get In Touch</h1>
                <p className="text-[15px] w-fit text-white text-opacity-70 mb-[0.7rem]">
                    +8801788134303
                </p>
                <p className="text-[15px] w-fit text-white text-opacity-70 mb-[0.7rem]">
                    example@gmail.com
                </p>
                <p className="text-[15px] w-fit text-white text-opacity-70 mb-[0.7rem]">
                    Dhaka Tangail, Bangladesh
                </p>
            </div>
        </div>
        <h1 className="mt-[2rem] text-[14px] w-[80%] mx-auto text-white opacity-50">COPYRIGHT BY VIRATION WEB SOLUTION- 2024</h1>
    </div>
  )
}

export default Footer