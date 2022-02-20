import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine } from 'react-icons/ri'
import { User } from '../services/hooks/useUsers'
import { Pagination } from './Pagination'

interface UsersTableProps {
  isMobile: boolean
  isLoading: boolean
  isFetching: boolean
  error: unknown
  data?: User[]
}

export function UsersTable({
  isMobile,
  isLoading,
  isFetching,
  error,
  data,
}: UsersTableProps) {
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
          Usuários{' '}
          {!isLoading && isFetching && (
            <Spinner size="sm" color="gray.500" ml="4" />
          )}
          {/* isLoading is the first loading, isFetching is a revalidating state */}
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

      {isLoading ? (
        <Flex justify="center">
          <Spinner />
        </Flex>
      ) : error ? (
        <Flex justify="center">
          <Text>Falha ao obter dados dos usuários</Text>
        </Flex>
      ) : (
        <>
          <Table colorScheme="whiteAlpha" overflowX="scroll">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {!isMobile && <Th>Data de cadastro</Th>}
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((user: User) => {
                return (
                  <Tr key={user.id}>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">{user.name}</Text>
                        <Text fontSize="sm" color="gray.300">
                          {user.email}
                        </Text>
                      </Box>
                    </Td>
                    {!isMobile && <Td>{user.createdAt}</Td>}
                  </Tr>
                )
              })}
            </Tbody>
          </Table>

          <Pagination
            totalCountOfRegisters={100}
            currentPage={4}
            onPageChange={() => {}}
          />
        </>
      )}
    </Box>
  )
}
