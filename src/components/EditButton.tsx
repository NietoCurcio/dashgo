import { Button, Icon, Text } from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri'

export function EditButton() {
  return (
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
      <Icon as={RiPencilLine} fontSize="16" /> <Text ml="2">Editar</Text>
    </Button>
  )
}
