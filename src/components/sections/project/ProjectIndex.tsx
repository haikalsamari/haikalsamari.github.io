import React from 'react';
import Project from '@/components/sections/project/components/Project';

const ProjectIndex: React.FC = () => {
  return (
    <div className='px-4'>
      <h1 className="flex items-center gap-4 text-xl sm:text-2xl font-bold text-black">
        <span>Projects</span>
        <span className="flex-1 h-px bg-black/20" />
      </h1>
      <Project></Project>
    </div>
  );
};

export default ProjectIndex;