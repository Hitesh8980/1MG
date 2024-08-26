import { Box, Flex, Heading, Text, Image, Center, useMediaQuery, Divider } from '@chakra-ui/react';
import image1 from './images/iso1.png'
import image2 from './images/iso2.webp'
import affordable from './images/affordable.svg'
import secure from './images/secure.svg'
import reliable from './images/reliable.svg'

const Footer3 = () => {
  const [isLargeScreen] = useMediaQuery('(min-width: 768px)');

  return (
    
    <Box bg="#fefbf7" mx="auto"  h={isLargeScreen ? '25vw' : 'auto'} p={1}>
        <Divider orientation="horizontal" height="20px" borderColor="grey" width='90vw' mx='auto'/>
      <Flex
        direction={isLargeScreen ? 'row' : 'column'}
        justify="space-between"
        align="center"
        gap={isLargeScreen ? 10 : 4}
        p={isLargeScreen ? 4 : 2}
      >
        <Flex
          direction="row"
          align="center"
        //   border="2px solid black"
          gap={4}
          p={2}
        >
          <Center>
            <Image src={reliable} alt="Checkmark Icon" width="13vw" height="13vh" />
          </Center>
          <Box>
            <Heading size="md" mb={2}>Reliable</Heading>
            <Text fontSize="sm" color="#b2afac" fontWeight={400}>
              All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited.
            </Text>
          </Box>
        </Flex>

        <Flex
          direction="row"
          align="center"
        //   border="2px solid black"
          gap={4}
          p={2}
        >
          <Center>
            <Image src={secure} alt="Lock Icon" width="13vw" height="13vh" />
          </Center>
          <Box>
            <Heading size="md" mb={2}>Secure</Heading>
            <Text fontSize="sm" color="#b2afac" fontWeight={400}>
              Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant.
            </Text>
          </Box>
        </Flex>

        <Flex
          direction="row"
          align="center"
        //   border="2px solid black"
          gap={4}
          p={2}
        >
          <Center>
            <Image src={affordable} alt="Wallet Icon" width="13vw" height="13vh" />
          </Center>
          <Box>
            <Heading size="md" mb={2}>Affordable</Heading>
            <Text fontSize="sm" color="#b2afac" fontWeight={400}>
              Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab tests and free doctor consultations.
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Box textAlign="center" mt={isLargeScreen ? 4 : 2}>
        <Flex justify="center" gap={4}>
          <Image src={image1} alt="LegitScript Certified" width="64px" height="64px" />
          <Image src={image2} alt="UKAS Certified" width="64px" height="64px" />
        </Flex>
        <Heading size="md" mt={2}>
          India's only LegitScript and ISO/IEC 27001:2022 certified online healthcare platform
        </Heading>
      </Box>
      <Divider orientation="horizontal" height="20px" borderColor="grey" width='90vw' mx='auto'/>
    </Box>
  );
};

export default Footer3;
