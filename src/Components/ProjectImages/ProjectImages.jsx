/* eslint-disable default-case */
import React, { useEffect, useState } from 'react';
import { useColorModeValue, useBreakpointValue, Modal, ModalOverlay, ModalContent, ModalBody, Text, Grid, Button, useDisclosure, SimpleGrid, Image, Center, IconButton, VStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from "framer-motion";
import sadFaceIcon from '../../Assets/images/sad_face.svg';
import sadFaceIconDark from '../../Assets/images/sad_face_dark.svg';

const ProjectImages = ({ project }) => {
    const myProject = project;
    const [currentImg, setCurrentImg] = useState(undefined);
    const [currentImgIndex, setCurrentImgIndex] = useState(undefined);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [imageLoading, setImageLoading] = useState(true);

    // hide left or right navigation button
    const [hideLeft, setHideLeft] = useState(false);
    const [hideRight, setHideRight] = useState(false);

    // images navigation button
    const btnLeft = useBreakpointValue({ base: '60px', md: '-160px' });
    const btnRight = useBreakpointValue({ base: '60px', md: '-160px' });
    const btnBottom = useBreakpointValue({ base: '-60px', md: '50%' });

    // grid item size
    const mobile = { w: '95%', h: '220px' };
    const web = { w: '170px', h: '120px' };
    let size = {};
    myProject?.type === 'mobile' ? size = mobile : size = web;

    // modal size
    const modalMobile = { w: [280, 340, 700], h: [400, 500, 600] };
    const modalWeb = { maxW: [350, 500, 700], h: [200, 400, 420] };
    let modalSize = {};
    myProject?.type === 'mobile' ? modalSize = modalMobile : modalSize = modalWeb;

    // sad face icon switch
    const sadFace = useColorModeValue(sadFaceIconDark, sadFaceIcon);

    // is this the correct way... ?

    const imageLoaded = () => {
        setImageLoading(false);
    };

    const closeModal = () => {
        onClose();
    };

    const openModal = (img, index) => {
        onOpen();
        setCurrentImgIndex(index);
        setCurrentImg(img);

        hideImageNavigation(index);
    };

    const goToPreviousImg = () => {
        closeModal();
        if (currentImgIndex === 0) {
            return;
        }
        let previousIndex = currentImgIndex - 1;
        let previousImg = myProject?.images?.find((img, index) => String(index) === String(previousIndex));

        hideImageNavigation(previousIndex);
        setTimeout(() => {
            openModal(previousImg, previousIndex);
        }, 250);
    };

    const goToNextImg = () => {
        closeModal();
        if (currentImgIndex === myProject?.images?.length - 1) {
            return;
        }
        let nextIndex = currentImgIndex + 1;
        let nextImg = myProject?.images?.find((img, index) => String(index) === String(nextIndex));

        hideImageNavigation(nextIndex);
        setTimeout(() => {
            openModal(nextImg, nextIndex);
        }, 250);
    };

    const hideImageNavigation = (currentIndex) => {
        const maxPrevious = 0;
        const maxNext = myProject?.images?.length - 1;

        if (currentIndex === maxPrevious) {
            setHideLeft(true);
        } else {
            setHideLeft(false);
        }

        if (currentIndex === maxNext) {
            setHideRight(true);
        } else {
            setHideRight(false);
        }
    };

    const keyDownHandler = (event) => {
        if (event.code === 'ArrowLeft') {
            goToPreviousImg();
        }
        if (event.code === 'ArrowRight') {
            goToNextImg();
        }
    };

    return (
        <>
            {/* NO IMAGES AVAILABLE :sadface: */}
            {myProject?.images?.length === 0 && (
                <VStack pt={8} pb={2}>
                    <Image src={sadFace} />
                    <Text>No image. Sorry :sadface: .</Text>
                </VStack>
            )}

            {/* IMAGES GRID */}
            {myProject?.images?.length > 0 && (
                <SimpleGrid p={[4, 4, 2]} pt={10} w={'100vw'} minChildWidth='120px' spacing='40px'>
                    {myProject?.images?.map((img, index) =>
                        <Center key={index}>
                            <Center w={size.w} h={size.h} _hover={{ cursor: 'pointer' }} pl={1} pt={1} pr={1} borderRadius={7} overflow={'hidden'} bg='#201c1c' border={'1px solid teal'}
                                onClick={() => { openModal(img, index); }}>
                                <motion.img style={{ height: '98%', objectFit: 'cover', borderRadius: '4px' }}
                                    src={img} onLoad={imageLoaded}
                                    initial={{ opacity: 0 }} animate={{ opacity: imageLoading ? 0 : 1 }}
                                    transition={{ opacity: { delay: 0.5, duration: 0.4 } }} />
                            </Center>
                        </Center>
                    )}
                </SimpleGrid>
            )}

            {/* MODAL */}
            <Modal onClose={closeModal} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent w={modalSize.w} maxW={modalSize.maxW} h={modalSize.h} ratio={4 / 3}>

                    {!hideLeft &&
                        <IconButton onKeyDown={keyDownHandler} onClick={goToPreviousImg} position={'absolute'} left={btnLeft} bottom={btnBottom} w={70} colorScheme='teal' aria-label='Call Sage' fontSize='20px' icon={<ChevronLeftIcon />} />}

                    {!hideRight &&
                        <IconButton onKeyDown={keyDownHandler} onClick={goToNextImg} position={'absolute'} right={btnRight} bottom={btnBottom} w={70} colorScheme='teal' aria-label='Call Sage' fontSize='20px' icon={<ChevronRightIcon />} />}

                    <ModalBody h={modalSize.h}>
                        <Center h={'100%'}>
                            <Center h={'100%'} bg={'#201c1c'} w={'fit-content'} borderRadius={7} pl={2} pr={2} pt={2}>
                                {/* <Image borderRadius={7} fit='cover' h={'100%'} src={currentImg} /> */}
                                <motion.img style={{ height: '100%', objectFit: 'cover', borderRadius: '7px' }}
                                    src={currentImg} onLoad={imageLoaded}
                                    initial={{ opacity: 0 }} animate={{ opacity: imageLoading ? 0 : 1 }}
                                    transition={{ opacity: { delay: 0.2, duration: 0.25 } }} />
                            </Center>
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProjectImages;
