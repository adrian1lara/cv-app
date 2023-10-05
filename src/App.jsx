import { Container, Flex } from "@chakra-ui/react"
import { useState } from "react"

import EducationForm from "./components/educationalInfo"
import GeneralInfo from "./components/generalInfo"
import ExperienceForm from "./components/experienceInfo"
import Resume from "./components/resume"
import Header from "./components/header"

function App() {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    link: "",
    experience: [],
    education: [], 
  })

  const updateResume = (data) => {
    
    setResumeData((prevData) => ({
      ...prevData,
      ...data
    }))
  }


  return (
    <>
    <Container 
    display={"flex"} 
    flexDirection={"column"} 
    maxW={"container.lg"}
    bg={"blackAlpha.50"}
    >
      <Header />
      <Flex p={6}>
        <Container maxW="600px">
          <GeneralInfo updateResume={updateResume} />
          <ExperienceForm  updateResume={updateResume} />
          <EducationForm  updateResume={updateResume} />
        </Container>
        <Container >
          <Resume resumeData={resumeData}/>
        </Container>
      </Flex>
    </Container>
    </>
  )
}

export default App
