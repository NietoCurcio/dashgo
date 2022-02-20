import { Box, Flex, Spinner } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { UsersTable } from '../../components/UsersTable'
import { useMediaQueryContext } from '../../contexts/MediaQueryContext'
interface ReturnUseMediaQueryContext {
  isMobile: boolean
  isLoading: boolean
}

export default function UserList() {
  const { isMobile, isLoading } =
    useMediaQueryContext() as ReturnUseMediaQueryContext

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  if (isLoading)
    return (
      <Flex alignItems="center" justifyContent="center" w="100vw" h="100vh">
        <Spinner color="pink.500" size="xl" />
      </Flex>
    )

  return (
    <Box>
      <Header isMobile={isMobile} />
      <Flex my="6">
        <Sidebar isMobile={isMobile} />

        <UsersTable isMobile={isMobile} />
      </Flex>
    </Box>
  )
}
