import React from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  HStack,
  Icon,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { MdLocationOn } from 'react-icons/md';

const Navbar2 = () => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      minH={'50px'}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      px={{ base: 4, sm: 6, md: 10 }}
      py={2}
      m={1}
      minW={'100vw'}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={'center'}
        justify={'space-between'}
        wrap={'wrap'}
      >
        <HStack
          spacing={4}
          mb={{ base: 2, md: 0 }}
          w={{ base: '100%', md: 'auto' }}
          align={'center'}
        >
          <HStack
            spacing={1}
            bg={useColorModeValue('gray.100', 'gray.700')}
            p={2}
            borderRadius={'md'}
          >
            <Icon as={MdLocationOn} color="black" />
            <Text
              fontSize={{ base: '12px', md: '14px' }}
              fontWeight="700"
              color="black"
              fontFamily="'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            >
              Gurgaon
            </Text>
          </HStack>

          {/* Search Bar */}
          <InputGroup w={{ base: '100%', md: '500px' }}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search for Medicines and Health Products"
              fontSize={{ base: '12px', md: '14px' }}
              bg={useColorModeValue('gray.100', 'gray.700')}
            />
          </InputGroup>
        </HStack>

        <Spacer />

        {/* Offer Text and Quick Order Button */}
        <HStack
          spacing={4}
          mb={{ base: 2, md: 0 }}
          w={{ base: '100%', md: 'auto' }}
          align={'center'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Text
            fontSize={{ base: '12px', md: '14px' }}
            fontWeight="700"
            color="black"
            textAlign={{ base: 'center', md: 'left' }}
            fontFamily="'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
          >
            ⚡ QUICK BUY! Get 15% off on medicines*
          </Text>
          <Button
            size="md"
            bg="#FF6F61"
            color="white"
            fontWeight="700"
            fontSize={{ base: '12px', md: '14px' }}
            _hover={{ bg: '#e55a4c' }}
          >
            Quick order
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar2;
