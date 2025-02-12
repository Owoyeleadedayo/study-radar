import { Button, Flex, Text } from "@chakra-ui/react"

const CurrentPlans = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        gap={"20px"}
        direction={"column"}
        px={"50px"}
      >
        <Flex>
          <Text
            fontFamily={"Geist"}
            fontWeight={600}
            fontSize={"20px"}
            color={"#191E33"}
          >
            CURRENT PLANS
          </Text>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"} gap={"20px"}>
          <Flex
            width={"315px"}
            height={"310px"}
            bg={"#FFFFFF"}
            p={"20px"}
            justifyContent={"space-between"}
            borderRadius={"8px"}
            boxShadow={"lg"}
            direction={"column"}
            gap={"15px"}
          >
            <Flex direction={"column"} gap={"5px"}>
              <Flex>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={700}
                  fontSize={"22px"}
                  color={"#191D23"}
                >
                  Evaluating Exam
                </Text>
              </Flex>
              <Flex>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={400}
                  fontSize={"16px"}
                  color={"#64748B"}
                >
                  Question Bank with Free Mock
                </Text>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={"40px"}>
              <Flex align={"center"}>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#191E33"}
                >
                  CAD
                </Text>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={600}
                  fontSize={"56px"}
                  color={"#191E33"}
                  mt={"5px"}
                  mx={"5px"}
                >
                  25
                </Text>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#191E33"}
                >
                  + GST{" "}
                  <Text as={"span"} fontWeight={300} color={"#191E33"}>
                    / Month
                  </Text>
                </Text>
              </Flex>
              <Flex>
                <Button
                  width={"100%"}
                  fontFamily={"Geist"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#5271FF"}
                  variant={"none"}
                  bgColor={"none"}
                  border={"1px solid #5271FF"}
                >
                  Get Started Now
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            width={"315px"}
            height={"310px"}
            bg={"#191E33"}
            p={"20px"}
            justifyContent={"space-between"}
            borderRadius={"8px"}
            boxShadow={"lg"}
            direction={"column"}
            gap={"15px"}
          >
            <Flex direction={"column"} gap={"5px"}>
              <Flex>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={700}
                  fontSize={"22px"}
                  color={"#FFFFFF"}
                >
                  Multiple Choice (MCQ) Exam
                </Text>
              </Flex>
              <Flex>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={400}
                  fontSize={"16px"}
                  color={"#FFFFFF"}
                >
                  Question Bank with Free Mock
                </Text>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={"30px"}>
              <Flex align={"center"}>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#FFFFFF"}
                >
                  CAD
                </Text>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={600}
                  fontSize={"56px"}
                  color={"#FFFFFF"}
                  mt={"5px"}
                  mx={"5px"}
                >
                  30
                </Text>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#FFFFFF"}
                >
                  + GST{" "}
                  <Text as={"span"} fontWeight={300} color={"#F9F9F9"}>
                    / Month
                  </Text>
                </Text>
              </Flex>
              <Flex>
                <Button
                  width={"100%"}
                  fontFamily={"Geist"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#FFFFFF"}
                  variant={"none"}
                  bgColor={"#5271FF"}
                >
                  Get Started Now
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            width={"315px"}
            height={"310px"}
            bg={"#FFFFFF"}
            p={"20px"}
            justifyContent={"space-between"}
            borderRadius={"8px"}
            boxShadow={"lg"}
            direction={"column"}
            gap={"15px"}
          >
            <Flex direction={"column"} gap={"5px"}>
              <Flex>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={700}
                  fontSize={"22px"}
                  color={"#191D23"}
                >
                  OSCE Exam
                </Text>
              </Flex>
              <Flex>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={400}
                  fontSize={"16px"}
                  color={"#64748B"}
                >
                  AI Powered Practice with Free Mock
                </Text>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={"40px"}>
              <Flex align={"center"}>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#191E33"}
                >
                  CAD
                </Text>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={600}
                  fontSize={"56px"}
                  color={"#191E33"}
                  mt={"5px"}
                  mx={"5px"}
                >
                  100
                </Text>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#191E33"}
                >
                  + GST{" "}
                  <Text as={"span"} fontWeight={300} color={"#191E33"}>
                    / Month
                  </Text>
                </Text>
              </Flex>
              <Flex>
                <Button
                  width={"100%"}
                  fontFamily={"Geist"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#5271FF"}
                  variant={"none"}
                  bgColor={"none"}
                  border={"1px solid #5271FF"}
                >
                  Get Started Now
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default CurrentPlans
