
import { AnimatePresence, motion } from 'framer-motion';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  // const bgColorScheme = useColorModeValue('linear(to-l, #fcfeff, #ebf0f5)', 'linear(to-l, #13191c, #1d2629)');
  const bgColorScheme = useColorModeValue('purple', 'orange');

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div style={{ display: 'inline-block' }} key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.2 }}>

        <IconButton m={'5px'} aria-label="Toggle theme"
        colorScheme={bgColorScheme}
        // bgGradient={bgColorScheme}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)} onClick={toggleColorMode}>
        </IconButton>

      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;