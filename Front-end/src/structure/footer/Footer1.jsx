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
      <Box as="footer" bg="white" py={8} boxShadow={20} border={'2px solid black'}>
         <Box textAlign={isDesktop ? 'center' : 'left'} mb={isDesktop ? 0 : 4}>
            <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={2}>
            INDIA’S LARGEST HEALTHCARE PLATFORM
            </Heading>
          </Box>
        <Flex
          direction={isDesktop ? 'row' : 'column'}
          justifyContent="space-around"
          alignItems={isDesktop ? 'center' : 'flex-start'}
          px={8}
        >
           
          <Box textAlign={isDesktop ? 'center' : 'left'} mb={isDesktop ? 0 : 4}>
            <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={2}>
              260m+
            </Heading>
            <Text fontSize="sm">Visitors</Text>
          </Box>
          <Box textAlign={isDesktop ? 'center' : 'left'} mb={isDesktop ? 0 : 4}>
            <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={2}>
              31m+
            </Heading>
            <Text fontSize="sm">Orders Delivered</Text>
          </Box>
          <Box textAlign={isDesktop ? 'center' : 'left'} mb={isDesktop ? 0 : 4}>
            <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={2}>
              1800+
            </Heading>
            <Text fontSize="sm">Cities</Text>
          </Box>
        </Flex>
        <Flex >
        <Divider orientation="horizontal" height="20px" borderColor="grey" width='90vw' mx='auto'/>
        </Flex>
  
        <Flex
  direction="row"
  justifyContent="center"
  mt={8}
  px={8}
>
  <Text fontSize="xl" fontWeight="bold" mr={4}>
    Get the link to download App
  </Text>
  <Input
    placeholder="Enter Phone Number"
    borderRadius="md"
    borderWidth="1px"
    size="lg"
    mr={4}
  />
  <Button
    bg="red.400"
    color="white"
    _hover={{ bg: 'red.500' }}
    borderRadius="md"
    size="lg"
  >
    Send Link
  </Button>
</Flex>
      </Box>
    );
  };
  
  export default Footer1;