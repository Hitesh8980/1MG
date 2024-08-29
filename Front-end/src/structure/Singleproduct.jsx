import React, { useState, useEffect } from 'react';
import { Box, Image, Text, VStack, HStack, Stack, Button, Select, Badge } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../structure/cart/cartContext'; // Import correctly
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

const SingleProduct = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const { addToCart } = useCart(); // Use it inside the component

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1); // State for selected quantity

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://onemg-1.onrender.com/product/${id}`);
        const data = await response.json();
        setProduct(data);
        setMainImage(data.mainImage);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const hardcodedPrice = 962; 
  const originalPrice = 1249; 
  const discount = 23; 
  const quantityOptions = [
    { value: '1', label: '1 Pack' },
    { value: '2', label: '2 Pack' },
    { value: '3', label: '3 Pack' },
  ]; 

  if (!product) {
    return <Text>Loading...</Text>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      image: product.mainImage,
      price: hardcodedPrice,
      originalPrice: originalPrice,
      quantity: selectedQuantity, // Use selected quantity
    });
    
    navigate('/cart'); 
  };

  return (
    <>
      <Navbar />
      <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 4, md: 6 }} p={5}>
        {/* Left Section - Image Thumbnails */}
        <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
          {product.additionalImages?.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              boxSize={{ base: '60px', md: '50px' }}
              borderRadius="md"
              objectFit="cover"
              cursor="pointer"
              _hover={{ border: '2px solid #FF6F61' }}
              onClick={() => setMainImage(img)} 
            />
          ))}
        </VStack>

        {/* Center Section - Main Image and Details */}
        <Box flex="1">
          <Image
            src={mainImage}
            alt={product.name}
            boxSize={{ base: '100%', md: '300px' }}
            objectFit="cover"
            borderRadius="md"
          />
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mt={4} textAlign={{ base: 'center', md: 'left' }}>
            {product.name}
          </Text>
          <Text fontSize="md" color="gray.500" mb={2} textAlign={{ base: 'center', md: 'left' }}>
            {product.brand}
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold" mt={4}>Product highlights</Text>
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={1} mt={2}>
            {product.highlights?.map((highlight, index) => (
              <Text key={index} fontSize={{ base: 'sm', md: 'md' }} textAlign={{ base: 'center', md: 'left' }}>
                • {highlight}
              </Text>
            ))}
          </VStack>
        </Box>

        {/* Right Section - Price and Purchase Options */}
        <VStack align={{ base: 'center', md: 'flex-start' }} spacing={4} p={5} bg="gray.50" borderRadius="md" w={{ base: '100%', md: 'auto' }}>
          <HStack spacing={2}>
            <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">₹{hardcodedPrice}</Text>
            {originalPrice && (
              <Text as="s" color="gray.500">₹{originalPrice}</Text>
            )}
            {discount && (
              <Badge colorScheme="green" fontSize={{ base: 'sm', md: 'md' }}>{discount}% off</Badge>
            )}
          </HStack>
          <Text fontSize="sm" color="gray.500" textAlign={{ base: 'center', md: 'left' }}>
            Inclusive of all taxes
          </Text>
          <Select placeholder="Select Quantity" onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}>
            {quantityOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </Select>
          <Button colorScheme="orange" w="full" onClick={handleAddToCart}>ADD TO CART</Button>
          <Text fontSize="sm" color="green.500">Get it delivered by <Text as="span" fontWeight="bold">4pm, Today</Text></Text>
        </VStack>
      </Stack>
      <Box p={5} mt={6} bg="gray.100" borderRadius="md" textAlign={{ base: 'center', md: 'left' }}>
        <Text fontSize="lg" fontWeight="bold" mb={3}>Information of Product</Text>
        <Text fontSize="lg" fontWeight="bold" mb={3}>{product.name}</Text>
        <Text fontSize="md" color="gray.700">{product.description}</Text>
      </Box>
      <Footer />
    </>
  );
};

export default SingleProduct;
