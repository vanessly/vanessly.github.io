import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillFileEarmarkTextFill} from 'react-icons/bs'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-14 flex justify-end items-center px-4  text-gray-300 bg-[#0D1117]'>
      <div>
        {/* Menu */}
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Three Bars */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0D1117] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Projects</li>
          <li className='py-6 text-4xl'>Contact</li>
      </ul>
      {/* Social Icons */}
      <div className="top-[40%] hidden lg:flex fixed flex-col left-0">
        <ul>
          <li className='rounded-r-full w-[8rem] h-[2rem] flex justify-between items-center ml-[-5rem] hover:ml-[0] duration-300 bg-[#1D4E89]'>
            <a className='text-sm flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/vanessly/">LinkedIn<FaLinkedin size={20}/></a>
          </li>
          <li className='rounded-r-full w-[8rem] h-[2rem] flex justify-between items-center ml-[-5rem] hover:ml-[0] duration-300 bg-gray-800'>
            <a className='text-sm flex justify-between items-center w-full text-gray-300' href="https://github.com/vanessly">GitHub <FaGithub size={20}/></a>
          </li>
          <li className='rounded-r-full w-[8rem] h-[2rem] flex justify-between items-center ml-[-5rem] hover:ml-[0] duration-300 bg-[#819595]'>
            <a className='text-sm flex justify-between items-center w-full text-gray-300' href="mailto:vanessly@umich.edu">Email <HiOutlineMail size={20}/></a>
          </li>
          <li className='rounded-r-full w-[8rem] h-[2rem] flex justify-between items-center ml-[-5rem] hover:ml-[0] duration-300 bg-[#253D5B]'>
            <a className='text-sm flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1PhYoBdaC-OZB7DgX7WlWY7dvNfpFgIPo/view?usp=sharing">Resume <BsFillFileEarmarkTextFill size={20}/></a>
          </li>
        </ul>
      </div>
      </div>
  )
}

export default Navbar