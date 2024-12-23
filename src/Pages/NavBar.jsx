// import React, { useState } from 'react';
// import { useScroll, useMotionValueEvent } from 'framer-motion';

// const NavBar = () => {
//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   const { scrollYProgress } = useScroll();
//   const [visible, setVisible] = useState(true);

//   useMotionValueEvent(scrollYProgress, 'change', (current) => {
//     if (typeof current === 'number') {
//       const direction = current - scrollYProgress.getPrevious();
//       if (scrollYProgress.get() < 0.05) {
//         setVisible(true);
//       } else {
//         setVisible(direction < 0);
//       }
//     }
//   });

//   return (
//     <div
//       className={`fixed z-50 top-4 right-20 bg-transparent transition-transform duration-300 ${
//     visible ? 'translate-y-0' : '-translate-y-full'
//   }`}
//     >
//       <div className="w-full mt-2 flex justify-end gap-10 p-4 bg-[#031306]  shadow-[0_0_1px_rgb(0,255,47)] text-xl text-white font-extralight backdrop-blur-lg rounded-2xl">
//         {navItems.map((item, index) => (
//           <a
//             key={index}
//             href={item.href}
//             className="relative group hover:transition-all"
//           >
//             {item.name}
//             <span
//               className="absolute left-0 bottom-0 w-0 h-[3px] rounded-xl bg-[rgb(0,255,47)] transition-all duration-300 group-hover:w-full"
//             ></span>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NavBar;
import React, { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const NavBar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.1) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <div
      className={`fixed z-50 top-4 right-20 bg-transparent transition-transform duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-[200%]'
      }`}
    >
      <div className="mt-2 flex justify-end gap-10 p-4 bg-[#031306c2] shadow-[0_0_1px_rgb(0,255,47)] text-xl text-white font-light backdrop-blur-sm rounded-2xl">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="relative group hover:transition-all"
          >
            {item.name}
            <span
              className="absolute left-0 bottom-0 w-0 h-[3px] rounded-xl bg-[rgb(0,255,47)] transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
