import {
  Box,
  Flex,
  Text,
  Heading,
  Input,
  Button,
  useBreakpointValue,
  Divider,
} from '@chakra-ui/react';

const Footer1 = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box as="footer" bg="white" py={8} boxShadow="md" border="2px solid black">
      <Box textAlign={isDesktop ? 'center' : 'left'} mb={isDesktop ? 6 : 4}>
        <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={2}>
          INDIA’S LARGEST HEALTHCARE PLATFORM
        </Heading>
      </Box>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="center"
        alignItems={{ base: 'flex-start', md: 'center' }}
        px={{ base: 4, md: 8 }}
        mb={isDesktop ? 8 : 4}
        gap={isDesktop ? 8 : 4}
      >
        <Box textAlign={isDesktop ? 'center' : 'left'}>
          <Heading as="h3" fontSize={{ base: 'lg', md: '2xl' }} fontWeight="bold" mb={1}>
            260m+
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }}>Visitors</Text>
        </Box>
        <Box textAlign={isDesktop ? 'center' : 'left'}>
          <Heading as="h3" fontSize={{ base: 'lg', md: '2xl' }} fontWeight="bold" mb={1}>
            31m+
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }}>Orders Delivered</Text>
        </Box>
        <Box textAlign={isDesktop ? 'center' : 'left'}>
          <Heading as="h3" fontSize={{ base: 'lg', md: '2xl' }} fontWeight="bold" mb={1}>
            1800+
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }}>Cities</Text>
        </Box>
      </Flex>
      <Flex justifyContent="center" mb={8}>
        <Divider orientation="horizontal" height="2px" borderColor="grey.400" width={{ base: '100%', md: '90%' }} />
      </Flex>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center"
        px={{ base: 4, md: 8 }}
        gap={4}
      >
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
          Get the link to download App
        </Text>
        <Input
          placeholder="Enter Phone Number"
          borderRadius="md"
          borderWidth="1px"
          size={{ base: 'md', md: 'lg' }}
          width={{ base: '100%', md: 'auto' }}
        />
        <Button
          bg="red.400"
          color="white"
          _hover={{ bg: 'red.500' }}
          borderRadius="md"
          size={{ base: 'md', md: 'lg' }}
        >
          Send Link
        </Button>
      </Flex>
    </Box>
  );
};

export default Footer1;
