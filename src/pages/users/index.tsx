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
  useBreakpointValue,
  useMediaQuery,
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
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

  if (isLoading)
    return (
      <Flex alignItems="center" justifyContent="center" w="100vw" h="100vh">
        <Spinner color="pink.500" size="xl" />
      </Flex>
    )

  return (
    <Box>
      <Header isMobile={isMobile} />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={['4', '4', '6']}>
        <Sidebar isMobile={isMobile} />

        <UsersTable isMobile={isMobile} />
      </Flex>
    </Box>
  )
}
