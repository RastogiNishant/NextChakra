"use client";

import {
	Box,
	Button,
	Container,
	Heading,
	SimpleGrid,
	Stack,
	Text,
	VStack,
	Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { CONTACT_INFO } from "@/lib/constants";

export default function Contact() {
	return (
		<Box id='contact' py={20} bg={"gray.50"}>
			<Container maxW={"7xl"}>
				<Stack spacing={8} align={"center"}>
					<Heading>Get in Touch</Heading>
					<Text color={"gray.600"} maxW={"3xl"} textAlign={"center"}>
						I'm always interested in hearing about new projects and
						opportunities. Whether you have a question or just want
						to say hi, feel free to reach out!
					</Text>
					<SimpleGrid
						columns={{ base: 1, md: 3 }}
						spacing={10}
						width='full'
					>
						<VStack>
							<Button
								w={"full"}
								as={Link}
								href={`mailto:${CONTACT_INFO.email}`}
								leftIcon={<FaEnvelope />}
							>
								Email
							</Button>
							<Text color={"gray.600"}>{CONTACT_INFO.email}</Text>
						</VStack>
						<VStack>
							<Button
								w={"full"}
								as={Link}
								href={CONTACT_INFO.linkedin}
								target='_blank'
								colorScheme='blue'
								leftIcon={<FaLinkedin />}
							>
								LinkedIn
							</Button>
							<Text color={"gray.600"}>Connect with me</Text>
						</VStack>
						<VStack>
							<Button
								w={"full"}
								as={Link}
								href={CONTACT_INFO.github}
								target='_blank'
								colorScheme='gray'
								leftIcon={<FaGithub />}
							>
								GitHub
							</Button>
							<Text color={"gray.600"}>Check out my repos</Text>
						</VStack>
					</SimpleGrid>
				</Stack>
			</Container>
		</Box>
	);
}
