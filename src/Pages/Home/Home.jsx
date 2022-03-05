import React from 'react';
import Timeline from '../../Components/Timeline/Timeline';
import { motion } from 'framer-motion';
import Information from '../../Components/Information/Information';

const Home = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        <Information />
        <Timeline />
      </motion.div>
    </>
  );
};

export default Home;