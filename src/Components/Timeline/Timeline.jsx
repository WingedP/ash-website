import React from 'react';
import { Stack, HStack, useBreakpointValue, IconButton, useColorModeValue, Heading, Flex, Image, Center, Text, VStack, Box, StackDivider, useBreakpoint } from '@chakra-ui/react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { SunIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import angularIcon from '../../Assets/images/angular.svg';
import codeIcon from '../../Assets/images/code_light.svg';
import TimelineItem from '../TimelineItem/TimelineItem';

const Timeline = () => {
    const bgGradient = useColorModeValue('linear(to-l, #fcfeff, #ebf0f5)', 'linear(to-l, #13191c, #1d2629)');
    const color = useColorModeValue('purple.800', 'teal.100');
    const timelineLine = useColorModeValue('#c99aff', 'white');
    // const transformClass = useBreakpointValue(['translate(0px) !important', 'translate(-15px)', 'translate(-30px)' ]);
    const currentBreakpoint = useBreakpoint();
    const mdTimeline = 'mdTimeline';


    return (
        <>
            <Center mt={10}>
                <Flex flexDirection={'column'} w={[370, 500, 800]}>

                    <Heading pl={[5, 0, 0]} as='h4' fontSize={['sm', '', 'xl']} mb={2.5} display={'flex'} alignItems={'center'}>
                        <Image boxSize={'20px'} mr={3} src={codeIcon} />
                        <Text borderBottom='2px'>Experiences & development:</Text>
                    </Heading>

                    <VerticalTimeline className={currentBreakpoint !== 'lg' ? '' : mdTimeline} layout='1-column-left' lineColor={timelineLine}>
                        <TimelineItem />
                    </VerticalTimeline>
                </Flex>
            </Center>
        </>
    );
};

export default Timeline;