import { Box, Flex, Heading, Text, Image, Center, useMediaQuery, Divider } from '@chakra-ui/react';
import image1 from './images/iso1.png';
import image2 from './images/iso2.webp';
import affordable from './images/affordable.svg';
import secure from './images/secure.svg';
import reliable from './images/reliable.svg';

const Footer3 = () => {
  const [isLargeScreen] = useMediaQuery('(min-width: 768px)');

  return (
    <Box bg="#fefbf7" mx="auto" p={4}>
      <Divider orientation="horizontal" height="2px" borderColor="grey" width="90%" mx="auto" mb={6} />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        gap={4}
        p={4}
        wrap="wrap"
      >
        <Flex
          direction="row"
          align="center"
          gap={4}
          p={2}
          flex="1"
          minW={{ base: '100%', md: 'auto' }}
        >
          <Center>
            <Image src={reliable} alt="Checkmark Icon" width={{ base: '50px', md: '13vw' }} height={{ base: '50px', md: '13vh' }} />
          </Center>
          <Box>
            <Heading size={{ base: 'sm', md: 'md' }} mb={2}>Reliable</Heading>
            <Text fontSize={{ base: 'xs', md: 'sm' }} color="#b2afac" fontWeight={400}>
              All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited.
            </Text>
          </Box>
        </Flex>

        <Flex
          direction="row"
          align="center"
          gap={4}
          p={2}
          flex="1"
          minW={{ base: '100%', md: 'auto' }}
        >
          <Center>
            <Image src={secure} alt="Lock Icon" width={{ base: '50px', md: '13vw' }} height={{ base: '50px', md: '13vh' }} />
          </Center>
          <Box>
            <Heading size={{ base: 'sm', md: 'md' }} mb={2}>Secure</Heading>
            <Text fontSize={{ base: 'xs', md: 'sm' }} color="#b2afac" fontWeight={400}>
              Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant.
            </Text>
          </Box>
        </Flex>

        <Flex
          direction="row"
          align="center"
          gap={4}
          p={2}
          flex="1"
          minW={{ base: '100%', md: 'auto' }}
        >
          <Center>
            <Image src={affordable} alt="Wallet Icon" width={{ base: '50px', md: '13vw' }} height={{ base: '50px', md: '13vh' }} />
          </Center>
          <Box>
            <Heading size={{ base: 'sm', md: 'md' }} mb={2}>Affordable</Heading>
            <Text fontSize={{ base: 'xs', md: 'sm' }} color="#b2afac" fontWeight={400}>
              Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab tests and free doctor consultations.
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Box textAlign="center" mt={6}>
        <Flex justify="center" gap={4} mb={4}>
          <Image src={image1} alt="LegitScript Certified" width={{ base: '48px', md: '64px' }} height={{ base: '48px', md: '64px' }} />
          <Image src={image2} alt="UKAS Certified" width={{ base: '48px', md: '64px' }} height={{ base: '48px', md: '64px' }} />
        </Flex>
        <Heading size={{ base: 'sm', md: 'md' }} mb={2}>
          India's only LegitScript and ISO/IEC 27001:2022 certified online healthcare platform
        </Heading>
      </Box>
      <Divider orientation="horizontal" height="2px" borderColor="grey" width="90%" mx="auto" mt={6} />
    </Box>
  );
};

export default Footer3;
