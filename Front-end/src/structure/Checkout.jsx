import React, { useEffect, useState } from 'react';
import { Button, useToast, Box, Text, Input, Image } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from './navbar/tata_1mg_logo.svg';

const Checkout = () => {
  const toast = useToast();
  const [amount, setAmount] = useState('');
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const initialAmount = queryParams.get('amount');
    console.log('Initial amount from query:', initialAmount); 
    if (initialAmount) {
      setAmount(initialAmount);
    }
  }, [location]);

  const handlePayment = async () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      toast({
        title: 'Invalid Amount',
        description: 'Please enter a valid amount.',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch('https://onemg-1.onrender.com/razor/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: parseFloat(amount), currency: 'INR' }),
      });

      const data = await response.json();

      if (!data.id) {
        throw new Error('Order creation failed');
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: '1MG',
        description: 'Test Transaction',
        order_id: data.id,
        handler: function (response) {
          verifyPayment(response);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Customer Address',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment Error:', error);
      toast({
        title: 'Payment Error',
        description: 'There was an error while processing your payment.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const verifyPayment = async (response) => {
    try {
      const { order_id, payment_id, signature } = response;

      const res = await fetch('https://onemg-1.onrender.com/razor/verifyPayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ order_id, payment_id, signature }),
      });

      const result = await res.json();

      if (result.status === 'success') {
        toast({
          title: 'Payment Successful',
          description: 'Your payment was processed successfully.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } else {
        throw new Error('Payment verification failed');
      }
    } catch (error) {
      console.error('Verification Error:', error);
      toast({
        title: 'Verification Error',
        description: 'There was an error while verifying your payment.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box p={4}>
        <NavLink to="/">
          <Image src={logo} alt="TATA 1mg" h="54px" />
        </NavLink>
      </Box>
      <Box p={5} maxW="md" mx="auto">
        <Text mb={4} fontSize="2xl" fontWeight="bold">Checkout</Text>
        <Input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          mb={4}
          min="1"
          step="any"
        />
        <Button colorScheme="teal" onClick={handlePayment}>
          Pay with Razorpay
        </Button>
      </Box>
    </>
  );
};

export default Checkout;
