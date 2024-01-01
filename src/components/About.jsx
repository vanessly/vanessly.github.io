import React from 'react' 
import Headshot from '../assets/headshot.png'
import Pic1 from '../assets/pic1.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#F0EDED] text-black'>
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className='max-w-[50rem] w-full grid grid-cols-2 gap-8'>
                <div className='text-right pb-5'>
                    <h1 className='text-4xl font-bold inline border-b-4 border-purple-300'>About</h1>
                </div>
            </div>
            <div className='max-w-[50rem] w-full grid grid-cols-2 gap-8'>
                <div className='text-right text-2xl font-bold'>
                    <img className='w-[15rem] border border-black inline rounded-[6rem]'src={Pic1} alt="headshot" />
                </div>
                <div>
                    <p>I am a first generation Vietnamese student in my third year studying CS at the University of Michigan. In my free time, I love watching reality cooking shows, travelling, and indulging in video games from time to time.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About