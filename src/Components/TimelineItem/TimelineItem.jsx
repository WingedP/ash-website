import React from 'react';
import { Stack, HStack, Link, List, ListItem, IconButton, useColorModeValue, Heading, Flex, Image, Center, Text, VStack, Box, StackDivider } from '@chakra-ui/react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { SunIcon, ExternalLinkIcon, MinusIcon } from '@chakra-ui/icons';
import angularIcon from '../../Assets/images/angular.svg';
import reactIcon from '../../Assets/images/react.svg';
import codeIcon from '../../Assets/images/code_light.svg';
import timeline from '../../Assets/db/timeline.json';

const TimelineItem = () => {
    const timelineItem = timeline;
    const bgGradient = useColorModeValue('linear(to-l, #fcfeff, #ebf0f5)', 'linear(to-l, #13191c, #1d2629)');
    const color = useColorModeValue('purple.800', 'teal.100');
    const timelineLine = useColorModeValue('rgb(132 161 249)', 'white');
    const returnIcon = (index) => {
        if (index === 0) {
            return angularIcon;
        }

        if (index === 1) {
            return reactIcon;
        }

        if (index === 2) {
            return '';
        }
    };

    const returnBg = (index) => {
        switch (index) {
            case 0:
                return '#e69595';
            case 1:
                return '#b3a0d9';
            case 2:
                return '#caf0c0';
            default:
                return 'white';
        }
    };

    return (
        <>
            {timelineItem.map((item, i) =>
                <VerticalTimelineElement key={i} className="vertical-timeline-element--work"
                    contentStyle={{}} contentArrowStyle={{ borderRight: '#1d2629' }}
                    date={item.time}
                    iconStyle={{ background: returnBg(i), color: '#fff' }}
                    icon={i === 0 || i === 1 ? (<Image borderRadius='full' p={1} boxSize={'100%'} src={returnIcon(i)} />)
                        : <MinusIcon />}>

                    <Heading as='h4' size='md' bgGradient='linear(to-l, rgb(221, 153, 255) 20%, rgb(128, 159, 255))' bgClip='text'>{item.position}</Heading>

                    {item.company.length > 0 && (<Flex alignItems={'center'} mt={3} mb={2}>
                        <Text m='0px !important' fontSize='l' bgGradient='linear(to-r, teal.300, green.200)' bgClip='text'>{item.company}</Text>
                        <Link href={item.link} isExternal transform={'translateY(-2.5px)'} pl={1}>
                            <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Flex>)}

                    <List spacing={1}>
                        {item.jobs.map((el, i) => <ListItem fontSize={['sm', 'md', 'md']} key={i}>{el}</ListItem>)}
                    </List>
                </VerticalTimelineElement>
            )}
        </>
    );
};

export default TimelineItem;