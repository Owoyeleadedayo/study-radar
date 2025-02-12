import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const Faqs = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        gap={"20px"}
      >
        <Flex>
          <Text
            fontFamily={"Geist"}
            fontWeight={800}
            fontSize={"40px"}
            color={"#191E33"}
          >
            FAQS
          </Text>
        </Flex>
        <Flex>
          <Text
            fontFamily={"Geist"}
            fontWeight={400}
            fontSize={"18px"}
            color={"#191E33"}
          >
            Everything you need to know about our services
          </Text>
        </Flex>
        <Flex width={"100%"} px={"100px"}>
          <Accordion width={"100%"} boxShadow={"lg"}>
            <AccordionItem
              p={"10px"}
              borderRadius={"8px"}
              border={"1px solid #E2E8F0"}
            >
              <h2>
                <AccordionButton onClick={() => setIsOpen(!isOpen)}>
                  <Box as="span" flex="1" textAlign="left">
                    <Text
                      fontFamily={"Geist"}
                      fontWeight={600}
                      fontSize={"18px"}
                      color={"#101828"}
                    >
                      What is StudyRadar?
                    </Text>
                  </Box>
                  {isOpen ? (
                    <CiCircleMinus size={24} color="#3182CE" />
                  ) : (
                    <CiCirclePlus size={24} color="#3182CE" />
                  )}
                </AccordionButton>
              </h2>
              {isOpen && (
                <AccordionPanel pb={4}>
                  <Text
                    fontFamily={"Geist"}
                    fontWeight={400}
                    fontSize={"16px"}
                    color={"#747883"}
                  >
                    StudyRadar.ai is an AI-powered platform for students
                    preparing for professional pharmacy and healthcare exams,
                    offering MCQ question banks, voiced OSCE simulations, and
                    advanced learning tools. StudyRadar is another innovative
                    product of St. Juliet Solutions Inc.
                  </Text>
                </AccordionPanel>
              )}
            </AccordionItem>
          </Accordion>
        </Flex>
        <Flex width={"100%"} px={"100px"}>
          <Accordion width={"100%"} boxShadow={"lg"}>
            <AccordionItem
              px={"25px"}
              py={"15px"}
              borderRadius={"8px"}
              border={"1px solid #E2E8F0"}
            >
              <Flex alignItems="center" justifyContent="space-between">
                <Text
                  fontFamily={"Geist"}
                  fontWeight={500}
                  fontSize={"18px"}
                  color={"#101828"}
                >
                  How does{" "}
                  <Text
                    as={"span"}
                    fontFamily={"Geist"}
                    fontWeight={700}
                    fontSize={"18px"}
                    color={"#101828"}
                  >
                    StudyRadar
                  </Text>{" "}
                  help me pass my exam?
                </Text>
                <CiCirclePlus size={24} color="#3182CE" />
              </Flex>
              <AccordionPanel pb={4}>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={400}
                  fontSize={"16px"}
                  color={"#747883"}
                >
                  StudyRadar.ai is an AI-powered platform for students preparing
                  for professional pharmacy and healthcare exams, offering MCQ
                  question banks, voiced OSCE simulations, and advanced learning
                  tools. StudyRadar is another innovative product of St. Juliet
                  Solutions Inc.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
        <Flex width={"100%"} px={"100px"}>
          <Accordion width={"100%"} boxShadow={"lg"}>
            <AccordionItem
              px={"25px"}
              py={"15px"}
              borderRadius={"8px"}
              border={"1px solid #E2E8F0"}
            >
              <Flex alignItems="center" justifyContent="space-between">
                <Text
                  fontFamily={"Geist"}
                  fontWeight={500}
                  fontSize={"18px"}
                  color={"#101828"}
                >
                  Can I try{" "}
                  <Text
                    as={"span"}
                    fontFamily={"Geist"}
                    fontWeight={700}
                    fontSize={"18px"}
                    color={"#101828"}
                  >
                    StudyRadar
                  </Text>{" "}
                  for free?
                </Text>
                <CiCirclePlus size={24} color="#3182CE" />
              </Flex>
              <AccordionPanel pb={4}>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={400}
                  fontSize={"16px"}
                  color={"#747883"}
                ></Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
        <Flex width={"100%"} px={"100px"}>
          <Accordion width={"100%"} boxShadow={"lg"}>
            <AccordionItem
              px={"25px"}
              py={"15px"}
              borderRadius={"8px"}
              border={"1px solid #E2E8F0"}
            >
              <Flex alignItems="center" justifyContent="space-between">
                <Text
                  fontFamily={"Geist"}
                  fontWeight={500}
                  fontSize={"18px"}
                  color={"#101828"}
                >
                  What are the subscription options?
                </Text>
                <CiCirclePlus size={24} color="#3182CE" />
              </Flex>
              <AccordionPanel pb={4}>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={400}
                  fontSize={"16px"}
                  color={"#747883"}
                ></Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
        <Flex width={"100%"} px={"100px"}>
          <Accordion width={"100%"} boxShadow={"lg"}>
            <AccordionItem
              px={"25px"}
              py={"15px"}
              borderRadius={"8px"}
              border={"1px solid #E2E8F0"}
            >
              <Flex alignItems="center" justifyContent="space-between">
                <Text
                  fontFamily={"Geist"}
                  fontWeight={500}
                  fontSize={"18px"}
                  color={"#101828"}
                >
                  What makes{" "}
                  <Text
                    as={"span"}
                    fontFamily={"Geist"}
                    fontWeight={700}
                    fontSize={"18px"}
                    color={"#101828"}
                  >
                    StudyRadar’s
                  </Text>{" "}
                  OSCE simulations unique?
                </Text>
                <CiCirclePlus size={24} color="#3182CE" />
              </Flex>
              <AccordionPanel pb={4}>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={400}
                  fontSize={"16px"}
                  color={"#747883"}
                ></Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
        <Flex width={"100%"} px={"100px"}>
          <Accordion width={"100%"} boxShadow={"lg"}>
            <AccordionItem
              px={"25px"}
              py={"15px"}
              borderRadius={"8px"}
              border={"1px solid #E2E8F0"}
            >
              <Flex alignItems="center" justifyContent="space-between">
                <Text
                  fontFamily={"Geist"}
                  fontWeight={500}
                  fontSize={"18px"}
                  color={"#101828"}
                >
                  What is the “Future of Learning” Suite?
                </Text>
                <CiCirclePlus size={24} color="#3182CE" />
              </Flex>
              <AccordionPanel pb={4}>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={400}
                  fontSize={"16px"}
                  color={"#747883"}
                ></Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </>
  );
};

export default Faqs;
