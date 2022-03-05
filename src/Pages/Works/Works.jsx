import React from 'react';
import Projects from '../../Assets/db/projects.json';
import LayoutGrid from '../../Components/LayoutGrid/LayoutGrid';
import { motion } from 'framer-motion';

const Works = () => {
  const [works, setWorks] = React.useState(Projects);

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        <LayoutGrid works={works} />
      </motion.div>
    </>
  );
};

export default Works;