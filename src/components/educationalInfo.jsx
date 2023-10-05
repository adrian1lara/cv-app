import { useState } from "react"

import { FormControl, FormLabel, Input, ButtonGroup, Button, Textarea, Box } from "@chakra-ui/react"
import { Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel} from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
export default function EducationForm({ updateResume }) {

    const [formData, setFormData] = useState({
        school: "",
        degree: "",
        date: "",
        description: "",
    })

    const [educationList, setEducationList] = useState([])

    const handleChange = (e) => {
        const {id, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }

    const handleAddEducation = () => {
        if(formData.school && formData.degree && formData.date && formData.description){
            setEducationList([...educationList, formData])
            setFormData({
                school: "",
                degree: "",
                date: "",
                description: "",
            })
        }
    }

    const handleDeleteEducation = (index) => {
        const newEducationList = [...educationList]
        newEducationList.splice(index, 1)
        setEducationList(newEducationList)
    }

    const handleSubmit = () => {
        updateResume({education: educationList})
    }

    return (
        <>
            <Accordion allowToggle>
                <AccordionItem>
                    <h1>
                    <AccordionButton>
                        Education
                        <AccordionIcon />
                    </AccordionButton>
                    </h1>
                    <AccordionPanel pb={4}>
                        <FormControl>
                            <FormLabel htmlFor="school">School</FormLabel>
                            <Input type="text" id="school" value={formData.school} onChange={handleChange}/>
                            <FormLabel htmlFor="degree">Degree</FormLabel>
                            <Input type="text" id="degree" value={formData.degree} onChange={handleChange} />
                            <FormLabel htmlFor="date">Date:</FormLabel>
                            <Input type="text" id="date" value={formData.date} onChange={handleChange}/>
                            <FormLabel htmlFor="description">Description</FormLabel>
                            <Textarea id="description" value={formData.description} onChange={handleChange} />
                            <ButtonGroup spacing={6} marginTop={4}>
                                <Button onClick={handleSubmit}>Submit</Button>
                                <Button onClick={handleAddEducation}>Add</Button>
                            </ButtonGroup>
                            {educationList.length > 0 && (
                                <Box>
                                    <h2>Added Education:</h2>
                                    <ul>
                                        {educationList.map((education, index) => (
                                            <li key={index}>
                                                {education.school} - {education.degree} (
                                                    {education.date}
                                                ) 
                                                <Button ml={2}
                                                onClick={() => handleDeleteEducation(index)}>Delete</Button>
                                            </li>
                                        ))}
                                    </ul>
                                </Box>
                            )}
                        </FormControl>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
    

}