'use client'

import {
  Box,
  Container,
  Heading,
  VStack,
} from '@chakra-ui/react'
import { ExperienceItem } from '@/components/ui/ExperienceItem'
import { EXPERIENCES } from '@/lib/constants'

export default function Experience() {
  return (
    <Box id="experience" py={20}>
      <Container maxW={'7xl'}>
        <Heading mb={10}>Professional Experience</Heading>
        <VStack spacing={8} align="stretch">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </VStack>
      </Container>
    </Box>
  )
}