/* eslint-disable no-unused-vars */
import React from 'react';
import { Spacer, Image, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Link as RouteLink } from 'react-router-dom';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';

const Navbar = () => {
    const bgGradient = useColorModeValue('linear(to-l, #fcfeff, #ebf0f5)', 'linear(to-l, #13191c, #1d2629)');
    const bg = useColorModeValue('rgba(255, 255, 255, 0.3)', 'rgba(26,32,44,0.08)');
    const cvLink = 'https://drive.google.com/file/d/1zigpX4JQ4lQz46THhDF7Pdhnbw0J-IJ3/view?usp=sharing';
    const linksList = [
        { name: 'Home', path: '/home', as: 'RouteLink' },
        { name: 'Works', path: '/works', as: 'RouteLink' },
        { name: 'Cv', as: '', cvLink: 'https://drive.google.com/file/d/1zigpX4JQ4lQz46THhDF7Pdhnbw0J-IJ3/view?usp=sharing' },
    ];

    return (
        <Center minH={'50px'} zIndex={4} position={'relative'}>
            <Flex position={'fixed'} backgroundColor={bg} backdropFilter='blur(5px)' w={[320, 500, 800]}>
                <Center>
                    <Heading as={RouteLink} to='/home' size='md'>Ash.</Heading>
                </Center>

                <Spacer />

                <Center>
                    {linksList.map((link, i) => <LinkItem link={link} key={i} />)}
                    <ThemeToggleButton />
                </Center>
            </Flex>
        </Center>
    );
};

export default Navbar;

const LinkItem = ({ link }) => {
    const navLink = link;
    const gradientColorGreen = {
        bgGradient: 'linear(to-r, teal.400, green.300)',
        bgClip: 'text',
    };
    const gradientColorViolet = {
        bgGradient: 'linear(to-l, rgb(221, 153, 255) 20%, rgb(128, 159, 255))',
        bgClip: 'text',
    };
    const colorGradient = useColorModeValue(gradientColorGreen, gradientColorViolet);

    return (
        <Link _hover={colorGradient} isExternal={navLink?.cvLink ? true : ''} as={!navLink?.cvLink ? RouteLink : ''} href={navLink?.cvLink} to={navLink?.path} m={'5px'}>{navLink?.name}</Link>
    );
};
