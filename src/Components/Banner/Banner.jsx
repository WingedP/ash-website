import React from 'react';
import { useColorModeValue, Box, Image, Flex, Center } from '@chakra-ui/react';
import { motion } from "framer-motion";
import wavesIcon from '../../Assets/images/waves.svg';
import waves2Icon from '../../Assets/images/waves2.svg';
import dog from '../../Assets/images/dog.png';
import workingDog from '../../Assets/images/dog_work.png';
import { useLocation } from "react-router-dom";

const Banner = () => {
    const location = useLocation().pathname;
    const theDog = location === '/works' ? workingDog : dog;
    const glowColor = useColorModeValue('glowLight', 'glowDark');
    const showSingleProject = location.includes('pj_') ? true : false;
    const waves = useColorModeValue(wavesIcon, waves2Icon);

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                {!showSingleProject && <Flex position={'relative'} h={'50vh'} w={'100%'} justifyContent={'center'}>
                    <Center overflow={'hidden'} position={'relative'} transform={'scale(0.8)'} borderRadius='full' border={'1px solid teal'} w={['300px', '', '400px']} h={['300px', '', '400px']}>

                        <motion.div key={waves} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                            <Image position={'absolute'} left='0px' bottom='-100px' transform={'scale(1.3)'} borderRadius={'full'} boxSize={'120%'} src={waves} />
                        </motion.div>

                        <Box position={'absolute'} zIndex={2} bottom={'-120px'}>
                            <motion.div key={theDog}
                                initial={{ opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                                exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>

                                <Image boxSize={'360px'} src={theDog} />
                            </motion.div>
                        </Box>
                    </Center>
                    <Box className={glowColor}></Box>
                </Flex>}
            </motion.div>
        </>
    );
};

export default Banner;