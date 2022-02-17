import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Pagination } from './Pagination'

interface UsersTableProps {
  isMobile: boolean
}

export function UsersTable({ isMobile }: UsersTableProps) {
  return (
    <Box
      flex="1"
      borderRadius={8}
      bg="gray.800"
      p={['6', '8']}
      mx={['6', '8']}
      overflow="hidden"
    >
      <Flex mb="8" justify="space-between" align="center">
        <Heading fontSize={['md', 'lg']} fontWeight="normal">
          Usuários
        </Heading>
        <Link href="/users/create" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
          >
            Criar novo
          </Button>
        </Link>
      </Flex>

      <Table colorScheme="whiteAlpha" overflowX="scroll">
        <Thead>
          <Tr>
            <Th px={['4', '4', '6']} color="gray.300" width="8">
              <Checkbox colorScheme="pink" />
            </Th>
            <Th>Usuário</Th>
            {!isMobile && <Th>Data de cadastro</Th>}
            {!isMobile && <Th w="0"></Th>}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td px={['4', '4', '6']}>
              <Checkbox colorScheme="pink" />
            </Td>
            <Td>
              <Box>
                <Text fontWeight="bold">Felipe Curcio</Text>
                <Text fontSize="sm" color="gray.300">
                  felipe_nieto010@hotmail.com
                </Text>
              </Box>
            </Td>
            {!isMobile && <Td>16 de Fevereiro, 2022</Td>}
            {!isMobile && (
              <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="purple"
                  variant="outline"
                  _hover={{
                    bg: 'gray.900',
                  }}
                  _active={{
                    bg: 'gray.800',
                  }}
                >
                  <Icon as={RiPencilLine} fontSize="16" />{' '}
                  <Text ml="2">Editar</Text>
                </Button>
              </Td>
            )}
          </Tr>
        </Tbody>
      </Table>

      <Pagination />
    </Box>
  )
}
