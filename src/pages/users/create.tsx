import { Input } from "@/src/components/Form/Input";
import { Header } from "@/src/components/Header";
import { Sidebar } from "@/src/components/Sidebar";
import { Box, Button, Divider, Flex, HStack, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from "react-query";
import { api } from "@/src/services/api";
import { queryClient } from "@/src/services/queryClient";
import { useRouter } from "next/router";


type CreateUserFormData = {
  name?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
};

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome Obrigatório'),
  email: yup.string().required('E-mail Obrigatório').email('E-mail inválido'),
  password: yup.string().required('Password Obrigatório').min(8, 'Minimo de 8 caracteres'),
  password_confirmation: yup.string().oneOf([
    yup.ref('password'),
  ], 'Os campos de password não batem')
})

export default function CreateUser() {
  const router = useRouter()
  
  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        created_at: new Date(),
      }
    })
    return response.data.user;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    }
  })

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  });

  const handleCreateUser: SubmitHandler<Partial<CreateUserFormData>> = async (values) => {
    await createUser.mutateAsync(values);

    router.push('/users');
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <Box as='form' flex="1" borderRadius={8} bg="gray.800" p={['6', "8"]} onSubmit={handleSubmit(handleCreateUser)}>
          <Heading size='lg' fontWeight='normal'>
            Criar usuário
          </Heading>
          <Divider my='6' borderColor='gray.700' />
          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', "8"]} w='100%'>
              <Input  label="Nome completo" {...register('name')} error={errors.name}/>
              <Input type='email' label="E-mail" {...register('email')} error={errors.email}/>
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', "8"]} w='100%'>
              <Input type='password' label="Senha" {...register('password')} error={errors.password}/>
              <Input type='password' label="Confirmar senha" {...register('password_confirmation')} error={errors.password_confirmation}/>
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify={['center' ,'flex-end']}>
            <HStack spacing='4'>
            <Link href='/users' passHref>
              <Button colorScheme="whiteAlpha">Cancelar</Button>
            </Link>  
              <Button type='submit' colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
