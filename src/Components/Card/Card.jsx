import React, { useState, useEffect } from 'react';
import { useColorModeValue, Center, Box, VStack, Button, HStack, Image, Flex, Badge, Text } from "@chakra-ui/react";
import puppyred from '../../Assets/images/puppyred.png';
import gitIconDark from '../../Assets/images/git_4.svg';
import { SunIcon, LinkIcon, LockIcon, MoonIcon } from '@chakra-ui/icons';
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Card = ({ project, index }) => {
    const navigate = useNavigate();
    const bgGradient = useColorModeValue('linear(to-l, #fcfeff, #ebf0f5)', 'linear(to-l, #13191c, #1d2629)');
    const mobile = { w: '200px', h: '300px' };
    const web = { w: '260px', h: '210px' };
    let size = {};
    project?.type === 'mobile' ? size = mobile : size = web;

    return (<>
        <motion.div whileHover={{ rotate: 2.3, transition: { duration: 0.2 } }}>

            <Center key={index} w={size.w} h={size.h} _hover={{ cursor: 'pointer' }}
                style={{ transform: project?.type === 'web' ? 'translateY(58px)' : '' }}
                onClick={() => navigate(`${project?.path}`)}
                position={'relative'} bg={'white'} zIndex={1}
                borderTopRadius={7} borderWidth="1px">

                <Box className='zzz'></Box>

                <Center bg={'#E2E8F0'} flexDirection={'column'} borderRadius={7} h={'93%'} w={'93%'} overflow='hidden' boxShadow='base'>
                    {project?.thumbnail?.length > 0 && <Image fit='cover' h={'100%'} w={'100%'} borderRadius="md" boxShadow='base' src={project?.thumbnail} draggable="false" />}
                    {project?.thumbnail?.length === 0 &&
                        <LockIcon w={10} h={10} color='gray.500' />
                    }
                </Center>

                {/* <VStack position={'absolute'} left={'-60px'} top={5}>
                    <Button w={45} h={45}>
                        <Image w={40} h={40} src={gitIconDark} />
                    </Button>
                    <Button w={45} h={45}>
                        <LinkIcon />
                    </Button>
                </VStack> */}
            </Center>

        </motion.div>
    </>);
};

export default Card;
