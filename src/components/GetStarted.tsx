import { Button, Flex, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const GetStarted = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        bgColor={"#f9f9f9"}
        py={"80px"}
        px={"100px"}
      >
        <Flex
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          bgColor={"#364aa2"}
          direction={"column"}
          gap={"15px"}
          borderRadius={"8px"}
          p={"50px"}
        >
          <Flex>
            <Text
              fontFamily={"Geist"}
              fontWeight={700}
              fontSize={"40px"}
              color={"#ffffff"}
            >
              Get Started Today!
            </Text>
          </Flex>
          <Flex width={"813px"} height={"51px"}>
            <Text
              fontFamily={"Geist"}
              fontWeight={500}
              fontSize={"18px"}
              color={"#ffffff"}
              textAlign={"center"}
              lineHeight={"23px"}
            >
              Prepare with confidence, practice with AI, and pass your exams
              with StudyRadar.ai. Sign up now to experience the next evolution
              in professional exam preparation.
            </Text>
          </Flex>
          <Flex mt={'30px'}>
            <Button
              fontFamily={"Geist"}
              fontWeight={500}
              fontSize={"15px"}
              color={"#FDFDFD"}
              bg={"#5271FF"}
              variant={"none"}
            >
              Get Started{" "}
              <Flex pl={"5px"}>
                <FaArrowRight />
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default GetStarted;
