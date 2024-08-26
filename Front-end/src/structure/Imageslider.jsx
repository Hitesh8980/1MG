import React from 'react';
import Slider from "react-slick";
import { Box, Flex, Image } from "@chakra-ui/react";
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import image7 from '../images/image7.png'
import image9 from '../images/image9.png'
import image10 from '../images/stickimage.webp'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, 
  };

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image9
  ];

  return (
    <Box>
    <Flex direction="column" width="100vw" mx="auto">
      <Flex direction="row" width="100%" margin="0" padding="0">
        <Box width="70%" maxW="900px"  marginRight="10px" margin="0" padding="0">
          <Slider {...settings}>
            {images.map((src, index) => (
              <Box key={index}>
                <Image src={src} width="100%" />
              </Box>
            ))}
          </Slider>
        </Box>

        <Box width="50%"  margin="0" padding="0">
         <Image src={image10}/>
        </Box>
      </Flex>      
    </Flex>
    <Box textAlign={'center'}
    //  border={'2px solid green'}
     width={{ base: "90%", md: "70%", lg: "100%" }}
     boxShadow="lg"
     fontWeight="400"
     fontStyle={'normal'}
     fontSize='22px'
     fontFamily='
        "Clear Sans",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif"'
      p={{ base: "8px 16px", md: "30px 20px" }}
      color={'#666666'}
        >Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</Box>
    </Box>
  );
};

export default ImageSlider;
