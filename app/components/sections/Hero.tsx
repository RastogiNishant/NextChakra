'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { CONTACT_INFO } from '@/lib/constants'

export default function Hero() {
  return (
    <Container maxW={'7xl'} id="about">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text as={'span'} position={'relative'}>
              Hi, I'm Nishant Rastogi
            </Text>
            <br />
            <Text as={'span'} color={'teal.400'}>
              Full Stack Developer
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            With over 10 years of experience in full-stack development, I specialize in building scalable web applications
            and solving complex technical challenges. I've worked with clients ranging from startups to large enterprises.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              as="a"
              href={`mailto:${CONTACT_INFO.email}`}
              size={'lg'}
              leftIcon={<FaEnvelope />}>
              Contact Me
            </Button>
            <Button
              as="a"
              href={CONTACT_INFO.linkedin}
              target="_blank"
              size={'lg'}
              leftIcon={<FaLinkedin />}
              colorScheme="linkedin">
              LinkedIn
            </Button>
            <Button
              as="a"
              href={CONTACT_INFO.github}
              target="_blank"
              size={'lg'}
              leftIcon={<FaGithub />}
              colorScheme="gray">
              GitHub
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Nishant Rastogi'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src="/profile.jpg"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}