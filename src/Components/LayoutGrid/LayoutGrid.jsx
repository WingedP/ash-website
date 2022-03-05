import React, { useContext, useState } from 'react';
import { Center, Popover, PopoverTrigger, Link, PopoverContent, PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverAnchor, PopoverBody, Text, Box, VStack, HStack, Image, IconButton, Button, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import Card from '../Card/Card';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from "framer-motion";
import gitIconDark from '../../Assets/images/git_4.svg';
import ProjectLinks from '../ProjectLinks/ProjectLinks';
import linkIcon from '../../Assets/images/link.svg';

const cardVariants = {
    offscreen: {
        y: 30,
        // opacity: 0,
        rotate: -4,
    },
    onscreen: {
        y: 10,
        opacity: 1,
        rotate: -3,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const LayoutGrid = ({ works }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [projects, setProjects] = useState(works);
    const bgGradient = useColorModeValue('linear(to-l, #edf2f7 0%, #edf2f7 74%)', 'linear(to-l, #2d3436 0%, #303634 74%)');
    const bg = useColorModeValue('#edf2f7', '#303634');
    const boxShadow = useColorModeValue('0 4px 2px -2px rgb(0 0 0 / 16%)', '0 6.3px 5px -6px rgb(184 155 230)');

    return (<>
        <Center overflow={'hidden'}>
            <SimpleGrid pb={3} w={[370, 500, 900]} columns={[1, 1, 2]} spacing='40px'>
                {projects.map((project, index) =>
                    <motion.div key={project.id} layoutId={project.id} onClick={() => setSelectedId(project.id)}>

                        <Box h={'300px'} key={project.id} display={'flex'} justifyContent={'center'}>
                            <Center key={project.id} boxShadow={boxShadow}
                                pl='1' position={'relative'} w={'80%'} overflow={'hidden'} borderRadius={11}>
                                <motion.div key={project.id} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
                                    <motion.div key={project.id} variants={cardVariants}>
                                        <Card key={project.id} index={index} project={project} />
                                    </motion.div>
                                </motion.div>

                                <Box className='decoration' bgGradient={bgGradient} zIndex={-2} borderRadius={7} width={'96%'} height={'170px'} position={'absolute'} left={2} bottom={-10}></Box>
                                <Box className='decoration2' bg={bg} zIndex={-2} borderRadius={7} width={'50%'} height={'50%'} position={'absolute'} left={0} bottom={-10}></Box>
                                <Center className='projectName' bg={bg}>
                                    <ProjectLinks project={project} />
                                    <ChevronLeftIcon />
                                    <Text bgGradient='linear(to-l, rgb(221, 153, 255) 20%, rgb(128, 159, 255))' bgClip='text'>{project.name} /</Text>
                                    <ChevronRightIcon />
                                </Center>
                            </Center>
                        </Box>
                    </motion.div>
                )}
            </SimpleGrid>
        </Center>
    </>
    );
};

export default LayoutGrid;
