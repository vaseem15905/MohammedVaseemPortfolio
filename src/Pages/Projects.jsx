// // import React, { useState } from 'react';
// // import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// // // Import images
// // import CuriousBees from '../Assets/CuriousBees.jpg';
// // import BioWhizz from '../Assets/BioWhizz.png';
// // import MindWhizz from '../Assets/MindWhizz.png'
// // import EventManagement from '../Assets/EventManagement.png';

// // function Projects() {
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   const projectData = [
// //     {
// //       title: "Curious Bees",
// //       description: "A social media platform for research scholars, designed for academic and research discussions.",
// //       tech: "React, Javascript, Firebase, Python",
// //       image: CuriousBees, // Imported image
// //     },
// //     {
// //       title: "BioWhizz",
// //       description: "An AI-powered biogas production system for real-time monitoring and anomaly detection, featuring a chatbot and dashboard for user-friendly control. It ensures efficient gas production, excess biogas collection, and home delivery of nutrient kits based on sensor data.",
// //       tech: "ESP8266, Firebase, Cloudflare, LLM Chatbot, Python, React",
// //       image: BioWhizz, // Imported image
// //     },
// //     {
// //       title: "MindWizz",
// //       description: "A machine learning-based app designed to monitor and enhance mental well-being through personalized insights and tracking.",
// //       tech: "React, Node.js, TensorFlow, Firebase",
// //       image: MindWhizz, // Imported image
// //     },
// //     {
// //       title: "Event Management System",
// //       description: "A system for generating certificates based on user inputs from templates and Excel, integrating authentication for verification.",
// //       tech: "Python Flask",
// //       image: EventManagement, // Imported image
// //     },
// //   ];

// //   const nextSlide = () => {
// //     setCurrentSlide((prev) => (prev + 1) % projectData.length);
// //   };

// //   const prevSlide = () => {
// //     setCurrentSlide((prev) => (prev - 1 + projectData.length) % projectData.length);
// //   };

// //   return (
// //     <div id="projects" className="h-screen p-10">
// //       <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#00ff2f] font-bold text-center my-10 font-lexend z-10">
// //         Projects
// //       </h1>

// //       <div className="flex justify-center gap-8">
// //         {/* Left Side: Project Descriptions */}
// //         <div className="w-1/2 flex flex-col justify-center text-white">
// //           <h2 className="text-3xl font-bold mb-4">{projectData[currentSlide].title}</h2>
// //           <p className="text-lg mb-4">{projectData[currentSlide].description}</p>
// //           <p className="text-sm text-[#00ff2f]">{`Technologies Used: ${projectData[currentSlide].tech}`}</p>
// //         </div>

// //         {/* Right Side: Carousel */}
// //         <div className="w-1/2 relative">
// //           <img
// //             src={projectData[currentSlide].image}
// //             alt={projectData[currentSlide].title}
// //             className="w-full h-auto object-cover rounded-lg"
// //           />
// //           <button
// //             onClick={prevSlide}
// //             className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-white"
// //           >
// //             <FaArrowLeft />
// //           </button>
// //           <button
// //             onClick={nextSlide}
// //             className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-white"
// //           >
// //             <FaArrowRight />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Projects;


// import React, { useState, useRef, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// // Imported images (replace with actual paths if necessary)
// import CuriousBees from '../Assets/CuriousBees.jpg';
// import BioWhizz from '../Assets/BioWhizz.png';
// import MindWhizz from '../Assets/MindWhizz.png';
// import EventManagement from '../Assets/EventManagement.png';

// const Arrow = ({ onClick, direction }) => (
//   <button
//     className={`absolute top-1/2 ${direction === 'left' ? 'left-4' : 'right-4'} transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10`}
//     onClick={onClick}
//   >
//     {direction === 'left' ? <FaArrowLeft /> : <FaArrowRight />}
//   </button>
// );

// const Projects = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sliderRef = useRef(null);

//   const projectData = [
//     {
//       title: "Curious Bees",
//       description: "A social media platform for research scholars, designed for academic and research discussions.",
//       tech: "React, Javascript, Firebase, Python",
//       image: CuriousBees,
//       width: 600, // Set actual image width (example)
//       height: 400, // Set actual image height (example)
//     },
//     {
//       title: "BioWhizz",
//       description: "An AI-powered biogas production system for real-time monitoring and anomaly detection, featuring a chatbot and dashboard for user-friendly control. It ensures efficient gas production, excess biogas collection, and home delivery of nutrient kits based on sensor data.",
//       tech: "ESP8266, Firebase, Cloudflare, LLM Chatbot, Python, React",
//       image: BioWhizz,
//       width: 600,
//       height: 400,
//     },
//     {
//       title: "MindWizz",
//       description: "A machine learning-based app designed to monitor and enhance mental well-being through personalized insights and tracking.",
//       tech: "React, Node.js, TensorFlow, Firebase",
//       image: MindWhizz,
//       width: 600,
//       height: 400,
//     },
//     {
//       title: "Event Management System",
//       description: "A system for generating certificates based on user inputs from templates and Excel, integrating authentication for verification.",
//       tech: "Python Flask",
//       image: EventManagement,
//       width: 600,
//       height: 400,
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     beforeChange: (current, next) => setCurrentSlide(next),
//     afterChange: (current) => setCurrentSlide(current),
//   };

//   useEffect(() => {
//     if (projectData.length > 0) {
//       setCurrentSlide(0);
//     }

//     const handleKeyDown = (event) => {
//       if (event.key === 'ArrowRight') {
//         sliderRef.current.slickNext();
//       } else if (event.key === 'ArrowLeft') {
//         sliderRef.current.slickPrev();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div className="bg-[#001403] min-h-screen flex flex-col items-center justify-start p-0">
//       <h1 className="text-[#00ff2f] text-4xl sm:text-5xl md:text-6xl font-bold mt-8 mb-12 text-center">Our Projects</h1>
//       <div className="relative w-full max-w-7xl px-4">
//         {/* Left Arrow Button */}
//         <Arrow direction="left" onClick={() => sliderRef.current.slickPrev()} />

//         {/* Slider */}
//         <Slider ref={sliderRef} {...settings}>
//           {projectData.map((project, index) => (
//             <div key={index} className="transition-transform duration-500 cursor-pointer">
//               <div className="relative rounded-2xl overflow-hidden">
//                 <img 
//                   src={project.image} 
//                   alt={project.title} 
//                   className="object-contain mx-auto"
//                   width={project.width}
//                   height={project.height}
//                 />
//               </div>
//               <h3 className="text-[#00ff2f] text-center mt-4 text-2xl sm:text-3xl font-bold">{project.title}</h3>

//               {/* Description and Tech Stack Box */}
//               <div className="bg-black text-white p-6 rounded-xl mt-4 text-center">
//                 <p>{project.description}</p>
//                 <p className="mt-2 text-sm">{`Technologies Used: ${project.tech}`}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>

//         {/* Right Arrow Button */}
//         <Arrow direction="right" onClick={() => sliderRef.current.slickNext()} />
//       </div>
//     </div>
//   );
// };

// export default Projects;


import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Imported images (replace with actual paths if necessary)
import CuriousBees from '../Assets/CuriousBees.jpg';
import biowhizz from '../Assets/biowhizz.png';
import MindWhizz from '../Assets/MindWhizz.png';
import EventManagement from '../Assets/EventManagement.png';

const Arrow = ({ onClick, direction }) => (
  <button
    className={`absolute top-1/2 ${direction === 'left' ? 'left-4' : 'right-4'} transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10`}
    onClick={onClick}
  >
    {direction === 'left' ? <FaArrowLeft /> : <FaArrowRight />}
  </button>
);

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const projectData = [
    {
      title: "Curious Bees",
      description: "A social media platform for research scholars, designed for academic and research discussions.",
      tech: "React, Javascript, Firebase, Python",
      image: CuriousBees,
      width: 600, // Set actual image width (example)
      height: 400, // Set actual image height (example)
    },
    {
      title: "BioWhizz",
      description: "An AI-powered biogas production system for real-time monitoring and anomaly detection, featuring a chatbot and dashboard for user-friendly control. It ensures efficient gas production, excess biogas collection, and home delivery of nutrient kits based on sensor data.",
      tech: "ESP8266, Firebase, Cloudflare, LLM Chatbot, Python, React",
      image: biowhizz,
      width: 600,
      height: 400,
    },
    {
      title: "MindWizz",
      description: "A machine learning-based app designed to monitor and enhance mental well-being through personalized insights and tracking.",
      tech: "React, Node.js, TensorFlow, Firebase",
      image: MindWhizz,
      width: 600,
      height: 400,
    },
    {
      title: "Event Management System",
      description: "A system for generating certificates based on user inputs from templates and Excel, integrating authentication for verification.",
      tech: "Python Flask",
      image: EventManagement,
      width: 600,
      height: 400,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
  };

  useEffect(() => {
    if (projectData.length > 0) {
      setCurrentSlide(0);
    }

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        sliderRef.current.slickNext();
      } else if (event.key === 'ArrowLeft') {
        sliderRef.current.slickPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-[#001403] min-h-screen flex flex-col items-center justify-start p-0">
      <h1 className="text-[#00ff2f] text-4xl sm:text-5xl md:text-6xl font-bold mt-8 mb-12 font-lexend text-center">Our Projects</h1>
      <div className="relative w-full max-w-7xl px-4">
        {/* Left Arrow Button */}
        <Arrow direction="left" onClick={() => sliderRef.current.slickPrev()} />

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {projectData.map((project, index) => (
            <div key={index} className="transition-transform duration-500 cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-contain mx-auto"
                  width={project.width}
                  height={project.height}
                />
              </div>
              <h3 className="text-[#00ff2f] text-center mt-4 text-2xl sm:text-3xl font-bold">{project.title}</h3>

              {/* Description and Tech Stack Box */}
              <div className=" text-white p-6 rounded-xl mt-10 text-center">
                <p>{project.description}</p>
                <p className="mt-2 text-sm">{`Technologies Used: ${project.tech}`}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Right Arrow Button */}
        <Arrow direction="right" onClick={() => sliderRef.current.slickNext()} />
      </div>
    </div>
  );
};

export default Projects;
