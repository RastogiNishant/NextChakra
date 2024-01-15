"use client";

import {
	Box,
	Stack,
	Heading,
	Text,
	Button,
	Image,
	Flex,
	Link,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { StaticImageData } from "next/image";

const githubLink = "https://github.com/RastogiNishant";

export interface ProjectCardProps {
	title: string;
	description: string;
	image: StaticImageData;
	demoLink: string;
	techStack: string[];
}

export function ProjectCard({
	title,
	description,
	image,
	demoLink,
	techStack,
}: ProjectCardProps) {
	return (
		<Box bg={"white"} boxShadow={"2xl"} rounded={"md"} overflow={"hidden"}>
			<Image
				h={"200px"}
				w={"full"}
				src={image.src}
				objectFit={"cover"}
				alt={title}
			/>
			<Box p={6}>
				<Stack spacing={2}>
					<Heading fontSize={"2xl"}>{title}</Heading>
					<Text color={"gray.500"}>{description}</Text>
					<Flex wrap='wrap' gap={2}>
						{techStack.map((tech, i) => (
							<Text
								key={i}
								px={2}
								py={1}
								bg='teal.50'
								color='teal.600'
								fontSize='sm'
								fontWeight='medium'
								rounded='md'
							>
								{tech}
							</Text>
						))}
					</Flex>
				</Stack>
				<Stack mt={6} direction={"row"} spacing={4}>
					<Button
						as={Link}
						href={demoLink}
						target='_blank'
						leftIcon={<FaExternalLinkAlt />}
						size='sm'
					>
						Live Demo
					</Button>
					<Button
						as={Link}
						href={githubLink}
						target='_blank'
						leftIcon={<FaGithub />}
						size='sm'
						variant='outline'
					>
						Source Code
					</Button>
				</Stack>
			</Box>
		</Box>
	);
}
