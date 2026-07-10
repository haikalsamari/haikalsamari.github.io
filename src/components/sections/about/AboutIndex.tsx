import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';

const AboutPage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const titles = [
    'Software Engineer',
    'Software Developer',
    'Java Developer',
    'Prompt Engineer',
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
  }, [titles.length])

  return (
    <div className='h-[45vh] pt-20 sm:h-[45vh] sm:pt-15 md:h-[70vh] md:pt-15 flex flex-col lg:flex-row lg:justify-between px-6'>
        <div className='motion-safe:animate-fadeInUp flex flex-col items-center justify-center lg:items-start'>
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
          <p className="max-w-md text-center lg:text-left text-gray-500 text-sm">
            I build software across web, mobile, and cloud.
          </p>
          <div className="flex flex-row gap-3 mt-6">
            <Button asChild>
              <a href="https://github.com/haikalsamari" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-lg" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://www.linkedin.com/in/haikalsamari" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
        {/* <div className='relative flex items-center justify-center pr-0 sm:pr-5 md:pr-5 lg:pr-15 xl:pr-20'>
          <div className="absolute -z-10 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[330px] md:h-[330px] lg:w-[380px] lg:h-[380px] rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-30 blur-3xl" />
          <img
            src={`/images/about.jpg`}
            height={400}
            width={400}
            alt="Company logo"
            className="mt-6 rounded-full border-2 border-blue-600 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] object-cover"            />
        </div> */}
    </div>
  );
};

export default AboutPage;
