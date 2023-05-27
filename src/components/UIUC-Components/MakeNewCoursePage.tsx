import Head from 'next/head'
import { DropzoneS3Upload } from '~/components/Upload_S3'

import { Montserrat, Inter, Rubik_Puddles, Audiowide } from "next/font/google"

import {
  Card,
  Image,
  Text,
  Title,
  Badge,
  MantineProvider,
  Button,
  Group,
  Stack,
  createStyles,
  FileInput,
  Flex,
  rem,
} from '@mantine/core'

const rubik_puddles = Rubik_Puddles({
  weight: '400',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '700',
  subsets: ['latin'],
});

import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const MakeNewCoursePage = ({ course_name }: { course_name: string }) => {
  const router = useRouter()
  // const { course_name: course_name_param } = router.query

  return (
    <>
      <Head>
        <title>{course_name}</title>
        <meta
          name="description"
          content="The AI teaching assistant built for students at UIUC."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="rubik_puddles.className items-left justify-left; course-page-main flex min-h-screen flex-col">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Link href="/">
            <div className={montserrat.className}>
            <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              UIUC Course <span className="${inter.style.fontFamily} text-[hsl(280,100%,70%)]">AI</span>
            </h2>
            </div>
          </Link>
        </div>
        <div className="items-left container flex flex-col justify-center gap-12 px-20 py-16 ">
          <h5 className="text-5xl font-extrabold tracking-tight text-white xs:text-[5rem]">
            
            <Text className={montserrat.className} variant="gradient" gradient={{ from: 'gold', to: 'white', deg: 20 }} >{course_name}</Text>
            is available, claim this domain.
            
          </h5>
          <Title order={2}></Title>
          <Flex direction="column" align="center" justify="center">
            <Title style={{ color: 'White' }} order={3} p="md">
              To create course, simply upload your course materials and on
              will be created for you!
            </Title>
            <Title style={{ color: 'White' }} order={3} variant="normal">
              The course will be named:
            </Title>
            <Title
              style={{ color: 'White' }}
              order={2}
              p="md"
              variant="gradient"
              weight="bold"
              gradient={{ from: 'gold', to: 'white', deg: 140 }}
            >
              {course_name}
            </Title>
            <DropzoneS3Upload course_name={course_name} />
          </Flex>
        </div>
      </main>
    </>
  )
}

export default MakeNewCoursePage