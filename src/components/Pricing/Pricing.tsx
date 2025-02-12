import { Box, Flex, Image, Stack, Switch, Text } from "@chakra-ui/react";
import P1 from '../../assets/images/prii.png'
import P2 from "../../assets/images/priiri.png";
import CurrentPlans from "./CurrentPlans";
import ComingSoon from "./ComingSoon";

const Pricing = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        gap={"30px"}
        bgGradient="linear(to-b, #F8F9FF, #CFD7FB)"
        p="50px"
      >
        <Flex mt={"100px"}>
          <Text
            fontFamily={"Geist"}
            fontWeight={800}
            fontSize={"40px"}
            color={"#191E33"}
          >
            PRICING
          </Text>
        </Flex>
        <Flex width={"673px"} height={"97px"}>
          <Text
            fontFamily={"Geist"}
            fontWeight={400}
            fontSize={"18px"}
            color={"#191E33"}
            textAlign={"center"}
            lineHeight={"23px"}
          >
            Go premium today and enjoy access to more features. Choose a plan
            that suits you below
          </Text>
        </Flex>
        <Flex pl={"100px"} gap={"30px"}>
          <Stack display={"flex"} direction={"row"}>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={300}
                fontSize={"16px"}
                color={"#191D23"}
              >
                Pay Monthly
              </Text>
            </Flex>
            <Switch
              sx={{
                "span.chakra-switch__track": {
                  bg: "gray.500", // Sets the thumb (toggle circle) color to grey
                },
              }}
            />
          </Stack>
          <Stack direction={"row"}>
            <Flex direction={"column"}>
              <Flex>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={300}
                  fontSize={"16px"}
                  color={"#191D23"}
                >
                  Pay Quaterly
                </Text>
              </Flex>
              <Box>
                <Image
                  src={P2}
                  width={"100%"}
                  height={"100%"}
                  objectFit={"contain"}
                />
              </Box>
            </Flex>
            <Flex>
              <Box>
                <Image
                  src={P1}
                  width={"100%"}
                  height={"100%"}
                  objectFit={"contain"}
                />
              </Box>
            </Flex>
          </Stack>
        </Flex>
        <Flex direction={'column'} gap={'80px'} >
          <CurrentPlans />
          <ComingSoon />
        </Flex>
      </Flex>
    </>
  );
};

export default Pricing;
