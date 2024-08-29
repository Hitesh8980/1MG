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
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
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
      const response = await axios.post('https://onemg-1.onrender.com/user/Login', loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { accessToken } = response.data;
      if (accessToken) {
        localStorage.setItem('token', accessToken);
        onLoginClose(); 
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "https://onemg-1.onrender.com/user/signup",
        signUpData
      );
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };

  const isAuthenticated = !!localStorage.getItem('token');

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
              <Link href="#" onClick={() => {
                localStorage.removeItem('token');
                window.location.reload();
              }}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link href="#" onClick={onLoginOpen}>
                Login{" "}
              </Link>
              <Divider orientation="vertical" height="20px" borderColor="black" />
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
            <Link href="#" onClick={onLoginOpen}>Login</Link>
            <Link href="#" onClick={onSignUpOpen}>Sign Up</Link>
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
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
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
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleLogin}>
                Login
              </Button>
              <Button variant="ghost" onClick={onLoginClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Sign Up Modal */}
        <Modal isOpen={isSignUpOpen} onClose={onSignUpClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
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
                value={signUpData.password}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSignUp}>
                Sign Up
              </Button>
              <Button variant="ghost" onClick={onSignUpClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};

export default Navbar1;
