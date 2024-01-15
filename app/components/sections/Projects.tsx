"use client";

import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
	return (
		<Box id='projects' py={20} bg='gray.50'>
			<Container maxW={"7xl"}>
				<Heading mb={10}>Featured Projects</Heading>
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
					{PROJECTS.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
}
