import { Box, Flex, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import payment from './images/payment.png';

const Footer4 = () => {
  // Determine the text alignment and image alignment based on screen size
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="#fefbf7" py={4}>
      <Flex
        direction={isSmallScreen ? 'column' : 'row'}
        justifyContent="space-between"
        alignItems="center"
        px={{ base: 4, md: 8 }}
        mx="auto"
        maxW="container.xl"
        wrap="wrap"
      >
        <Text
          fontSize={{ base: 'xs', md: 'sm' }}
          color="#adb1b2"
          fontWeight={800}
          textAlign={isSmallScreen ? 'center' : 'left'}
          mb={isSmallScreen ? 4 : 0}
        >
          &copy; 2024 Tata. All content appearing on this website is for information purposes only.
          Please refer to the Drugs and Cosmetics Act 1940 and Drugs and Cosmetics Rules 1945. We do not process requests
        </Text>
        <Flex
          alignItems="center"
          justifyContent="center"
          ml={{ base: 0, md: 4 }}
          mt={{ base: 4, md: 0 }}
        >
          <Image src={payment} alt="Payment Methods" h={{ base: '8', md: '10' }} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer4;
