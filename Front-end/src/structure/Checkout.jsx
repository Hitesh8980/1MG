import React, { useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Box,
  HStack,
  VStack,
  Input,
  useBreakpointValue,
  useDisclosure,
  useToast,
  Divider,
} from "@chakra-ui/react";

const Checkout = () => {
  const [selectedMode, setSelectedMode] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleModeChange = (mode) => {
    setSelectedMode(mode);
  };

  const handlePayment = () => {
    toast({
      title: "Order Successful",
      description: "Your order has been placed successfully!",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Flex
      direction={isMobile ? "column" : "row"}
      justifyContent="space-between"
      alignItems="flex-start"
      gap={isMobile ? 4 : 10}
      mt={10}
      px={4}
      w="full"
    >
      <VStack spacing={4} w={isMobile ? "full" : "40%"}>
        <Heading as="h2" size="lg" fontWeight="bold">
          Choose Payment Mode
        </Heading>

        {/* Payment Options */}
        {["UPI", "Wallets", "Debit & Credit Card", "Net Banking", "Pay by Cash"].map((mode) => (
          <Box
            key={mode}
            bg="gray.100"
            p={4}
            borderRadius="md"
            cursor="pointer"
            onClick={() => handleModeChange(mode)}
          >
            <HStack justifyContent="space-between" w="full">
              <Text fontWeight="bold">{mode}</Text>
              {selectedMode === mode && (
                <Button colorScheme="green" onClick={handlePayment}>
                  Pay Now
                </Button>
              )}
            </HStack>
          </Box>
        ))}
      </VStack>

      {/* Divider between payment modes and payment details */}
      {!isMobile && (
        <Divider orientation="vertical" borderColor="gray.300" height="auto" mx={4} />
      )}

      {/* Input Fields Section */}
      <Flex direction="column" w={isMobile ? "full" : "40%"} alignItems="flex-start">
        {selectedMode === "UPI" && (
          <Box bg="gray.100" p={4} borderRadius="md" w="full">
            <Text fontSize="sm" color="gray.500">
              Directly pay from your bank account
            </Text>
            <Input placeholder="Enter UPI ID" bg="white" borderRadius="md" />
          </Box>
        )}
        {selectedMode === "Wallets" && (
          <Box bg="gray.100" p={4} borderRadius="md" w="full">
            <Text fontSize="sm" color="gray.500">
              Pay using your preferred wallet
            </Text>
            <Input placeholder="Enter Wallet Number or ID" bg="white" borderRadius="md" />
          </Box>
        )}
        {selectedMode === "Debit & Credit Card" && (
          <Box bg="gray.100" p={4} borderRadius="md" w="full">
            <Text fontSize="sm" color="gray.500">
              Securely pay with your card
            </Text>
            <Input placeholder="Card Number" bg="white" borderRadius="md" />
            <HStack w="full" spacing={2}>
              <Input placeholder="MM/YY" bg="white" borderRadius="md" />
              <Input placeholder="CVV" bg="white" borderRadius="md" />
            </HStack>
          </Box>
        )}
        {selectedMode === "Net Banking" && (
          <Box bg="gray.100" p={4} borderRadius="md" w="full">
            <Text fontSize="sm" color="gray.500">
              Pay directly from your bank account
            </Text>
            <Input placeholder="Select Bank" bg="white" borderRadius="md" />
          </Box>
        )}
        {selectedMode === "Pay by Cash" && (
          <Box bg="gray.100" p={4} borderRadius="md" w="full">
            <Text fontSize="sm" color="gray.500" mt={2}>
              Pay in person
            </Text>
          </Box>
        )}
      </Flex>

      {/* Divider between payment details and offer section */}
      {!isMobile && (
        <Divider orientation="vertical" borderColor="gray.300" height="auto" mx={4} />
      )}

      {/* Offer Section */}
      <VStack spacing={4} w={isMobile ? "full" : "20%"} alignItems="flex-start">
        <Box
          bg="green.100"
          p={4}
          borderRadius="md"
          cursor="pointer"
          onClick={onOpen}
        >
          <HStack spacing={2} alignItems="center">
            <Box
              bg="green.500"
              w={4}
              h={4}
              borderRadius="full"
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="xs" fontWeight="bold">
                ₹
              </Text>
            </Box>
            <Text fontSize="sm" fontWeight="bold" color="green.500">
              Get up to INR 500 cashback on a minimum transaction of INR 600
              when using UPI with a Rupay credit card. Offer ends 31st Aug
              2024.
            </Text>
          </HStack>
          <Text fontSize="sm" fontWeight="bold" color="green.500" mt={2}>
            See all offers
          </Text>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Checkout;
