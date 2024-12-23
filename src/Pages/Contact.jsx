
import React from 'react'
import myImg3 from '../Assets/myImg3.png'
import CursorEffect from '../Components/CursorEffect'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


function Contact() {
    return (
      <div  className='h-screen mx-24 my-40 relative p-6  text-wrap '>
          {/* <div className='absolute bottom-0 left-1/2 size-64 -translate-x-44  rounded-full bg-[rgb(0,255,47)] blur-[300px] '></div> */}
          <h1 id="contact" className='text-7xl text-white font-bold text-center my-10 font-lexend p-4'>Contact</h1>
          <div className=''>
            <form action="" className='flex p-10 gap-10  rounded-3xl flex-col bg-gradient-to-t from-[#259c2bc2] via-[#259c2b7c] to-[#259c2b44]  shadow-[0_0_1px_rgb(0,255,47)]'>
                <div className='flex gap-4 flex-row text-2xl '>
                    <input type="text" className='w-3/5 p-5 rounded-xl bg-[#031306]'  placeholder='Name'/>
                    <input type="text" className='w-2/5 p-5 rounded-xl bg-[#031306] '  placeholder='E-Mail'/>
                </div>
                <input type="text" className=' rounded-xl p-5 text-2xl bg-[#031306]' placeholder='Subject'/>
                <textarea name="" id="" className=' rounded-xl w-full text-lg p-5 h-64 bg-[#031306]' placeholder='Write Something...'></textarea>
                <div className='flex flex-row justify-between'>
                    <button className='mt-20 w-24 p-3 text-[#00ff2f] rounded-md shadow-[0_0_2px_rgb(0,255,47)] bg-[#031306] border-[#00ff2f] hover:shadow-[0_0_20px_rgb(0,255,47)] hover:scale-110 hover:bg-[#00ff2f] hover:text-black transition-all'>Clear</button>
                    <button className='mt-20 w-24 p-3 text-[#00ff2f] rounded-md shadow-[0_0_2px_rgb(0,255,47)] bg-[#031306] border-[#00ff2f] hover:shadow-[0_0_20px_rgb(0,255,47)] hover:scale-110 hover:bg-[#00ff2f] hover:text-black transition-all'>Submit</button>
                </div>
            </form>
          </div>
      </div>
    );
  }
  
export default Contact;
  