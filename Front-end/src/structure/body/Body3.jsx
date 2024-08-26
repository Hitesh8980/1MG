import { Box, Button, Flex, Image, Slider, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { useEffect } from 'react';

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


const Body3 = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.example.com/products'); 
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <Box border={'2px solid blue'} bg="#f6f6f6" p={1} m={0}>
        <Flex justifyContent={'space-between'} alignItems={'center'} m={3}>
          <Text fontSize="lg" fontWeight="bold">Super Saving Deals</Text>
          <Button bg={'red'} color={'white'} w={20} h={8}>See All</Button>
        </Flex>
        
        <Box p={4} border={'2px solid green'}>
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <Box key={product.id} p={4} borderWidth={1} borderRadius="md" overflow="hidden">
                <Image src={product.image} alt={product.title} boxSize="200px" objectFit="cover" />
                <Stack spacing={2} mt={2}>
                  <Text fontWeight="bold">{product.title}</Text>
                  <Text color="gray.600">${product.price}</Text>
                </Stack>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </div>
  )
}

export default Body3
