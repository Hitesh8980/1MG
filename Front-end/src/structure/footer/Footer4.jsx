import { Box, Flex, Text, Link, Image } from '@chakra-ui/react';
import payment from './images/payment.png'
const Footer4 = () => {
  return (
    <Box bg="#fefbf7" py={4}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px={8}
        mx="auto"
        maxW="container.xl"
      >
        <Text fontSize="sm" color="#adb1b2" fontWeight={800}>
          &copy; 2024 Tata. All content appearing on this website is for information purposes only.
          Please refer to the Drugs and Cosmetics Act 1940 and Drugs and Cosmetics Rules 1945. We do not process requests
        </Text>
        <Flex>
          <Image src={payment} alt="Visa" h={10} mr={2} />
          
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer4;