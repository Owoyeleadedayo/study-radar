import { Box, Button, Center, Divider, Flex, Image, Link, Text } from "@chakra-ui/react"
import SRL from '../assets/images/SRLogo.png'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const links = [
    { label: "About", url: "/about" },
    { label: "Why Choose Us", url: "/whyUs" },
    { label: "Pricing", url: "/pricing" },
    { label: "FAQs", url: "/faq" },
  ];

  return (
    <Flex
      width="100%"
      bg="#FDFDFD"
      px="100px"
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
          cursor={"pointer"}
        >
          <Image
            src={SRL}
            alt="logo"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </Box>

        <Flex gap="20px" alignItems="center">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              style={{ textDecoration: "none" }}
            >
              <Text
                fontFamily="Geist"
                fontWeight={400}
                fontSize="18px"
                color="#191E33"
              >
                {item.label}
              </Text>
            </Link>
          ))}
        </Flex>
      </Flex>

      {/* Login and Get Started */}
      <Flex justifyContent="center" alignItems="center">
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
          variant="none"
        >
          Get Started{" "}
          <Flex pl="5px">
            <FaArrowRight />
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header
