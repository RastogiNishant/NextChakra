'use client'

import {
  Box,
  Heading,
  Text,
  HStack,
  Circle,
  Flex,
} from '@chakra-ui/react'

interface ExperienceItemProps {
  role: string
  company: string
  duration: string
  description: string
}

export function ExperienceItem({ role, company, duration, description }: ExperienceItemProps) {
  return (
    <Flex gap={4}>
      <Circle size="12px" bg="teal.500" mt={2} />
      <Box flex={1}>
        <Heading size="md" mb={2}>{role}</Heading>
        <HStack spacing={2} color="gray.600" mb={2}>
          <Text fontWeight="bold">{company}</Text>
          <Text>•</Text>
          <Text>{duration}</Text>
        </HStack>
        <Text color="gray.600">{description}</Text>
      </Box>
    </Flex>
  )
}