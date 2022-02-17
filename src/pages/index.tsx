import { Button, Flex, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormData = {
  email: string
  password: string
}

const SignIn: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const handleSign = handleSubmit(async (data) => {
    const a = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Resolved')
      }, 2000)
    })
    console.log(a)
    console.log(data)
  })

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSign}
      >
        <Stack spacing="4">
          <Input type="email" {...register('email')} label="E-mail" />
          <Input type="password" {...register('password')} label="Senha" />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default SignIn
