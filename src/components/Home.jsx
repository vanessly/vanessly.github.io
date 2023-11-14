import React from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillFileEarmarkTextFill} from 'react-icons/bs'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0D1117]'>
      {/* Container */}
      <div className="text-gray-300 max-w-[50rem] h-full mx-auto px-8 flex flex-col justify-center">
        <h1 className='text-4xl sm:text-7xl font-bold text-[#faf6ff]'>Hi, I'm CC Ly</h1>
        <h2 className='text-xl sm:text-2xl font-medium text-[#9f91b1] py-1'>I am an aspiring software engineer.</h2>
        {/* Mobile Social Icons */}
        <div className='lg:hidden flex space-x-3'>
          <li className='rounded-full flex justify-center items-center -space-x-4 w-[1rem] h-[2rem] bg-[#1D4E89]'>
            <a className='text-sm flex items-center w-auto text-gray-300' href="https://www.linkedin.com/in/vanessly/"><FaLinkedin size={18}/></a>
          </li>
          <li className='rounded-full flex justify-center items-center -space-x-4 w-[1rem] h-[2rem] bg-gray-800'>
            <a className='text-sm flex items-center w-auto text-gray-300' href="https://github.com/vanessly"><FaGithub size={18}/></a>
          </li>
          <li className='rounded-full flex justify-center items-center -space-x-4 w-[1rem] h-[2rem] bg-[#819595]'>
            <a className='text-sm flex items-center w-auto text-gray-300' href="mailto:vanessly@umich.edu"><HiOutlineMail size={18}/></a>
          </li>
          <li className='rounded-full flex justify-center items-center -space-x-4 w-[1rem] h-[2rem] bg-[#253D5B]'>
            <a className='text-sm flex items-center w-auto text-gray-300' href="https://drive.google.com/file/d/1PhYoBdaC-OZB7DgX7WlWY7dvNfpFgIPo/view?usp=sharing"><BsFillFileEarmarkTextFill size={18}/></a>
          </li>
        </div>
        <p className='text-[#d9d3e0] py-2 max-w-[70rem]'>Ambitious third-year student interested in creating full-stack web applications, artificial neural networks, and computer vision.</p>
      </div>
    </div>
  )
}

export default Home