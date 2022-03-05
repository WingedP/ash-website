import { extendTheme } from '@chakra-ui/react';
import { LinkStyles as Link } from './Components/linkStyles';
import { TextStyles as Text } from './Components/textStyles';

export const CustomTheme = extendTheme({
    styles: {
        global: (props) => ({
            'html, body': {},
            a: {},
            strong: {
                bgGradient: 'linear(to-r, teal.400, green.300)',
                bgClip: 'text'
            },
            '.decoration': {
                position: 'absolute',
                transform: 'rotate(-7deg)',
                boxShadow: 'rgb(0 0 0 / 23%) 0px 1px 4px'
            },
            'decoration2': {
                boxShadow: 'rgb(0 0 0 / 23%) 0px 1px 4px'
            },
            '.projectName': {
                transform: 'translate(-30px)', width: '210px',
                fontSize: 'xl', borderRadius: '7', position: 'absolute', left: '10', p: '2', bottom: '0',
            },
            '.projectLink': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 'full',
                w: '30px',
                h: '17px',
            },
            '.vertical-timeline': {
                transform: 'translate(0px)',
                pb: '0px',
                mb: '20px',
            },
            '.mdTimeline': {
                transform: 'translate(-30px)',
            },
            '.vertical-timeline-element-content': {
                boxShadow: 'sm',
                bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
                pb: '0.5px',
            },
            '.vertical-timeline-element': {
                mt: '40px',
                mb: '40px',
                mr: '40px',
                color: props.colorMode === 'dark' ? 'teal.50' : 'purple.800',
            },
            '.vertical-timeline-element-icon': {
                border: '2px solid white',
                left: '-1px',
                boxShadow: props.colorMode === 'dark' ? '1px 1px 10px rgb(221 153 255) !important' : '0 0 0 1.5px #c99aff, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 1px rgb(0 0 0 / 5%)',
            },
            '.vertical-timeline::before': {
                width: '2px'
            },
            '.glowDark': {
                position: 'absolute',
                zIndex: '-2',
                bottom: '-120px',
                right: '35vw',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                bg: 'transparent',
                boxShadow: '0 0 60px 30px #fff, 0 0 100px 60px #f0f, 0 0 140px 90px #0ff'
            },
            '.glowLight': {
                position: 'absolute',
                zIndex: '-2',
                bottom: '-120px',
                right: '35vw',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                bg: 'transparent',
                boxShadow: '0 0 60px 30px #fff, 0 0 100px 60px #85ffc8, 0 0 140px 90px #feffe6'
            },
            '.zzz': {
                position: 'absolute',
                bg: 'transparent',
                width: '115px',
                height: '50px',
                zIndex: 44,
                transform: 'rotate(3deg)',
                boxShadow: '30px -1px 30px black',
                bottom: '10px',
                left: '-15px'
            },
        }),
    },
    components: {
        Link,
        Text,
    },
});
