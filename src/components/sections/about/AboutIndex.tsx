import React, { useEffect, useState } from 'react';

const AboutPage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const titles = [
    'Software Engineer', 
    'Software Developer', 
    'Web Developer', 
    'Mobile App Developer', 
    'Technology Analyst', 
    'Human Being'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFade(true);
      }, 600); 
    }, 4000);

    return () => clearInterval(interval);
  })
  
  return (
    <div className='h-[45vh] sm:h-[60vh] md:h-[75vh] flex flex-col lg:flex-row lg:justify-between px-6'>
        <div className='flex flex-col items-center justify-center lg:items-start mt-10'>
          <div className="flex flex-col">
            <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-black'>
              Hello! I&apos;m <span className="text-blue-600">Haikal</span>.
            </h2>
          </div>
          <div className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl flex flex-row gap-2'>
            A
            <h2 className={`font-bold mb-4 sm:mb-6 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              {titles[index]}
            </h2>
          </div>
        </div>
        <div className='flex items-center justify-center pr-0 sm:pr-5 md:pr-5 lg:pr-15 xl:pr-20'>
          <img
            src={`/images/about.jpg`}
            height={400}
            width={400}
            alt="Company logo"
            className="mt-6 rounded-full border-2 border-blue-600 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] object-cover"            />
        </div>
    </div>
  );
};

export default AboutPage;
