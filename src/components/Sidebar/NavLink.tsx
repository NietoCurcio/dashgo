import { Icon, Link, LinkProps, Text } from '@chakra-ui/react'
import { ElementType } from 'react'
import { RiDashboardLine } from 'react-icons/ri'

interface NavLinkProps extends LinkProps {
  icon: ElementType
  children: string
  // ElementType is a component, the difference between ElementType and ReactNode
  // is that <Component /> is a ReactNode and {Component} is a ElementType
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
