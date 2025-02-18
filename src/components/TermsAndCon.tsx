import { Flex, Text } from "@chakra-ui/react"

const TermsAndCon = () => {
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
            Terms and Conditions
          </Text>
        </Flex>
        <Flex
          width={"100%"}
          height={"100%"}
          px={"100px"}
          pt={"50px"}
          pb={'120px'}
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
                Acceptance of Terms
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                By accessing or using,{" "}
                <Text as={"span"} fontWeight={700} textDecoration={"underline"}>
                  {" "}
                  StudyRadar.ai,
                </Text>{" "}
                you agree to be bound by these Terms and Conditions. If you do
                not agree, please do not use our services.
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
                Use of Services
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                <Text as={"span"} fontWeight={700} textDecoration={"underline"}>
                  StudyRadar.ai
                </Text>
                provides an AI-powered platform for pharmacy and other medical
                professions board/licensing exam preparation. You agree to use
                our services lawfully and not for any prohibited activities.
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
                User Accounts
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                You may need to create an account to access certain features.
                You are responsible for maintaining the confidentiality of your
                account and password. You agree to notify us immediately of any
                unauthorized use of your account.
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
                Intellectual Property
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33CC"}
              >
                All content, including text, graphics, and software, is the
                property of{" "}
                <Text as={"span"} textDecoration={"underline"}>
                  {" "}
                  StudyRadar.ai
                </Text>{" "}
                and is protected by intellectual property laws. Unauthorized
                reproduction, distribution, or modification is strictly
                prohibited.
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
                Payment and Subscription
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                Certain features may require payment. By subscribing, you agree
                to our billing policies. Payments are non-refundable except
                where required by law.
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
                Limitation of Liability
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                <Text as={"span"} fontWeight={700} textDecoration={"underline"}>
                  StudyRadar.ai
                </Text>
                is provided "as is." We make no warranties, express or implied,
                regarding the accuracy, reliability, or availability of our
                services. We are not liable for any direct, indirect,
                incidental, or consequential damages arising from your use of
                our services.
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
                Termination
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                We reserve the right to suspend or terminate your access if you
                violate these terms or engage in any conduct that we determine
                is harmful to{" "}
                <Text
                  as={"span"}
                  textDecoration={"underline"}
                  fontWeight={700}
                  fontSize={"20px"}
                >
                  StudyRadar.ai
                </Text>{" "}
                or its users.
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
                Governing Law
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                These Terms are governed by the laws of Canada and other
                relevant jurisdictions, including the USA and UK. Any disputes
                shall be resolved in the courts of the applicable jurisdiction.
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
                Changes to Terms
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Geist"}
                fontWeight={400}
                fontSize={"18px"}
                color={"#191E33"}
              >
                We may update these Terms at any time. Continued use of our
                services constitutes acceptance of the revised Terms. We will
                notify users of significant changes where applicable.
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

export default TermsAndCon
