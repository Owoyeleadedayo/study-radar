import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react"

const PrivacyPolicy = () => {
  return (
    <>
      <Flex width={"100%"} height={"100%"} direction={"column"} mt={"90px"}>
        <Flex
          width={"100%"}
          height={"100%"}
          bgColor={"#364aa2"}
          py={"50px"}
          px={"100px"}
        >
          <Text
            fontFamily={"Geist"}
            fontWeight={600}
            fontSize={"48px"}
            color={"#191E33CC"}
          >
            Privacy Policy
          </Text>
        </Flex>
        <Flex
          width={"100%"}
          height={"100%"}
          px={"100px"}
          pt={"50px"}
          pb={"120px"}
          bgColor={"#F9F9F9"}
          direction={"column"}
          gap={"20px"}
        >
          <Flex>
            <Text
              fontFamily={"Geist"}
              fontWeight={600}
              fontSize={"20px"}
              color={"#191E33"}
            >
              Effective Date: February 1st, 2025
            </Text>
          </Flex>
          <Flex direction={"column"} gap={"5px"}>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={700}
                fontSize={"20px"}
                color={"#191E33CC"}
              >
                INTRODUCTION
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                Welcome to
                <Text as={"span"} fontWeight={700} textDecoration={"underline"}>
                  StudyRadar.ai
                </Text>
                Your privacy is important to us. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information
                when you visit our website and use our services.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={"5px"}>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={700}
                fontSize={"20px"}
                color={"#191E33CC"}
                textTransform={"uppercase"}
              >
                Information We Collect
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                We may collect personal information that you provide directly,
                such as your name, email address, and payment details, as well
                as non-personal data, including device information and usage
                statistics.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={"5px"}>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={700}
                fontSize={"20px"}
                color={"#191E33CC"}
                textTransform={"uppercase"}
              >
                How We Use Your Information
              </Text>
            </Flex>
            <Flex direction={"column"}>
              <Flex>
                <Text
                  fontFamily={"Geist"}
                  fontWeight={400}
                  fontSize={"18px"}
                  color={"#191E33"}
                >
                  Your information is used to:
                </Text>
              </Flex>
              <Flex pl={"20px"}>
                <UnorderedList>
                  <ListItem
                    fontFamily={"Geist"}
                    fontWeight={400}
                    fontSize={"18px"}
                    color={"#191E33"}
                  >
                    Lorem ipsum dolor sit amet
                  </ListItem>
                  <ListItem
                    fontFamily={"Geist"}
                    fontWeight={400}
                    fontSize={"18px"}
                    color={"#191E33"}
                  >
                    Consectetur adipiscing elit
                  </ListItem>
                  <ListItem
                    fontFamily={"Geist"}
                    fontWeight={400}
                    fontSize={"18px"}
                    color={"#191E33"}
                  >
                    Integer molestie lorem at massa
                  </ListItem>
                  <ListItem
                    fontFamily={"Geist"}
                    fontWeight={400}
                    fontSize={"18px"}
                    color={"#191E33"}
                  >
                    Facilisis in pretium nisl aliquet
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={"5px"}>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={700}
                fontSize={"20px"}
                color={"#191E33CC"}
                textTransform={"uppercase"}
              >
                Information Sharing and Disclosure
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                We do not sell your personal data. We may share information with
                trusted third-party service providers for operational purposes,
                compliance with legal obligations, or protection of rights.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={"5px"}>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={700}
                fontSize={"20px"}
                color={"#191E33CC"}
                textTransform={"uppercase"}
              >
                Data Security
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                We implement industry-standard measures to protect your data
                from unauthorized access, disclosure, or alteration.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={"5px"}>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={700}
                fontSize={"20px"}
                color={"#191E33CC"}
                textTransform={"uppercase"}
              >
                Your Rights
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                You have the right to access, update, or delete your personal
                information. You may also opt out of communications at any time.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={"5px"}>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={700}
                fontSize={"20px"}
                color={"#191E33CC"}
                textTransform={"uppercase"}
              >
                Cookies and Tracking Technologies
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                We use cookies to enhance your experience. You may modify your
                browser settings to decline cookies.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={"5px"}>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={700}
                fontSize={"20px"}
                color={"#191E33CC"}
                textTransform={"uppercase"}
              >
                Changes to This Policy
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                We reserve the right to update this Privacy Policy at any time.
                We encourage you to review it periodically.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={"5px"}>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={700}
                fontSize={"20px"}
                color={"#191E33CC"}
              >
                Contact Us
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                For inquiries regarding these Terms, contact us at{" "}
                <Text
                  as={"span"}
                  fontWeight={700}
                  textDecoration={"underline"}
                  color={"#5271FF"}
                >
                  support@studyradar.ai
                </Text>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default PrivacyPolicy
