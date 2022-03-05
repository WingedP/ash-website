import React from 'react';
import { useColorModeValue, Stack, Badge, List, Text, ListIcon, ListItem, Grid, Box, Image, GridItem, Flex, Center, IconButton } from '@chakra-ui/react';
import { ArrowUpDownIcon, InfoOutlineIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from "framer-motion";

const ProjectDescription = ({ project }) => {

    const myProject = project;
    const bgGradient = useColorModeValue('linear(to-l, #fcfeff, #ebf0f5)', 'linear(to-l, #13191c, #1d2629)');
    const color = useColorModeValue('purple.800', 'teal.50');
    // const color = useColorModeValue('purple.800', 'teal.100');
    const gradientColorViolet = {
        bgGradient: 'linear(to-l, rgb(221, 153, 255) 20%, rgb(128, 159, 255))',
        bgClip: 'text',
    };
    return (
        <>
            <Box bgGradient={bgGradient} mt={3} w={'100%'} boxShadow='xl' p={7} borderRadius={'7px'} fontSize={20} color={color}>
                {/* PROJECT'S NAME: */}
                <ProjectName myProject={myProject} gradientColorViolet={gradientColorViolet} />

                {/* PROJECT'S STACKS: */}
                <ProjectStacks myProject={myProject} />

                {/* PROJECT'S INFO: */}
                <ProjectInfo myProject={myProject} gradientColorViolet={gradientColorViolet} />
            </Box>

            <Center>
                <FadeInWhenVisible>
                    <ArrowUpDownIcon mt={4} boxSize={7} />
                </FadeInWhenVisible>
            </Center>
        </>
    );
};

export default ProjectDescription;

const ProjectInfo = ({ myProject, gradientColorViolet }) => {
    return (<>
        <List spacing={5}>
            {Object.keys(myProject?.desc).map((keyName, i) => (
                <ListItem key={i}>
                    <Text bgGradient={gradientColorViolet.bgGradient} bgClip={gradientColorViolet.bgClip} fontSize='md'>
                        <ListIcon as={InfoOutlineIcon} color='teal.300' />
                        {myProject?.desc[keyName][0]} :
                    </Text>
                    <Box fontSize='md'>
                        {
                            myProject?.desc[keyName][0] === 'Responsibilities' &&
                            myProject?.desc[keyName][1].map((el, index) => <Text key={index}>{el}</Text>)
                        }
                        {
                            myProject?.desc[keyName][0] !== 'Responsibilities' &&
                            myProject?.desc[keyName][1]
                        }
                    </Box>
                </ListItem>
            ))}
        </List>
    </>);
};

const ProjectName = ({ myProject, gradientColorViolet }) => {
    return (<>
        <Center>
            <ChevronLeftIcon />
            <Text bgGradient={gradientColorViolet.bgGradient} bgClip={gradientColorViolet.bgClip}>
                {myProject?.name}
                /</Text>
            <ChevronRightIcon />
        </Center>
    </>);
};

const ProjectStacks = ({ myProject }) => {
    return (<>
        <Stack direction='row' pt={5} pb={5}>
            {myProject?.stacks.map((el, index) => <Badge key={index} colorScheme={el.color}>{el.name}</Badge>)}
        </Stack>
    </>);
};

const FadeInWhenVisible = ({ children }) => {
    const fadeVariant = {
        visible: { opacity: 0.9, scale: 1 },
        hidden: { opacity: 0.2, scale: 0.2 }
    };

    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.3 }}
            variants={fadeVariant}>
            {children}
        </motion.div>
    );
};