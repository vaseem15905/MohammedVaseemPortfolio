
import React from 'react'
import myImg3 from '../Assets/myImg3.png'
import CursorEffect from '../Components/CursorEffect'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


function About() {
    return (
      <div  className='h-screen mx-24 my-40 relative p-6 rounded-3xl text-wrap  bg-gradient-to-t from-[#259c2bc2] via-[#259c2b7c] to-[#259c2b44] shadow-[0_0_1px_rgb(0,255,47)]'>
          {/* <div className='absolute bottom-0 left-1/2 size-64 -translate-x-44  rounded-full bg-[rgb(0,255,47)] blur-[300px] '></div> */}
          <h1 id="about" className='text-7xl text-[rgb(0,255,47)] font-bold text-center my-10 font-lexend p-4'>About Me</h1>
          <div className='mx-20 '>
            <p className='text-lg text-white font-thin text-center font-lexend'>I’m a front-end developer with a strong foundation in building responsive and dynamic web applications.</p>
            <p className='text-xl text-white font-thin text-center font-lexend my-6'>My Approach to Development.</p>
            <p className='text-lg text-white font-thin text-center font-lexend'>"I believe in clean, well-documented code and strive to create user-friendly designs. My approach to development centers on collaboration, problem-solving, and continuous learning. I’m always eager to improve my skills and stay updated with the latest trends in front-end technologies."</p>
            <img src={myImg3} alt="" className='absolute bottom-0 left-1/3 h-[500px]'/>
          </div>
      </div>
    );
  }
  
export default About;
  