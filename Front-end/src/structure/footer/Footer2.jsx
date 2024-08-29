import {
  Box,
  Flex,
  Text,
  Link,
  HStack,
  VStack,
  Button,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaVimeoV,
} from "react-icons/fa";
import appstoreImage from './images/g.png';

const Footer2 = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 1024px)");

  return (
    <Box bg="#fefbf7" py={10}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="flex-start"
        px={{ base: 4, md: 8, lg: 16 }}
        mx="auto"
        maxW="1440px"
        wrap="wrap"
        gap={{ base: 8, lg: 0 }}
      >
        <VStack alignItems="flex-start" spacing={4} flex={1} minW="200px">
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
            Know Us
          </Text>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>About Us</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Contact Us</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Press Coverage</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Careers</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Business Partnership</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Become a Health Partner</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Corporate Governance</Link>
        </VStack>

        <VStack alignItems="flex-start" spacing={4} flex={1} minW="200px">
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
            Our Policies
          </Text>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Privacy Policy</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Terms and Conditions</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Editorial Policy</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Return Policy</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>IP Policy</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Grievance Redressal Policy</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Fake Jobs and Fraud Disclaimer</Link>
        </VStack>

        <VStack alignItems="flex-start" spacing={4} flex={1} minW="200px">
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
            Our Services
          </Text>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Order Medicines</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Book Lab Tests</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Consult a Doctor</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Ayurveda Articles</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Hindi Articles</Link>
          <Link href="#" color='#b2afac' fontSize={'sm'} fontWeight={400}>Care Plan</Link>
        </VStack>

        <VStack
          alignItems={isLargeScreen ? "flex-start" : "center"}
          spacing={4}
          flex={1}
          minW="200px"
        >
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
            Connect
          </Text>
          <HStack spacing={4}>
            <Link href="#" aria-label="Facebook">
              <FaFacebookF size="24px" color="blue.500" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram size="24px" color="pink.500" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaTwitter size="24px" color="blue.400" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <FaYoutube size="24px" color="red.500" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedinIn size="24px" color="blue.500" />
            </Link>
            <Link href="#" aria-label="Vimeo">
              <FaVimeoV size="24px" color="black" />
            </Link>
          </HStack>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            Want daily dose of health?
          </Text>
          <Button colorScheme="red" size="md" variant="solid">
            SIGN UP
          </Button>
        </VStack>

        <VStack alignItems="flex-start" spacing={4} flex={1} minW="200px">
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
            Download App
          </Text>
          <HStack spacing={4}>
            <Link href="https://play.google.com/store/apps/details?id=com.aranoah.healthkart.plus" isExternal>
              <Image
                src={appstoreImage}
                alt="Get it on Google Play"
                boxSize={{ base: "100px", md: "120px" }}
                objectFit="contain"
              />
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer2;
