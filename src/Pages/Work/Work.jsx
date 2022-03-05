import React from 'react';
import Projects from '../../Assets/db/projects.json';
import LayoutGrid from '../../Components/LayoutGrid/LayoutGrid';
import { motion } from 'framer-motion';
import ProjectDescription from '../../Components/ProjectDescription/ProjectDescription';
import ProjectImages from '../../Components/ProjectImages/ProjectImages';
import { useColorModeValue, Stack, Button, VStack, Grid, Box, Image, GridItem, Flex, Center, IconButton } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link as RouteLink } from 'react-router-dom';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Work = () => {
  const { name } = useParams();
  const project = Projects.find((project) => project.path === name);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        <Center overflow={'hidden'}>
          <VStack w={[370, 500, 800]} justifyContent={'center'} align flexDirection={'column'}>
            <ProjectDescription project={project} />
            <Center>
              <ProjectImages project={project} />
            </Center>

            {/* PROJECTS' NAVIGATION */}
            <ProjectNavigation project={project} />
          </VStack>
        </Center>
      </motion.div>
    </>
  );
};

export default Work;


const ProjectNavigation = ({ project }) => {
  const projectsList = ['pj_puppyred', 'pj_eltov', 'pj_rscoding', 'pj_openword', 'pj_cineplex', 'pj_myweather'];
  const currentProject = project;
  const currentProjectIndex = projectsList.findIndex((el) => el === currentProject.path);
  const nextProjectPath = projectsList.find((el, index) => index === currentProjectIndex + 1);
  const previousProjectPath = projectsList.find((el, index) => index === currentProjectIndex - 1);

  return (<>
    <Stack direction='row' p={[4, null, null]} pt={10} pb={10} justifyContent={'space-between'} spacing={4}>
      <Button
        style={{ visibility: (previousProjectPath && previousProjectPath !== -1) ? 'visible' : 'hidden' }}
        as={RouteLink} onClick={window.scrollTo(0, 0)} to={`/works/${previousProjectPath}`} w={170} leftIcon={<ChevronLeftIcon />} colorScheme='teal' variant='outline'>
        Previous project
      </Button>

      <Button
        style={{ visibility: (nextProjectPath && nextProjectPath !== -1) ? 'visible' : 'hidden' }}
        as={RouteLink} onClick={window.scrollTo(0, 0)} to={`/works/${nextProjectPath}`} w={170} rightIcon={<ChevronRightIcon />} colorScheme='teal' variant='outline'>
        Next project
      </Button>
    </Stack>
  </>);
};