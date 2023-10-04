/* eslint-disable react/prop-types */
import { Box, Container } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export default function Resume({ resumeData }) {
    const name = resumeData.name || "";

    return (
        <Container> 
            <h1>Resume</h1>
            <Box p={4} bg="blue.500" color="white"  minH={'80vh'}>
                <p>Name: {name }</p>
                <p>Email: {resumeData.email }</p>
                <p>Phone: {resumeData.phone }</p>
                <h2>Experience:</h2>
                <ul>
                    <li>Company: {resumeData.experience.company }</li>
                    <li>Position: {resumeData.experience.position }</li>
                    <li>Duration: {resumeData.experience.duration }</li>
                    <li>Description: {resumeData.experience.description }</li>
                </ul>
                <h2>Education:</h2>
                <ul>
                    <li>School: {resumeData.education.school }</li>
                    <li>Degree: {resumeData.education.degree }</li>
                    <li>Date: {resumeData.education.date }</li>
                </ul>
            </Box>
        </Container>
    )
}
