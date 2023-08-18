import React, { useState } from 'react';
import {
  Box,
  Button,
  VStack,
  Slide,
  Link,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const FullscreenDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        onClick={toggleMenu}
        colorScheme="#3BB900"
        bg="#3BB900"
        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
        padding={{ base: '2', md: '3', lg: '4' }}
      >
        Menu
      </Button>
      <Slide direction={isOpen ? 'left' : 'right'} in={isOpen} style={{ zIndex: 9999 }}>
        <Box
          bg="black"
          w="100vw"
          h="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          color="white"
        >
          <Button
            position="absolute"
            top={4}
            right={4}
            variant="ghost"
            colorScheme="#3BB900"
            onClick={toggleMenu}
          >
            <CloseIcon />
          </Button>
          <VStack spacing={{ base: '4', md: '6', lg: '8' }}>
            <NextLink href="/" passHref>
              <Link
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="white"
                _hover={{ color: '#3BB900' }}
              >
                Home
              </Link>
            </NextLink>
            <NextLink href="/age wallpaper.jpg" target="_blank">
              <Link
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="white"
                _hover={{ color: '#3BB900' }}
              >
                Pledge
              </Link>
            </NextLink>
            <Menu>
              <MenuButton
                as={Link}
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="white"
                _hover={{ textDecoration: 'none', color: '#3BB900' }}
              >
                Explore The Issues
              </MenuButton>
              <MenuList bg="white">
                <NextLink href="/Vision" passHref>
                  <MenuItem
                    fontSize={{ base: '16px', md: '18px', lg: '20px' }}
                    fontWeight="bold"
                    color="black"
                  >
                    Green Tips
                  </MenuItem>
                </NextLink>
                <Link
                  target="_blank"
                  href="https://docs.google.com/presentation/d/1r-VpV2iXhS4BdkBDV0jf3O1GkKByaJB0/edit?usp=sharing&ouid=112031141031112140273&rtpof=true&sd=true"
                >
                  <MenuItem
                    fontSize={{ base: '16px', md: '18px', lg: '20px' }}
                    fontWeight="bold"
                    color="black"
                  >
                    Green Energys - Save Our Planet
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </VStack>
        </Box>
      </Slide>
    </>
  );
};

export default FullscreenDropdownMenu;
