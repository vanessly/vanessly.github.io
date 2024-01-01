import React from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillFileEarmarkTextFill} from 'react-icons/bs'
import Pic1 from '../assets/pic1.jpg'



const Home = () => {
  return (
    <div className='w-full h-screen bg-[#F0EDED]'>
     

      {/* Container */}
      <div className="text-black max-w-[50rem] h-full mx-auto px-8 flex flex-col justify-center">
        <div className="z-0">
          <div className='circle w-[300px] h-[300px] bg-[#FF5AB3] rounded-[100%] absolute top-[50%] left-[100%] -translate-x-1/2 -translate-y-1/2 blur-[90px]'></div>
          <div className='circle w-[150px] h-[150px] bg-[#FFEC3F] rounded-[100%] absolute top-[80%] left-[80%] -translate-x-1/2 -translate-y-1/2 blur-[90px]'></div>
          <div className='circle w-[300px] h-[300px] bg-[#B55DFB] rounded-[100%] absolute top-[100%] left-[0%] -translate-x-1/2 -translate-y-1/2 blur-[90px]'></div>
        </div>
        <div className="z-0 grid grid-cols-2 gap-4">
          <div>
            <h1 className='max-w-[15rem] py-2 text-2xl sm:text-4xl text-[#black] px-y-2 inline border-b-[7px] border-[#FFC0BE]'>Hi, I'm CC</h1>
            <p className='text-black py-2 max-w-[20rem]'>Aspiring software engineer and ambitious third-year student interested in creating full-stack web applications.</p>
            <button className='bg-white w-[5rem] px-2 py-1 rounded-full border border-black'>Contact</button>
          </div>
          <div>
            <img className='w-[15rem] border border-black inline rounded-[6rem]'src={Pic1} alt="headshot" />
          </div>
        </div>
        {/* Mobile Social Icons
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
        </div> */}
      </div>
      
    </div>
  )
}

export default Home