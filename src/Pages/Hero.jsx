// // import React from 'react'
// // import myImg from '../Assets/myImg.png'
// // import CursorEffect from '../Components/CursorEffect'
// // import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// // import NavBar from './NavBar';


// // function Hero() {
// //   return (
// //     <div className='h-screen pl-9 pt-40 bg-[#031306]  '>
// //       <CursorEffect/>
// //           <div className=' size-[650px] rounded-full absolute bottom-0 right-0 bg-[#1E1E1] shadow-[0_0_300px_rgb(0,255,47)]  '></div>
// //           <img  src={myImg} alt=""  className='absolute   bottom-0 right-0' />
// //       <div className=''>
// //           <h1 className='text-white font-lexend font-extralight ml-2 text-5xl'>Hi, I'm</h1>
// //           <h1 className='text-white font-lexend font-bold text-9xl'>Mohammed</h1>
// //           <h1 className='text-[#00ff2f] font-lexend font-bold text-9xl'>Vaseem</h1>
// //           <h1 className='text-white font-sans font-medium text-3xl mt-9 '>WEB-DEVELOPER</h1>
// //           <p className='text-white font-sans font-thin text-2xl mt-9 '>Specialized in Building Responsive Web Applications</p>
// //           <div className='flex gap-8 mt-4'>
// //           <button className='mt-20 p-3 text-[#00ff2f] border-2 border-[#00ff2f] hover:shadow-[0_0_30px_rgb(0,255,47)] hover:scale-110 hover:bg-[#00ff2f] hover:text-black transition-all'> EXPLORE !</button>
// //           <button className='mt-20 p-3 text-[#00ff2f] border-2 border-[#00ff2f] hover:shadow-[0_0_30px_rgb(0,255,47)] hover:scale-110 hover:bg-[#00ff2f] hover:text-black transition-all'> EXPLORE !</button>
// //           </div>
// //           <div className="flex gap-6 absolute bottom-6 left-8">
// //             <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-white text-5xl hover:text-[#00ff2f] transition-all"><FaGithub /></a>
// //             <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white text-5xl hover:text-[#00ff2f] transition-all"><FaLinkedin /></a>
// //             <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="text-white text-5xl hover:text-[#00ff2f] transition-all"><FaInstagram /></a>
// //           </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Hero


// import React from 'react'
// import myImg from '../Assets/myImg.png'
// import CursorEffect from '../Components/CursorEffect'
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import NavBar from './NavBar';


// function Hero() {
//   return (
//     <div className='h-screen pl-9 pt-40 bg-[#031306]  '>
//       <CursorEffect/>
//       <div className='absolute bottom-1/3 right-0 size-96 -translate-x-44 rounded-full bg-[rgb(0,255,47)] blur-[400px] '></div>
//       <div className='absolute top-0 left-0 size-96 -translate-x-44 rounded-full bg-[rgb(0,255,47)] blur-[400px] '></div>
//       <img  src={myImg} alt=""  className='absolute   bottom-0 right-0' />
//       <div className=''>
//           <h1 className='text-white font-lexend font-extralight ml-2 text-5xl'>Hi, I'm</h1>
//           <h1 className='text-white font-lexend font-bold text-9xl'>Mohammed</h1>
//           <h1 className='text-[#00ff2f] font-lexend font-bold text-9xl'>Vaseem</h1>
//           <h1 className='text-white font-sans font-medium text-3xl mt-9 '>WEB-DEVELOPER</h1>
//           <p className='text-white font-sans font-thin text-2xl mt-9 '>Specialized in Building Responsive Web Applications</p>
//           <p className='text-white font-sans font-thin text-2xl mt-9 '>This Website is under Construction</p>

//           <div className='flex gap-8 mt-4'>
//           <button className='mt-20 p-3 text-[#00ff2f] rounded-md shadow-[0_0_2px_rgb(0,255,47)] border-[#00ff2f] hover:shadow-[0_0_20px_rgb(0,255,47)] hover:scale-110 hover:bg-[#00ff2f] hover:text-black transition-all'>Hire Me!</button>
//           <button className='mt-20 p-3 text-[#00ff2f] rounded-md shadow-[0_0_2px_rgb(0,255,47)] border-[#00ff2f] hover:shadow-[0_0_20px_rgb(0,255,47)] hover:scale-110 hover:bg-[#00ff2f] hover:text-black transition-all'>Download Resume</button>
//           </div>

//       </div>
//     </div>
//   )
// }

// export default Hero


import React from 'react';
import myImg from '../Assets/myImg.png';
import CursorEffect from '../Components/CursorEffect';

function Hero() {
  return (
    <div id='home' className="h-screen flex flex-col items-start justify-between  relative pt-32 px-6 sm:px-12 lg:px-20 pb-10 sm:pb-0">
      <CursorEffect />

      {/* Background Effects */}
      <div className="absolute bottom-0 right-0 w-60 h-40 sm:w-96 sm:h-96 rounded-full bg-[rgb(0,255,47)] blur-[200px] sm:blur-[400px]"></div>
      <div className="absolute top-0 left-0 w-60 h-40 sm:w-96 sm:h-96 -translate-x-44 rounded-full bg-[rgb(0,255,47)] blur-[200px] sm:blur-[400px]"></div>

      {/* Hero Content */}
      <div className="z-10 mt-6 sm:mt-16">
        <h1 className="text-white font-lexend ml-1 font-extralight text-4xl sm:text-5xl">Hi, I'm</h1>
        <h1 className="text-white font-lexend font-bold text-5xl sm:text-8xl lg:text-9xl">Mohammed</h1>
        <h1 className="text-[#00ff2f] font-lexend font-bold text-5xl sm:text-8xl lg:text-9xl">Vaseem</h1>
        <h2 className="text-white font-sans font-medium text-lg sm:text-3xl mt-4">WEB DEVELOPER</h2>
        <p className="text-[#00ff2f] font-sans font-thin text-base sm:text-2xl mt-4">
          Specialized in Building Responsive Web Applications
        </p>
        <p className="text-white font-sans font-thin text-base sm:text-2xl mt-2">
          This Website is under Construction
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
          <button  className="p-2 w-48 sm:p-3 px-4 sm:px-6  border border-[#00ff2f] rounded-md shadow-[0_0_2px_rgb(0,255,47)]  hover:scale-110 bg-[#00ff2f] text-black transition-all" 
          onClick={() => {
            const link = document.createElement('a');
            link.href = '#contact'; // Replace with the actual path to your file
            link.click();
          }}>
            Hire Me!
          </button>
          <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/resume.pdf'; // Replace with the actual path to your file
            link.download = 'Resume_Mohammed_Vaseem_H.pdf'; // Set the file name
            link.click();
          }}
           className="p-2 w-48 sm:p-3 px-4 sm:px-6 text-[#00ff2f] border border-[#00ff2f] rounded-md shadow-[0_0_2px_rgb(0,255,47)]  hover:scale-110  transition-all">
            Download Resume
          </button>
        </div>
      </div>

      {/* Image */}
      <img
        src={myImg}
        alt="Mohammed Vaseem"
        className="absolute bottom-0 right-0 w-[100%] max-w-[600px] sm:w-[70%] sm:max-w-[800px] lg:w-[60%] lg:max-w-[900px] "
      />
    </div>
  );
}

export default Hero;
