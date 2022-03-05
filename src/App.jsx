import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Home from './Pages/Home/Home';
import Works from './Pages/Works/Works';
import Work from './Pages/Work/Work';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Center } from '@chakra-ui/react';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Banner />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<Navigate to='/home' />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/works' element={<Works />} />
          <Route path='/works/:name' element={<Work />} />
        </Routes>
      </AnimatePresence>
      <Center color={'gray.600'} fontSize={'sm'} p={5} pt={5} pr={7}>© 2022 Ash Nguyen. All Rights Reserved.</Center>
    </>
  );
};

export default App;
