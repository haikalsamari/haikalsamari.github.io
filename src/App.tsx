import React from 'react';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import Section from '@/components/layout/Section';
import About from '@/components/sections/about/AboutIndex';
import Experience from '@/components/sections/experience/ExperienceIndex';
import Project from '@/components/sections/project/ProjectIndex';
import Stacks from '@/components/sections/stack/StackIndex';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Section>
          <About />
        </Section>

        <Section className="mt-20">
          <Experience />
        </Section>

        <Section className="mt-20">
          <Project />
        </Section>

        <Section className="mt-20">
          <Stacks />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default App;
