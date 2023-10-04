import { Container, Flex } from "@chakra-ui/react"
import { useState } from "react"

import EducationForm from "./components/educationalInfo"
import GeneralInfo from "./components/generalInfo"
import ExperienceForm from "./components/experienceInfo"
import Resume from "./components/resume"

function App() {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: {
      company: "",
      position: "",
      duration: "",
      description: "",
    },
    education: {
      school: "",
      degree: "",
      date: "",
    }
  })

  const updateResume = (data) => {
    
    setResumeData((prevData) => ({
      ...prevData,
      ...data
    }))
  }


  return (
    <>
      <Flex>
        <Container maxW="600px" p={4} >
        <GeneralInfo updateResume={updateResume} />
        <EducationForm  updateResume={updateResume} />
        <ExperienceForm  updateResume={updateResume} />
        </Container>
        <Resume resumeData={resumeData}/>
      </Flex>
    </>
  )
}

export default App
