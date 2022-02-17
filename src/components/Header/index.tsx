import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { Notifications } from './Notifications'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  })
  // for lg+ will be true, for smaller screens than lg (62 em) will be false
  // i.e. base from 0em upwards, lg from 62em upwards

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWide && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          display="flex"
          alignItems="center"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      <Logo />

      {isWide && <Search />}

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isWide} />
      </Flex>
    </Flex>
  )
}
