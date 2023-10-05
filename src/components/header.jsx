import { Box, Heading } from "@chakra-ui/react"

export default function Header() {
    return (
        <>
            <header>
                <Box  p={5}
                alignItems={"center"}
                justifyContent={"center"}
                display={{ base: "flex", lg:"flex"}}
                >
                <Heading as={"h1"} size={"2xl"}>Make your resume</Heading>
                </Box>
            </header>
        </>
    )
}