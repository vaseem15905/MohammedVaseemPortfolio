
// import React from 'react';
// import myImg4 from '../Assets/myImg4.png';
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// function About() {
//   return (
//     <div
//       id="about"
//       className="h-auto mx-4 sm:mx-16 md:mx-24 my-16 sm:my-20 md:my-40 relative p-6 px-5 sm:p-8 md:p-10 rounded-3xl flex flex-col sm:flex-row bg-gradient-to-t from-[#259c2bc2] via-[#259c2b7c] to-[#259c2b44] shadow-[0_0_1px_rgb(0,255,47)]"
//     >
//       {/* Left Section */}
//       <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#00ff2f] font-bold my-4 sm:my-6 md:my-8 font-lexend text-center sm:text-left">
//           About Me
//         </h1>
//         <img
//           src={myImg4}
//           alt="About Me"
//           className=" w-[70%] z-20 sm:w-[80%] md:w-[350px] sm:h-[300px] md:h-[450px] object-cover rounded-md mx-auto sm:mx-0"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="w-full sm:w-1/2 flex flex-col justify-between mt-6 sm:mt-0 px-4 sm:px-8 md:px-12">
//         <p className="text-base sm:text-lg md:text-xl text-white font-light font-lexend leading-relaxed text-center sm:text-left">
//           I’m a Web Developer with a strong foundation in building responsive and dynamic web applications.
//         </p>
//         <p className="text-lg sm:text-xl md:text-2xl text-white font-medium font-lexend my-6 text-center sm:text-left">
//           My Approach to Development
//         </p>
//         <p className="text-base sm:text-lg md:text-xl text-white font-light font-lexend leading-relaxed text-center sm:text-left">
//           "I believe in clean, well-documented code and strive to create user-friendly designs. My approach to development centers on collaboration, problem-solving, and continuous learning. I’m always eager to improve my skills and stay updated with the latest trends in front-end technologies."
//         </p>

//         {/* Social Links */}
//         <div className="flex gap-6 justify-center sm:justify-start mt-6">
//           <a
//             href="https://github.com/your-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white text-3xl sm:text-4xl md:text-5xl hover:text-[#00ff2f] transition-all"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://linkedin.com/in/your-profile"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white text-3xl sm:text-4xl md:text-5xl hover:text-[#00ff2f] transition-all"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="https://instagram.com/your-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white text-3xl sm:text-4xl md:text-5xl hover:text-[#00ff2f] transition-all"
//           >
//             <FaInstagram />
//           </a>
//         </div>
//       </div>
//       {/* <div className="absolute bottom-0 left-0  w-96 h-96 translate-y-44 rounded-full bg-[rgb(0,255,47)] blur-[400px]"></div> */}
//     </div>
//   );
// }

// export default About;




import React from 'react';
import myImg4 from '../Assets/myImg4.png';
import { FaGithub, FaLinkedin,FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

function About() {
  return (
    <div
      id="about"
      className=" h-auto relative rounded-3xl mx-4 sm:mx-16 md:mx-24 my-16 sm:my-20 md:my-40 p-6 px-5 sm:p-8 md:p-28 justify-center items-center flex flex-col sm:flex-row  shadow-customInner bg-[#004d1a]"
    >
      {/* Left Section */}
      <div className="w-full sm:w-1/2 flex flex-col justify-evenly items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl md:text-7xl text-[#00ff2f] font-bold my-4 sm:my-6 md:my-8 font-lexend text-center sm:text-left">
          About Me
        </h1>
        <img
          src={myImg4}
          alt="About Me"
          className=" w-[70%] z-20 sm:w-[80%] md:w-[350px] sm:h-[300px] md:h-[450px] object-cover rounded-md mx-auto sm:mx-0"
        />
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-1/2 flex flex-col  mt-6 sm:mt-0 px-4 sm:px-8 md:px-12">
        <p className="text-base sm:text-lg md:text-xl text-white font-light font-lexend leading-relaxed text-center sm:text-left">
          I’m a Web Developer with a strong foundation in building responsive and dynamic web applications.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-white font-medium font-lexend my-6 text-center sm:text-left">
          My Approach to Development
        </p>
        <p className="text-base sm:text-lg md:text-xl text-white font-light font-lexend leading-relaxed text-center sm:text-left">
          "I believe in clean, well-documented code and strive to create user-friendly designs. My approach to development centers on collaboration, problem-solving, and continuous learning. I’m always eager to improve my skills and stay updated with the latest trends in front-end technologies."
        </p>

        {/* Social Links */}
        <div className="flex gap-8 sm:gap-16 justify-center sm:justify-start mt-20">
          <a
            href="https://github.com/vaseem15905"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl sm:text-4xl md:text-5xl hover:text-[#00ff2f] transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/mohammed-vaseem15905"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl sm:text-4xl md:text-5xl hover:text-[#00ff2f] transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/vasi.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl sm:text-4xl md:text-5xl hover:text-[#00ff2f] transition-all"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:mohammedvaseem15905.com" // Replace with your email
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl sm:text-4xl md:text-5xl hover:text-[#00ff2f] transition-all"
          >
            <FaEnvelope/>
          </a>
          <a
            href="https://wa.me/+918608252352" // Replace with the desired phone number, in international format
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl sm:text-4xl md:text-5xl hover:text-[#25D366] transition-all"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0  w-96 h-96 translate-y-44 rounded-full bg-[rgb(0,255,47)] blur-[400px]"></div> */}
    </div>
  );
}

export default About;
