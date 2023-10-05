import { useState } from "react"

import { FormControl, FormLabel, Input, ButtonGroup, Button, Textarea } from "@chakra-ui/react"
import { Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel} from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
export default function EducationForm({ updateResume }) {

    const [formData, setFormData] = useState({
        school: "",
        degree: "",
        date: "",
        description: "",
    })

    const handleChange = (e) => {
        const {id, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }

    const handleCancel = () => {
        setFormData({
            school: "",
            degree: "",
            date: "",
            description: "",
        })
    }

    const handleSubmit = () => {
        updateResume({education: formData})
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
                                <Button onClick={handleCancel}>Cancel</Button>
                            </ButtonGroup>
                        </FormControl>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
    

}