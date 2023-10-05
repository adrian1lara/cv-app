import { useState } from "react"

import { Button, ButtonGroup, FormControl, FormLabel,  Input, Textarea , Box} from "@chakra-ui/react"
import { Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel} from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
export default function ExperienceForm({ updateResume }) {
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        duration: "",
        description: "",
    })

    const [experienceList, setExperienceList] = useState([]);

    const handleChange = (e) => {
        const {id, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }

    const handleAddExperience = () => {
        if(formData.company && formData.position && formData.duration && formData.description){
            setExperienceList([...experienceList, formData])
            setFormData({
                company: "",
                position: "",
                duration: "",
                description: "",
            })
        }
    }

    const handleDeleteExperience = (index) => {
        const newExperienceList = [...experienceList]
        newExperienceList.splice(index, 1)
        setExperienceList(newExperienceList)
    }

    const handleSubmit = () => {
        updateResume({experience: experienceList})
    }
    return (
        <>
            <Accordion allowToggle>
                <AccordionItem>
                    <h1>
                        <AccordionButton>
                            Experience
                            <AccordionIcon />
                        </AccordionButton>
                    </h1>
                    <AccordionPanel>
                        <FormControl>
                            <FormLabel htmlFor="company">Company:</FormLabel>
                            <Input type="text" id="company" value={formData.company} onChange={handleChange} />
                            <FormLabel htmlFor="position">Position</FormLabel>
                            <Input type="text" id="position" value={formData.position} onChange={handleChange} />
                            <FormLabel htmlFor="duration">Duration</FormLabel>
                            <Input type="text" id="duration" value={formData.duration} onChange={handleChange} />
                            <FormLabel htmlFor="description">Description</FormLabel>
                            <Textarea id="description" value={formData.description} onChange={handleChange} />
                            <ButtonGroup spacing={6} marginTop={4}>
                                <Button onClick={handleAddExperience}>Add</Button>
                                <Button onClick={handleSubmit}>Submit</Button>
                            </ButtonGroup>
                            {experienceList.length > 0 && (
                                <Box>
                                    <h2>Added Experiences:</h2>
                                    <ul>
                                        {experienceList.map((experience, index) => (
                                        <li key={index}>
                                            {experience.company} - {experience.position} (
                                            {experience.duration})
                                            <Button ml={2}
                                            onClick={() => handleDeleteExperience(index)}>
                                            Delete
                                            </Button>
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