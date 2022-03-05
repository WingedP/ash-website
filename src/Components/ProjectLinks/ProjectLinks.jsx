import React, { useState, useEffect } from 'react';
import { Popover, PopoverTrigger, Link, PopoverContent, PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverAnchor, PopoverBody, Text, Box, VStack, HStack, Image, IconButton, Button, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import puppyred from '../../Assets/images/puppyred.png';
import gitIconDark from '../../Assets/images/git_4.svg';
import { SunIcon, LinkIcon, LockIcon, MoonIcon } from '@chakra-ui/icons';
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import linkIcon from '../../Assets/images/link.svg';

const LinkItem = ({ link, type, icon }) => {
    const bg = useColorModeValue('#E2E8F0', '#4A5568');

    return <>
        {link.length === 0 && <Popover placement='top-start'>
            <PopoverTrigger>
                <Link className='projectLink' bg={bg} >
                    <Image boxSize={'13px'} maxW={'13px'} src={icon} /> </Link>
            </PopoverTrigger>

            <PopoverContent w={'fit-content'}>
                <PopoverArrow />
                <PopoverBody>
                    {(type === 'code') && <Text fontSize={'sm'}>Confidental source code, sorry.</Text>}
                    {(type === 'live') && <Text fontSize={'sm'}>Confidental link, sorry.</Text>}
                </PopoverBody>
            </PopoverContent>
        </Popover>}

        {link.length > 0 && <Link className='projectLink' isExternal href={link} bg={bg}>
            <Image boxSize={'13px'} maxW={'13px'} src={icon} /> </Link>}
    </>;
};

const ProjectLinks = ({ project, index }) => {

    return (<>
        <VStack>
            <LinkItem link={project.links[0]} type={'code'} icon={gitIconDark} />
            <LinkItem link={project.links[1]} type={'live'} icon={linkIcon} />
        </VStack>
    </>);
};

export default ProjectLinks;


// import React, { useState, useEffect } from 'react';
// import { Popover, PopoverTrigger, Link, PopoverContent, PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverAnchor, PopoverBody, Text, Box, VStack, HStack, Image, IconButton, Button, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
// import puppyred from '../../Assets/images/puppyred.png';
// import gitIconDark from '../../Assets/images/git_4.svg';
// import { SunIcon, LinkIcon, LockIcon, MoonIcon } from '@chakra-ui/icons';
// import { AnimatePresence } from 'framer-motion';
// import { motion } from "framer-motion";
// import { useNavigate } from 'react-router-dom';
// import linkIcon from '../../Assets/images/link.svg';

// const ProjectLinks = ({ project, index }) => {
//     const bg = useColorModeValue('#E2E8F0', '#4A5568');

//     return (<>
//         <VStack>
//             <Popover placement='top-start'>
//                 {project.links?.map((el, i) => <div key={i}>
//                     <PopoverTrigger>
//                        {}

//                     </PopoverTrigger>

//                     <PopoverContent w={'fit-content'}>
//                         <PopoverArrow />
//                         <PopoverBody>
//                             {(i === 0 && el?.sourceCode?.length === 0) && <Text fontSize={'sm'}>Confidental source code, sorry.</Text>}
//                             {(i === 1 && el?.live?.length === 0) && <Text fontSize={'sm'}>Confidental link, sorry.</Text>}
//                         </PopoverBody>
//                     </PopoverContent>
//                 </div>)}
//             </Popover>

//             {/* <Popover placement='top-start'>
//                     <PopoverTrigger>
//                         <Link isExternal href={i === 0 ? link.sourceCode : link.live}
//                             display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'full'}
//                             bg={bg} w={'30px'} h={17}>
//                             <Image boxSize={'13px'} maxW={'13px'} src={i === 0 ? gitIconDark : linkIcon} /> </Link>
//                     </PopoverTrigger>

//                     <PopoverContent w={'fit-content'}>
//                         <PopoverArrow />
//                         <PopoverBody>
//                             {(i === 0 && link?.sourceCode?.length === 0) && <Text fontSize={'sm'}>Confidental source code, sorry.</Text>}
//                             {(i === 1 && link?.live?.length === 0) && <Text fontSize={'sm'}>Confidental link, sorry.</Text>}
//                         </PopoverBody>
//                     </PopoverContent>
//                 </Popover> */}
//         </VStack>
//     </>);
// };

// export default ProjectLinks;
