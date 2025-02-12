import { Box, Flex, Image, Text } from "@chakra-ui/react"
import ABI from '../assets/images/abii.png'

const About = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"1400px"}
        justifyContent={'center'}
        alignItems={"center"}
        direction={"column"}
        gap={"30px"}
        bgGradient="linear(to-b, #F8F9FF, #CFD7FB)"
        px="50px"
      >
        <Flex mt={"100px"}>
          <Text
            fontFamily={"Geist"}
            fontWeight={800}
            fontSize={"40px"}
            color={"#191E33"}
          >
            ABOUT US
          </Text>
        </Flex>
        <Flex width={"1092px"} height={"97px"}>
          <Text
            fontFamily={"Geist"}
            fontWeight={400}
            fontSize={"18px"}
            color={"#191E33"}
            lineHeight={"23px"}
          >
            Revolutionizing Exam Preparation with AI-Powered Learning in today’s
            competitive landscape, professional licensing exams for healthcare
            professionals (HCPs), especially the Pharmacy Examining Board of
            Canada (PEBC) exams, have become increasingly challenging. The need
            for innovative, flexible, and effective study tools has never been
            greater. At StudyRadar.ai, we are harnessing the power of artificial
            intelligence to transform the way students prepare for these
            high-stakes exams.
          </Text>
        </Flex>
        <Flex mt={"60px"}>
          <Box width={"1120px"} height={'820px'}>
            <Image
              src={ABI}
              alt="about-img"
              width={"100%"}
              height={"100%"}
              objectFit={"contain"}
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default About
