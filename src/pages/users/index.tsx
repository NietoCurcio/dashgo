import { Box, Flex, Spinner, useBreakpointValue } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { UsersTable } from '../../components/UsersTable'
import { useMediaQueryContext } from '../../contexts/MediaQueryContext'
import { useQuery } from 'react-query'
interface ReturnUseMediaQueryContext {
  isMobile: boolean
  isLoading: boolean
}

export default function UserList() {
  /*
  useQuery takes as first argument a key to be referenced later
  it will store data in cache, so that there will be no need to make
  two or more http requests in a small interval of time

  it uses the "stale while revalidate" strategy
  thus, it will provide the last cache to the interface but
  under the hood it will revalidate the data (make an http request)
  if the cache is stale it will update the data while the interface
  is already being shown

  another functionality that comes with react-query is "revalidate on focus",
  react-query will automatically revalidate the data (make an http request)
  when the user comes back to the app window once he has finished
  using another app or tab in the browser

  we can customize those strategies, the default is that as soon as the data comes
  from the API it is already treated as stale data

  it's possible to visualize the state of react-query and its caches 
  through the use of ReactQueryDevtools 
  */
  const { data, isLoading, error } = useQuery(
    'users',
    async () => {
      const response = await fetch('http://localhost:3000/api/users')
      const data = await response.json()

      const users = data.users.map((user: any) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }),
        }
      })

      return users
    },
    { staleTime: 1000 * 5 }
  )

  const mediaQuery = useMediaQueryContext() as ReturnUseMediaQueryContext

  if (mediaQuery.isLoading)
    return (
      <Flex alignItems="center" justifyContent="center" w="100vw" h="100vh">
        <Spinner color="pink.500" size="xl" />
      </Flex>
    )

  return (
    <Box>
      <Header isMobile={mediaQuery.isMobile} />
      <Flex my="6" w="100%" maxWidth={1480} mx="auto" px={['4', '4', '6']}>
        <Sidebar isMobile={mediaQuery.isMobile} />

        <UsersTable
          isMobile={mediaQuery.isMobile}
          isLoading={isLoading}
          error={error}
          data={data}
        />
      </Flex>
    </Box>
  )
}
