import React from 'react';
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Stack, useColorModeValue, Button, Heading, Flex, Center, Image, Text, VStack, Box, StackDivider } from '@chakra-ui/react';
import Typewriter from "typewriter-effect";
import heartIcon from '../../Assets/images/heart.svg';
import codeLightIcon from '../../Assets/images/code_light.svg';
import { useNavigate } from 'react-router-dom';

const Section = ({ title, desc, index, ...rest }) => {
    const icon = useColorModeValue(codeLightIcon, codeLightIcon);
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
            <Box {...rest} key={index}>
                {!title.includes('programming')
                    ? <Heading pb={2.5} fontSize={['sm', '', 'xl']} display={'flex'} alignItems={'center'}>
                        <Image boxSize={'20px'} mr={3} src={icon} />
                        <Text borderBottom='2px' >{title}</Text>
                    </Heading>

                    : <Heading pb={2.5} fontSize={['sm', '', 'xl']} display={'flex'} alignItems={'center'}>
                        <Image boxSize={'20px'} mr={3} src={icon} />
                        <Text borderBottom='2px'>What I</Text>
                        <Image boxSize={'30px'} 
                        filter={'drop-shadow(0.5px 1px 3.2px rgb(221 153 255))'}
                        // boxShadow={'1px 1px 10px rgb(221 153 255)'} 
                        borderRadius={'full'} ml={1.5} mr={1.5} src={heartIcon} />
                        <Text borderBottom='2px'>about programming:</Text>
                    </Heading>
                }

                {desc.map((item, index) => <Text key={index} fontSize={['sm', 'md', 'md']}>{item}</Text>)}
            </Box>
        </motion.div>

    );
};

const Information = () => {
    const navigate = useNavigate();
    const bgGradient = useColorModeValue('linear(to-l, #fcfeff, #ebf0f5)', 'linear(to-l, #13191c, #1d2629)');
    const color = useColorModeValue('purple.800', 'teal.100');
    const gradientColorGreen = {
        bgGradient: 'linear(to-r, teal.400, green.300)',
    };
    const gradientColorViolet = {
        bgGradient: 'linear(to-l, rgb(221, 153, 255) 20%, rgb(128, 159, 255))',
    };
    const sections = [
        {
            header: 'Skills:',
            desc: [
                'Basics: Html, Javascript, CSS, SCSS',
                'Frameworks & states management: Angular, Ionic/Angular, ReactJS, Redux & Redux Toolkit',
                'Styling: Bootstrap, Angular Material, MUI, Chakra UI, Framer Motion',
                'Back-end: NodeJS, MongoDB, MySQL (learning) ',
            ],
        },

        {
            header: 'What I <3 about programming:',
            desc: [
                'First time pushing a new feature',
                'Refactor codes and make reusable functions & components',
                'Comments on codes',
                'App that runs fast!',
            ],
        },

        {
            header: 'Hobbies:',
            desc: [
                'English as language~ reading, writing...',
                'Hangout with friends & discover new coffeeshops',
                '(Quarantine) cooking',
                'Smartphone photography for dumb photographer',
            ],
        },
    ];

    return (<>
        <Center>
            <Flex flexDirection={'column'} w={[320, 500, 800]}>
                <Text bgGradient={gradientColorViolet.bgGradient} bgClip='text' fontSize='6xl' fontWeight='extrabold'>
                    Hi~ I'm Nhan Nguyen!
                </Text>

                <Box bgGradient={bgGradient} w={'100%'} mb={'20px'} boxShadow='xl' h={['160px', '130px', '130px']} p={7} borderRadius={'7px'} fontSize={20} color={color}>
                    <Typewriter onInit={(typewriter) => {
                        typewriter.changeDelay(40)
                            .typeString("Full name: <strong className={stronk}>Nguyễn Trọng Nhân</strong>. You can call me Nhân, or Ash.<br />")
                            .pauseFor(600)
                            .typeString("A web developer, 2<sup>nd</sup> year.")
                            .start();
                    }} />
                </Box>

                <Stack spacing={12} mt={10}>
                    {sections.map((section, index) => <Section key={index} title={section.header} desc={section.desc} index={index} />)}
                </Stack>
            </Flex>
        </Center>

        <Center mt={12} mb={6}>
            <Button
                onClick={() => { window.scrollTo(0, 0); navigate('/works'); }}
                _hover={gradientColorGreen} bgGradient={gradientColorViolet.bgGradient} colorScheme='teal' size='lg' w={200}>
                Some of my works!
            </Button>
        </Center>
    </>);
};

export default Information;