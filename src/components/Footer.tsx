import { Box, Button, Divider, Flex, Image, Input, Link, Text } from "@chakra-ui/react";
import FI from "../assets/images/FooterImg.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const firstList = [
    { name: "Company", link: "#" },
    { name: "About", link: "#" },
    { name: "Benefits", link: "#" },
    { name: "Pricing", link: "#" },
  ];

  const secList = [
    { name: "Help", link: "#" },
    { name: "FAQs", link: "#" },
    { name: "Terms & Conditions", link: "/termsandcon" },
    { name: "Privacy Policy", link: "#" },
  ];
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        py={"50px"}
        px={"110px"}
        bgColor={"#191E33"}
        direction={"column"}
        gap={"50px"}
      >
        <Flex gap={"150px"}>
          <Flex direction={"column"} gap={"20px"}>
            <Box width={"80.63px"} height={"63.81206512451172"}>
              <Image
                src={FI}
                alt="footer-image"
                width={"100%"}
                height={"100%"}
                objectFit={"contain"}
              />
            </Box>
            <Flex justifyContent={"center"} alignItems={"center"} gap={"20px"}>
              <FaFacebookF color="#FFFFFF" fontSize={"22px"} />
              <FaTwitter color="#FFFFFF" fontSize={"24px"} />
              <BiLogoGmail color="#FFFFFF" fontSize={"30px"} />
              <AiFillInstagram color="#FFFFFF" fontSize={"24px"} />
            </Flex>
          </Flex>

          <Flex direction={"column"} gap={"20px"}>
            {firstList.map((item, index) => (
              <Link key={index} href={item.link} cursor={"pointer"}>
                <Text fontFamily={"Geist"} fontWeight={500} color={"#FDFDFD"}>
                  {item.name}
                </Text>
              </Link>
            ))}
          </Flex>

          <Flex width={'200px'} direction={"column"} gap={"20px"}>
            {secList.map((item, index) => (
              <Link key={index} href={item.link} cursor={"pointer"}>
                <Text fontFamily={"Geist"} fontWeight={500} color={"#FDFDFD"}>
                  {item.name}
                </Text>
              </Link>
            ))}
          </Flex>

          <Flex direction={"column"} gap={"20px"}>
            <Flex>
              <Text fontFamily={"Geist"} fontWeight={500} color={"#FDFDFD"}>
                NEWSLETTER
              </Text>
            </Flex>
            <Flex>
              <Input
                placeholder="Enter your email address"
                type="email"
                fontFamily={"Geist"}
                fontWeight={400}
                color={"grey"}
                bg={"#FFFFFF"}
                variant={"none"}
              />
            </Flex>
            <Flex>
              <Button
                width={"250px"}
                fontFamily={"Geist"}
                fontWeight={500}
                fontSize={"15px"}
                color={"#FDFDFD"}
                bg={"#5271FF"}
                variant={"none"}
              >
                Subscribe Now
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Divider />

        <Flex>
          <Text
            fontFamily={"Geist"}
            fontWeight={400}
            fontSize={"14px"}
            color={"#FDFDFD"}
          >
            © Copyright 2022, All Rights Reserved by StudyRadar
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
