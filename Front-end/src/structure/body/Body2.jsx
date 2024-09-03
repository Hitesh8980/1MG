import { Badge, Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const cardData = [
  {
    title: "Comprehensive Gold ...",
    price: "₹2249",
    originalPrice: "₹4498",
    discount: "50% Off",
    badgeColor: "green",
    badgeText: "SAFE",
  },
  {
    title: "Essential Health Kit",
    price: "₹1799",
    originalPrice: "₹3598",
    discount: "50% Off",
    badgeColor: "red",
    badgeText: "HOT",
  },
  {
    title: "Wellness Pack",
    price: "₹1499",
    originalPrice: "₹2998",
    discount: "50% Off",
    badgeColor: "blue",
    badgeText: "NEW",
  },
  {
    title: "Complete Care Pac..",
    price: "₹1999",
    originalPrice: "₹3998",
    discount: "50% Off",
    badgeColor: "yellow",
    badgeText: "BEST SELLER",
  },
];

const Body2 = () => {
  return (
    <div>
      <Box bg="#f6f6f6" p={{ base: 2, md: 4 }} m={0}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          gap={{ base: 2, md: 8 }}
          mb={{ base: 2, md: 4 }}
        >
          <Box>
            <Text fontSize={{ base: 'sm', md: 'lg' }}>Full body health checkups</Text>
          </Box>
          <Button
            bg="red"
            color="white"
            w={{ base: 'full', md: 'auto' }}
            h={8}
            mt={{ base: 2, md: 0 }}
          >
            See All
          </Button>
        </Flex>
      </Box>
      <Box p={{ base: 2, md: 4 }}>
        <Flex
          wrap="wrap"
          justifyContent="space-between"
          alignItems="flex-start"
          gap={{ base: 2, md: 4 }}
        >
          {cardData.map((data, index) => (
            <Box
              key={index}
              w={{ base: 'full', sm: '48%', md: '22%' }}
              p={{ base: 2, md: 4 }}
              mb={4}
              boxShadow="lg"
              borderRadius="md"
              bg="white"
            >
              <HStack justifyContent="space-between" mb={2}>
                <Text fontWeight="bold" fontSize={{ base: 'sm', md: 'md' }}>
                  {data.title}
                </Text>
                <Badge colorScheme={data.badgeColor} fontSize={{ base: 'xs', md: 'md' }}>
                  {data.badgeText}
                </Badge>
              </HStack>
              <VStack spacing={{ base: 1, md: 2 }} align="start">
                <HStack spacing={{ base: 2, md: 4 }}>
                  <Text fontSize={{ base: 'md', md: '2xl' }} fontWeight="bold">
                    {data.price}
                  </Text>
                  <Text
                    fontSize={{ base: 'xs', md: 'xl' }}
                    textDecoration="line-through"
                    color="gray.500"
                  >
                    {data.originalPrice}
                  </Text>
                  <Badge colorScheme="red" fontSize={{ base: 'xs', md: 'md' }}>
                    {data.discount}
                  </Badge>
                </HStack>
              </VStack>
            </Box>
          ))}
        </Flex>
      </Box>
    </div>
  );
};

export default Body2;
