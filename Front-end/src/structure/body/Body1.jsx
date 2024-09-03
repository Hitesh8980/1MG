import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  useColorModeValue,
  useBreakpointValue, 
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image from './bodyimages/careplan.webp';
import image2 from './bodyimages/diabetes.webp';
import image4 from './bodyimages/heartcare.webp';
import image5 from './bodyimages/stomachcare.webp';
import image6 from './bodyimages/livercare.webp';
import image7 from './bodyimages/bonejoint.webp';
import image8 from './bodyimages/kidneycare.webp';
import image9 from './bodyimages/dermacare.webp';
import image10 from './bodyimages/respiratory.webp';
import image11 from './bodyimages/eyecare.webp';

const cards = [
  { title: "Diabetes", image: image2 },
  { title: "Heart Care", image: image4 },
  { title: "Stomach Care", image: image5 },
  { title: "Liver Care", image: image6 },
  { title: "Bone, Joint & Muscle Care", image: image7 },
  { title: "Kidney Care", image: image8 },
  { title: "Derma Care", image: image9 },
  { title: "Respiratory Care", image: image10 },
  { title: "Eye Care", image: image11 },
];

const sliderSettings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Arrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50px',
      height: '50px',
      background: 'white',
      borderRadius: '50%',
      zIndex: 1,
    }}
    onClick={onClick}
  />
);

const Body1 = () => {
  const bgColor = useColorModeValue('white', 'gray.700');
  
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  if (isSmallScreen) return null;

  return (
    <div>
      <Flex direction="column" p={19} bg="#f6f6f6" gap={10} w="100%">
        <Image src={image} width="80em" />
        <Box>
          <Text>Shop by Health Concerns</Text>
        </Box>
      </Flex>

      <Box
        boxShadow="lg"
        p={{ base: '8px 16px', md: '30px 20px' }}
        width={{ base: '90%', md: '70%', lg: '100vw' }}
        position="relative"
        mt={0}
      >
        <Flex direction="column" bg={bgColor} px={4} py={8} maxW="100%" mt={-1}>
          <Slider
            {...sliderSettings}
            nextArrow={<Arrow className="slick-next" />}
            prevArrow={<Arrow className="slick-prev" />}
          >
            {cards.map((card, index) => (
              <Box
                key={index}
                overflow="hidden"
                p={4}
                _hover={{ boxShadow: 'lg' }}
                borderRadius="md"
                textAlign="center"
              >
                <Image src={card.image} alt={card.title} borderRadius="md" w="100%" h="auto" />
                <Heading size="sm" mt={2}>
                  {card.title}
                </Heading>
              </Box>
            ))}
          </Slider>
        </Flex>
      </Box>
    </div>
  );
};

export default Body1;
