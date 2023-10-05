import { useState } from "react"
import { FormControl, FormLabel, Input, ButtonGroup, Button } from "@chakra-ui/react"
import { Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel} from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
export default function GeneralInfo({ updateResume }) {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        link: "",
    })


    const handleChange = (e) => {
        const {id, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }

    const handleSubmit = () => {
        updateResume(formData)
    }

    const handleCancel = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            link: "",
        })
    }

    return (
        <>
            <Accordion allowToggle  >
                <AccordionItem>
                    <h1>
                        <AccordionButton>
                            General Info
                            <AccordionIcon />
                        </AccordionButton >
                    </h1>
                    <AccordionPanel pb={4}>
                        <FormControl >
                            <FormLabel htmlFor="name">Name:</FormLabel>
                            <Input type="text" id="name" value={formData.name} onChange={handleChange} />
                            <FormLabel htmlFor="email">Email:</FormLabel>
                            <Input type="text" id="email" value={formData.email} onChange={handleChange} />
                            <FormLabel htmlFor="phone">Phone:</FormLabel>
                            <Input type="text" id="phone" value={formData.phone} onChange={handleChange} />
                            <FormLabel htmlFor="link">Link:</FormLabel>
                            <Input type="text" id="link" value={formData.link} onChange={handleChange} />
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

