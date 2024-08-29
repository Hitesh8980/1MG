import React from 'react';
import {
  Box, Image, Text, VStack, HStack, Stack, Button, Divider, Badge,
} from '@chakra-ui/react';
import { useCart } from './cartContext';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const hardcodedDeliveryCharge = 4;
  const hardcodedTotalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const hardcodedDiscount = cartItems.length > 1 ? 1785 : 0; 

  return (
    <>
      <Navbar />
      <Box p={5}>
        <HStack spacing={6} align="start" justify="space-between">
          {/* Left Box: Cart Items */}
          <Box flex="1">
            <Text fontSize="2xl" fontWeight="bold">{cartItems.length} items added</Text>
            <Text fontSize="sm" color="gray.500">Items not requiring prescription</Text>

            <VStack spacing={4} mt={4}>
              {cartItems.map((item) => (
                <HStack key={item.id} justify="space-between" w="full" p={4} borderRadius="md" borderWidth="1px">
                  <HStack spacing={4}>
                    <Image src={item.image} alt={item.name} boxSize="60px" objectFit="cover" borderRadius="md" />
                    <VStack align="flex-start" spacing={0}>
                      <Text fontSize="md" fontWeight="bold">{item.name}</Text>
                      <Text fontSize="sm" color="gray.500">Jar of {item.quantity} gm</Text>
                      <Button
                        size="sm"
                        colorScheme="red"
                        variant="link"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </VStack>
                  </HStack>
                  <HStack>
                    <Text as="s" color="gray.500" fontSize="md">₹{item.originalPrice}</Text>
                    <Text fontSize="xl" fontWeight="bold">₹{item.price * item.quantity}</Text> 
                    <Badge colorScheme="green">{item.discount}% off</Badge>
                  </HStack>
                </HStack>
              ))}
            </VStack>
          </Box>

          {/* Right Box: Care Plan and Summary */}
          <Box flex="1">
            {/* Care Plan */}
            <Box p={5} bg="gray.100" borderRadius="md">
              <Text fontSize="lg" fontWeight="bold" mb={2}>Care Plan</Text>
              <Text>Become a care plan member for only ₹165 <Text as="s">₹549</Text> 70% off</Text>
              <Button mt={4} colorScheme="red" w="full">Add membership</Button>
            </Box>

            {/* Apply Coupon */}
            <Box mt={6} p={5} bg="gray.100" borderRadius="md">
              <Text fontSize="lg" fontWeight="bold" mb={2}>Apply coupon</Text>
              {/* Placeholder for coupon input */}
            </Box>

            {/* Bill Summary */}
            <Box mt={6} p={5} bg="gray.100" borderRadius="md">
              <Text fontSize="lg" fontWeight="bold" mb={4}>Bill summary</Text>
              <Stack spacing={3}>
                <HStack justify="space-between">
                  <Text>Total amount (MRP)</Text>
                  <Text>₹{hardcodedTotalAmount}</Text>
                </HStack>
                <HStack justify="space-between">
                  <Text>Green packaging charge</Text>
                  <Text>₹{hardcodedDeliveryCharge}</Text>
                </HStack>
                <HStack justify="space-between">
                  <Text>Total discount</Text>
                  <Text color="green.500">-₹{hardcodedDiscount}</Text>
                </HStack>
                <HStack justify="space-between">
                  <Text>Shipping fee</Text>
                  <Text>As per delivery address</Text>
                </HStack>
              </Stack>
              <Divider my={3} />
              <HStack justify="space-between" fontWeight="bold" fontSize="lg">
                <Text>To be paid</Text>
                <Text>₹{hardcodedTotalAmount - hardcodedDiscount + hardcodedDeliveryCharge}</Text>
              </HStack>
            </Box>

            {/* Delivery Address */}
            <Box mt={6} p={5} bg="gray.100" borderRadius="md">
              <HStack justify="space-between">
                <Text fontSize="lg" fontWeight="bold">Delivering to</Text>
                <Button variant="link" colorScheme="red">Add Address</Button>
              </HStack>
            </Box>

            <Link to="/checkout">
  <Button mt={6} colorScheme="red" w="full" size="lg">Continue</Button>
</Link>
          </Box>
        </HStack>
      </Box>
      <Footer />
    </>
  );
};

export default Cart;
