import React from "react";
import { Box, Image, Text, Badge, HStack, Tooltip,  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (product._id) {
      navigate(`/product/${product._id}`);
    } else {
      console.error("Product ID is undefined");
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding="1"
      maxW="300px"
      cursor="pointer"
      onClick={handleClick}
    >
      <Image
        src={product.mainImage || "https://via.placeholder.com/150"}
        alt={product.name}
        boxSize="200px"
        objectFit="contain"
        mx="auto"
      />
      <Box p="2">
        <Text fontWeight="bold" fontSize="md" mb="2">
          {product.name}
        </Text>
        <Text fontSize="sm" color="gray.600" mb="2">
          Brand: {product.brand}
        </Text>
        <HStack spacing={2} mb="2">
          <Badge colorScheme="green">{product.rating}★</Badge>
          <Text fontSize="sm" color="gray.500">
            ({product.reviewsCount} reviews)
          </Text>
          
        </HStack>
        <HStack spacing={2} mb="2">
          <Text fontSize="lg" color="black.500" fontWeight="bold">
          {`₹ ${product.price}`}
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
