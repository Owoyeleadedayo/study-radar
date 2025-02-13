import {
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import SRL from "../assets/images/SRLogo.png";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  // const location = useLocation();

  const links = [
    { label: "About", url: "/about" },
    { label: "Why Choose Us", url: "/whyUs" },
    { label: "Pricing", url: "/pricing" },
    { label: "FAQs", url: "/faq" },
  ];

  return (
    <>
      <Flex
        width="100%"
        bg="#FDFDFD"
        px={{ base: "20px", md: "40px", lg: "100px" }}
        py="15px"
        justifyContent="space-between"
        alignItems="center"
        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        position="fixed"
        top="0"
        left="0"
        zIndex={100}
      >
        <Flex gap="50px" justifyContent="center" alignItems="center">
          <Box
            width="69px"
            height="60px"
            onClick={() => navigate("/")}
            cursor="pointer"
          >
            <Image
              src={SRL}
              alt="logo"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </Box>

          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            icon={<IoMenu />}
            variant="none"
            color="black" // Changed color so it’s visible
            onClick={onOpen}
          />

          <Flex
            gap="20px"
            alignItems="center"
            display={{ base: "none", md: "flex" }}
          >
            {links.map((item, index) => (
              <NavLink
                key={index}
                to={item.url}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "18px",
                  color: isActive ? "#5271FF" : "#191E33",
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </Flex>
        </Flex>

        <Flex
          justifyContent="center"
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Text
            fontFamily="Geist"
            fontWeight={400}
            fontSize="18px"
            color="#191E33"
          >
            Log In
          </Text>
          <Center height="30px" px="20px">
            <Divider orientation="vertical" color="#89859D" />
          </Center>
          <Button
            fontFamily="Geist"
            fontWeight={500}
            fontSize="15px"
            color="#FDFDFD"
            bg="#5271FF"
          >
            Get Started{" "}
            <Flex pl="5px">
              <FaArrowRight />
            </Flex>
          </Button>
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="#F9F9F9">
          <DrawerCloseButton color="#000000" />
          <VStack
            align="start"
            spacing="20px"
            mt="80px"
            pl="20px"
            color="#FFFFFF"
          >
            {links.map((item, index) => (
              <NavLink
                key={index}
                to={item.url}
                onClick={onClose}
                style={() => ({
                  fontFamily: "Geist",
                  fontSize: "18px",
                  color: "#191E33CC",
                })}
              >
                {item.label}
              </NavLink>
            ))}
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              mx={"auto"}
              direction={"column"}
              gap={"10px"}
            >
              <Button
                fontFamily="Geist"
                fontWeight={500}
                fontSize="15px"
                color="#FDFDFD"
                bg="#5271FF"
              >
                Get Started{" "}
                <Flex pl="5px">
                  <FaArrowRight />
                </Flex>
              </Button>
              <Flex>
                <Text
                  fontFamily="Geist"
                  fontWeight={400}
                  fontSize="18px"
                  color="#191E33"
                >
                  Log In
                </Text>
              </Flex>
            </Flex>
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
