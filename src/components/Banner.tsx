import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import B from '../assets/images/banner.png'

const Banner = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        mt={"150px"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        gap={"20px"}
      >
        <Flex width={"850px"}>
          <Text
            fontFamily={"Geist"}
            fontWeight={700}
            fontSize={"48px"}
            color={"#191E33"}
            textAlign={"center"}
            lineHeight={'60px'}
          >
            Revolutionalizing Healthcare Professional (HCP) exam prep with{" "}
            <Text as="span" color={"#5271FF"}>
              AI-powered
            </Text>{" "}
            learning
          </Text>
        </Flex>
        <Flex width={"400px"}>
          <Text
            fontFamily={"Geist"}
            fontWeight={400}
            fontSize={"18px"}
            color={"#191E33"}
            textAlign={"center"}
          >
            Harness the power of AI to propel your learning into excellence.
            Welcome to the future!
          </Text>
        </Flex>
        <Flex my={"30px"}>
          <Button
            fontFamily={"Geist"}
            fontWeight={500}
            fontSize={"15px"}
            color={"#FDFDFD"}
            bg={"#5271FF"}
            variant={"none"}
          >
            Try Our Practice Exams For Free{" "}
            <Flex pl={"5px"}>
              <FaArrowRight />
            </Flex>
          </Button>
        </Flex>
        <Flex mb={'50px'}>
          <Box width={"1120px"} height={"796.108154296875px"}>
            <Image src={B} alt="pics" width={"100%"} height={"100%"} objectFit={'contain'} />
          </Box> 
        </Flex>
      </Flex>
    </>
  );
};

export default Banner;
