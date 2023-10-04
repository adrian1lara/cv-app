import { useState } from "react"

import { Button, ButtonGroup, FormControl, FormLabel,  Input } from "@chakra-ui/react"
import { Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel} from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
export default function ExperienceForm({ updateResume }) {
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        duration: "",
        description: "",
    })

    const handleChange = (e) => {
        const {id, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }

    const handleSubmit = () => {
        updateResume({experience: formData})
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
                            <Input type="text" id="description" value={formData.description} onChange={handleChange} />
                            <ButtonGroup spacing={6} marginTop={4}>
                                <Button onClick={handleSubmit}>Submit</Button>
                                <Button>Cancel</Button>
                            </ButtonGroup>
                            
                        </FormControl>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}