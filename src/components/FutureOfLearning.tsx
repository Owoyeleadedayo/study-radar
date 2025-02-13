import { Box, Button, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import R1 from '../assets/images/robot.png'
import R2 from "../assets/images/group.png";

const FutureOfLearning = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        bgGradient="linear(to-b, #F8F9FF, #CFD7FB)"
        p={"100px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          width={"884px"}
          height={"676px"}
          bgColor={"#293776"}
          p={"80px"}
          borderTopRightRadius={"25px"}
          borderTopLeftRadius={"130px"}
          borderBottomLeftRadius={"25px"}
          borderBottomRightRadius={"130px"}
          gap={"10px"}
          position={"relative"} 
          overflow={"visible"} 
        >
          <Flex
            width={"531px"}
            height={"528px"}
            direction={"column"}
            gap={"15px"}
          >
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={700}
                fontSize={"40px"}
                color={"#FDFDFD"}
              >
                The Future of Learning – AI-Powered Study Tools
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"10px"}>
              <Flex>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={400}
                  fontSize={"18px"}
                  color={"#FDFDFD"}
                >
                  At <Text as={"span"}>StudyRadar.ai,</Text> we go beyond
                  traditional study methods with our Future of Learning suite.
                  This innovative feature enhances learning through AI-driven
                  tools, including:
                </Text>
              </Flex>
              <Flex pl={"20px"}>
                <UnorderedList>
                  <ListItem
                    fontFamily={"Geist"}
                    fontWeight={400}
                    fontSize={"18px"}
                    color={"#FDFDFD"}
                  >
                    Anki Card Generator: Automatically creates spaced-repetition
                    flashcards from study materials.
                  </ListItem>
                  <ListItem
                    fontFamily={"Geist"}
                    fontWeight={400}
                    fontSize={"18px"}
                    color={"#FDFDFD"}
                  >
                    Flash Card Generator: Generates flashcards from text
                    documents, PDFs, or recorded videos.
                  </ListItem>
                  <ListItem
                    fontFamily={"Geist"}
                    fontWeight={400}
                    fontSize={"18px"}
                    color={"#FDFDFD"}
                  >
                    AI-Powered Study Assistance: Extracts key concepts and
                    summaries from materials.
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
            <Flex>
              <Button
                bgColor={"#FFFFFF57"}
                fontFamily={"Geist"}
                fontWeight={600}
                fontSize={"18px"}
                color={"#FDFDFD"}
              >
                Coming soon
              </Button>
            </Flex>
          </Flex>

          <Flex
            position={"absolute"}
            right={"-200px"}
            top={"50%"}
            transform={"translateY(-50%)"}
            width={"auto"}
            zIndex={2}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box
              width={"450.83891758652237px"}
              height={"290.68702453769185px"}
              display={"flex"}
              position={"relative"}
              zIndex={2}
              mt={'200px'}
            >
              <Image
                src={R1}
                width={"100%"}
                height={"100%"}
                objectFit={"contain"}
              />
            </Box>

            <Box
              width={"450.83890914514865px"}
              height={"290.6870190949545px"}
              position={"relative"}
              display={"flex"}
              top={"-60px"}
              left={"20px"}
            >
              <Image
                src={R2}
                width={"100%"}
                height={"100%"}
                objectFit={"contain"}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default FutureOfLearning;
