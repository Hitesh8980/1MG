import { Badge, Box, Button, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
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
      title: "Complete Care Package",
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
        <Box border={'2px solid black'} bg="#f6f6f6" p={1} m={0}>
            <Flex justifyContent={'space-around'}
            gap={'50vw'}
            m={3}>
                <Box mt={5} mr={80}><Text>Full body health checkups</Text></Box>
                <Box ml={20} mt={5}><Button bg={'red'} color={'white'} w={20}h={8}>See All</Button></Box>
                
            </Flex>
        </Box>
        <Box border={'2px solid green'} p={4}>
      <Flex wrap="wrap" justifyContent="space-between" alignItems="flex-start">
        {cardData.map((data, index) => (
          <Box
            key={index}
            // border={'2px solid green'}
            w={80}
            p={4}
            mb={2}
            boxShadow={'lg'}
          >
            <HStack justifyContent="space-between">
              <Text fontWeight="bold">{data.title}</Text>
              <Badge colorScheme={data.badgeColor}>{data.badgeText}</Badge>
            </HStack>
            <VStack mt={2}>
              <HStack spacing={4}>
                <Text fontSize="2xl" fontWeight="bold">{data.price}</Text>
                <Text fontSize="xl" textDecoration="line-through" color="gray.500">{data.originalPrice}</Text>
                <Badge colorScheme="red">{data.discount}</Badge>
              </HStack>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Box>
      
    </div>
  )
}

export default Body2
