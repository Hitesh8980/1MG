import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  HStack,
  Link,
  Spacer,
  useDisclosure,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Image,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "./tata_1mg_logo.svg";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Navbar1 = () => {
  const { isOpen, onToggle } = useDisclosure();
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onOpen: onSignUpOpen,
    onClose: onSignUpClose,
  } = useDisclosure();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://onemg-1.onrender.com/user/Login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { accessToken } = response.data;
      if (accessToken) {
        localStorage.setItem("token", accessToken);
        onLoginClose();
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "https://onemg-1.onrender.com/user/Signup",
        signUpData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      onSignUpClose();
      onLoginOpen();
    } catch (error) {
      if (error.response) {
        console.error("Sign up failed:", error.response.data);
        console.error("Status code:", error.response.status);
        console.error("Headers:", error.response.headers);
        alert(
          `Sign up failed: ${
            error.response.data.message || error.response.statusText
          }`
        );
      } else if (error.request) {
        console.error("Sign up failed:", error.request);
        alert("Sign up failed: No response from the server");
      } else {
        console.error("Sign up failed:", error.message);
        alert(`Sign up failed: ${error.message}`);
      }
    }
  };

  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"1vw"}
        minW={"100vw"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify={{ base: "space-between", md: "center" }}
      >
        <HStack spacing={5} alignItems={"center"}>
          <Box>
            <NavLink to="/">
              <Image src={logo} alt="TATA 1mg" h="24px" />
            </NavLink>
          </Box>

          <HStack as={"nav"} spacing={5} display={{ base: "none", md: "flex" }}>
            <Link
              href="#"
              fontSize="15px"
              color="black"
              fontWeight="700"
              textTransform="uppercase"
              fontFamily="'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
              _hover={{ color: "#FF6F61" }}
            >
              MEDICINES
            </Link>
            <Link
              href="#"
              fontSize="15px"
              color="black"
              fontWeight="700"
              textTransform="uppercase"
              fontFamily="'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
              _hover={{ color: "#FF6F61" }}
            >
              LAB TESTS
              <Button
                size="xs"
                colorScheme="blackAlpha"
                color="white"
                bg="#FF6F61"
                ml={2}
                fontSize="10px"
                fontWeight="700"
                textTransform="uppercase"
                _hover={{ color: "white" }}
              >
                Safe
              </Button>
            </Link>
            <Link
              href="#"
              fontSize="15px"
              color="black"
              fontWeight="700"
              textTransform="uppercase"
              fontFamily="'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
              _hover={{ color: "#FF6F61" }}
            >
              CONSULT DOCTORS
            </Link>
            <Link
              href="#"
              fontSize="15px"
              color="black"
              fontWeight="700"
              textTransform="uppercase"
              fontFamily="'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
              _hover={{ color: "#FF6F61" }}
            >
              CANCER CARE
            </Link>
            <Link
              href="#"
              fontSize="15px"
              color="black"
              fontWeight="700"
              textTransform="uppercase"
              fontFamily="'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
              _hover={{ color: "#FF6F61" }}
            >
              PARTNERSHIPS
              <Button
                size="xs"
                colorScheme="blackAlpha"
                color="white"
                bg="#FF6F61"
                ml={2}
                fontSize="10px"
                fontWeight="700"
                textTransform="uppercase"
              >
                New
              </Button>
            </Link>
            <Link
              href="#"
              fontSize="15px"
              color="black"
              fontWeight="700"
              textTransform="uppercase"
              fontFamily="'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
              _hover={{ color: "#FF6F61" }}
            >
              CARE PLAN
              <Button
                size="xs"
                colorScheme="blackAlpha"
                color="white"
                bg="#FF6F61"
                ml={2}
                fontSize="10px"
                fontWeight="700"
                textTransform="uppercase"
              >
                Save More
              </Button>
            </Link>
          </HStack>
        </HStack>

        <Spacer />

        <HStack spacing={2} display={{ base: "none", md: "flex" }}>
          {isAuthenticated ? (
            <>
              <Link
                href="#"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link href="#" onClick={onLoginOpen}>
                Login{" "}
              </Link>
              <Divider
                orientation="vertical"
                height="20px"
                borderColor="black"
              />
              <Link href="#" onClick={onSignUpOpen}>
                Sign Up
              </Link>
            </>
          )}
          <Link href="#">Offers</Link>
          <NavLink to="/cart">
            <Box as="span" position="relative">
              <Image
                src="https://img.icons8.com/material-outlined/24/000000/shopping-cart.png"
                alt="Cart"
              />
            </Box>
          </NavLink>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Toggle Menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={onToggle}
          variant="outline"
        />

        {/* Mobile Menu */}
        {isOpen && (
          <Stack
            display={{ md: "none" }}
            spacing={4}
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            position="absolute"
            top={0}
            left={0}
            right={0}
            zIndex={10}
          >
            <Link href="#" onClick={onLoginOpen}>
              Login
            </Link>
            <Link href="#" onClick={onSignUpOpen}>
              Sign Up
            </Link>
            <Link href="#">Offers</Link>
            <NavLink to="/cart">
              <Box as="span" position="relative">
                <Image
                  src="https://img.icons8.com/material-outlined/24/000000/shopping-cart.png"
                  alt="Cart"
                />
              </Box>
            </NavLink>
          </Stack>
        )}

        {/* Login Modal */}
        <Modal isOpen={isLoginOpen} onClose={onLoginClose}>
          <ModalOverlay />
          <ModalContent maxW="800px" borderRadius="md">
            <ModalCloseButton />
            <ModalBody display="flex" p={0}>
              {/* Left side with illustration */}
              <Box
                flex="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="gray.50"
                p={8}
              >
                <Box textAlign="center">
                  <Heading size="md" mb={2}>
                    Medicines, Home Delivered
                  </Heading>
                  <Text fontSize="sm">
                    Order any medicine or health product and we'll deliver it
                    for free. Enjoy discounts on everything.
                  </Text>
                </Box>
              </Box>

              {/* Right side with login form */}
              <Box flex="1" p={8}>
                <Heading size="lg" mb={4}>
                  Login
                </Heading>
                <Text fontSize="sm" mb={6}>
                  Get access to your orders, lab tests & doctor consultations
                </Text>
                <Input
                  placeholder="Email"
                  mb={3}
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
                <Input
                  placeholder="Password"
                  type="password"
                  mb={3}
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
                <Button colorScheme="red" w="full" mb={3} onClick={handleLogin}>
                  Login
                </Button>
                <Text fontSize="sm" textAlign="center" color="gray.500">
                  New on 1mg? <Link color="red.500">Sign Up</Link>
                </Text>
                <Text fontSize="xs" textAlign="center" mt={4} color="gray.400">
                  By logging in, you agree to our{" "}
                  <Link>Terms and Conditions</Link> &{" "}
                  <Link>Privacy Policy</Link>
                </Text>
                <Text fontSize="sm" textAlign="center" mt={4} color="red.500">
                  Need Help? Get In Touch
                </Text>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
        {/* Sign Up Modal */}
        <Modal isOpen={isSignUpOpen} onClose={onSignUpClose}>
          <ModalOverlay />
          <ModalContent maxW="800px" borderRadius="md">
            <ModalCloseButton />
            <ModalBody display="flex" p={0}>
              {/* Left side with illustration */}
              <Box
                flex="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="gray.50"
                p={8}
              >
                <Box textAlign="center">
                  <Heading size="md" mb={2}>
                    Lab Tests at Home
                  </Heading>
                  <Text fontSize="sm">
                    Book any test from any lab. We'll collect the sample and
                    send the reports. Save up to 80% every time.
                  </Text>
                </Box>
              </Box>

              {/* Right side with signup form */}
              <Box flex="1" p={8}>
                <Heading size="lg" mb={4}>
                  Sign Up
                </Heading>
                <Text fontSize="sm" mb={6}>
                  Please enter your details to create an account
                </Text>
                <Input
                  placeholder="Username"
                  mb={3}
                  value={signUpData.username}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, username: e.target.value })
                  }
                />
                <Input
                  placeholder="Email"
                  mb={3}
                  value={signUpData.email}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, email: e.target.value })
                  }
                />
                <Input
                  placeholder="Password"
                  type="password"
                  mb={3}
                  value={signUpData.password}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, password: e.target.value })
                  }
                />
                <Button
                  colorScheme="red"
                  w="full"
                  mb={3}
                  onClick={handleSignUp}
                >
                  Sign Up
                </Button>
                <Text fontSize="sm" textAlign="center" color="gray.500">
                  Have an account? <Link color="red.500">Login</Link>
                </Text>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};

export default Navbar1;
