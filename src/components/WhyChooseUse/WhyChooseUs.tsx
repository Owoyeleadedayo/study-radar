import { Flex, Text } from "@chakra-ui/react"
import Card from "./Card";

const WhyChooseUs = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        bgColor={"#F9F9F9"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        py={"100px"}
        gap={"50px"}
      >
        <Flex>
          <Text
            fontFamily={"Geist"}
            fontWeight={800}
            fontSize={"40px"}
            color={"#191E33"}
          >
            WHY CHOOSE US
          </Text>
        </Flex>
        <Flex>
            <Card />
        </Flex>
      </Flex>
    </>
  );
}

export default WhyChooseUs
