import { Box, Heading } from "@chakra-ui/react"

export default function Header() {
    return (
        <>
            <header>
                <Box  p={5}
                alignItems={"center"}
                w={"container.md"}
                display={"flex"}
                >
                <Heading>Make your resume</Heading>
                </Box>
            </header>
        </>
    )
}