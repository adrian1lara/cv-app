/* eslint-disable react/prop-types */
import { Box, Center, Divider, Flex, Spacer, Text } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export default function Resume({ resumeData }) {

    return (
        <Box> 
            <Center textTransform={"uppercase"} as="b" fontSize={"2xl"}>
                <h1>Resume</h1>
            </Center>
            <Box p={6} boxShadow={"lg"} color="black" minH={'80vh'}  w={"lg"} >
                <Text fontSize="2xl" fontWeight={"semibold"}  textTransform={"capitalize"} textAlign={"center"}>
                    {resumeData.name }
                </Text>
                <Flex alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"} gap={1} mb={3}>
                        <Text>{resumeData.email }</Text>
                        <Text>{resumeData.phone }</Text>
                        <Text>{resumeData.link }</Text>
                </Flex>
                <Text fontSize="md" as={"b"} textTransform={"uppercase"}>Experience</Text>
                <Divider borderWidth={1} borderColor={"black"} />
                {resumeData.experience.map((experience, index) => (
                <Box mb={3} key={index}>
                    <Flex>
                        <Text fontSize={"sm"} as={"b"}> {experience.company }</Text><span> - </span>
                        <Text fontSize={"sm"} as={"b"}>{experience.position }</Text>
                        <Spacer />
                        <Text fontSize={"sm"} as={"b"}> {experience.duration }</Text>
                    </Flex>
                    <Text>{experience.description }</Text>
                </Box>
                ))}
                
                <Text fontSize="md" as={"b"} textTransform={"uppercase"}>Education</Text>
                <Divider borderWidth={1} borderColor={"black"} />
                {resumeData.education.map((education, index) => (
                    <Box key={index}>
                    <Flex>
                        <Text fontSize={"sm"} as={"b"}> {education.school }</Text><span> - </span>
                        <Text fontSize={"sm"} as={"b"}>{education.degree }</Text>
                        <Spacer />
                        <Text fontSize={"sm"} as={"b"}> {education.date }</Text>
                    </Flex>
                    <Text>{education.description }</Text>
                </Box>
                ))}
                
            </Box>
        </Box>
    )
}
