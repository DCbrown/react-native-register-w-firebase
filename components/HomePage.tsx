import React from 'react';
import { View } from 'react-native';
// import Header from './Header';
import ProjectCard from './ProjectCard';
import BottomNav from './BottomNav';

const HomePage = () => {
  return (
    <>
      {/* <Header /> */}
      <ProjectCard />
      <BottomNav />
    </>
  );
};

export default HomePage;
