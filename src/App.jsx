import { Box } from "@chakra-ui/react"
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
    <Header />
    <Box 
    display={{ base: "flex", lg:"flex"}} 
    flexDirection={{base:"column", lg:"row"}} 
    justifyContent={"center"}
    p={5}
    >
      

        <Box maxW={{ base: "100%", lg: "600px" }}
          w={{ base: "100%", lg:"lg" }}
        >
          <GeneralInfo updateResume={updateResume} />
          <ExperienceForm  updateResume={updateResume} />
          <EducationForm  updateResume={updateResume} />
        </Box>
        <Box ml={{ base: "0", lg: "5" }}>
          <Resume resumeData={resumeData}/>
        </Box>
    </Box>
    </>
  )
}

export default App
