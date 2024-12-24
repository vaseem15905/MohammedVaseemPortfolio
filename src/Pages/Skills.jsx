import React from 'react';

const RightCard = ({ title, sub, ri }) => {
  return (
    <div className='mt-6 sm:mt-0 sm:mb-12'>
      <div className='flex items-center flex-col sm:flex-row'>
        <div className="flex justify-end w-full mx-auto items-center">
          <div className="w-full sm:w-1/2 sm:pl-8">
            <div
              data-aos='fade-left'
              data-aos-duration='1200'
              className="border-[#00ff2f] border-2 text-white p-4 rounded shadow group hover:border-[#00ff2f] hover:text-[#00ff2f] cursor-pointer ease-in duration-1500"
            >
              <h3 className="font-[700] mb-3 group-hover:font-[600] text-sm sm:text-xl">{title}</h3>
              <p className="text-xs sm:text-[15px] group-hover:font-[500] leading-6 sm:leading-7">{sub}</p>
            </div>
          </div>
        </div>

        <div className="rounded-full border-[#00ff2f] border-2 w-8 h-8 sm:w-10 sm:h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
          <figure>
            <i className={ri}></i>
          </figure>
        </div>
      </div>
    </div>
  );
};

const LeftCard = ({ title, sub, ri }) => {
  return (
    <div className='mt-6 sm:mt-0 sm:mb-12'>
      <div className='flex items-center flex-col sm:flex-row'>
        <div className="flex justify-start w-full mx-auto items-center">
          <div className="w-full sm:w-1/2 sm:pr-8">
            <div
              data-aos='fade-right'
              data-aos-duration='1200'
              className="border-[#00ff2f] border-2 text-white p-4 rounded shadow group hover:border-[#00ff2f] hover:text-[#00ff2f] cursor-pointer ease-in duration-1500"
            >
              <h3 className="font-[700] mb-3 group-hover:font-[600] text-sm sm:text-xl">{title}</h3>
              <p className="text-xs sm:text-[15px] group-hover:font-[500] leading-6 sm:leading-7">{sub}</p>
            </div>
          </div>
        </div>

        <div className="rounded-full border-[#00ff2f] border-2 w-8 h-8 sm:w-10 sm:h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
          <figure>
            <i className={ri}></i>
          </figure>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id='skills'>
      <div className="container lg:pt-11">
        <div className="text-center">
          <div
            data-aos='zoom-in'
            data-aos-duration='1000'
            className="font-[800] text-[1.5rem] sm:text-[1.9rem] md:text-[2.5rem] text-[#00ff2f] hover:text-light-for-light"
          >
            Areas Of Expertise
          </div>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-[#34495E] antialiased text-xs sm:text-sm font-semibold">
              <div className="hidden absolute w-1 sm:block bg-[#00ff2f] h-full left-1/2 transform -translate-x-1/2"></div>
              {/* Left and Right Card Layout */}
              <LeftCard
                title="Frontend Development"
                sub="HTML | CSS | React.js | Vite.js | Tailwind CSS | Tkinter"
                ri="ri-computer-line"
              />
              <RightCard
                title="Backend Development"
                sub="JavaScript | Python | C++ | Java"
                ri="ri-database-2-fill"
              />
              <LeftCard
                title="Database"
                sub="Firestore | MongoDB | MySQL | SQLite"
                ri="ri-database-line"
              />
              <RightCard
                title="Tools"
                sub="Firebase | Cloudflare | GitHub"
                ri="ri-tools-fill"
              />
              <LeftCard
                title="Others"
                sub="Problem Solving | Leetcode | HackerRank"
                ri="ri-lightbulb-flash-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
