import {
  Button,
  Input as i,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useUser } from '../services/hooks/useUser'
import { Input } from './Form/Input'

interface ModalEditUserProps {
  userId: string
  isOpen: boolean
  onClose: () => void
}

// export function ModalEditUser({ isOpen, user, onClose }: ModalEditUserProps) {
export function ModalEditUser({ isOpen, onClose, userId }: ModalEditUserProps) {
  const { data, isLoading, isFetching } = useUser(userId)

  const [state, setState] = useState({
    name: '',
    email: '',
    createdAt: '',
  })

  useEffect(() => {
    if (data)
      setState({
        name: data.name,
        email: data.email,
        createdAt: data.createdAt,
      })
  }, [data])

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    setState({ ...state, [target.name]: target.value })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay zIndex={10} />
      <ModalContent bgColor="#333" color="#f4f4f4" m={[4, 4, 0]}>
        <ModalHeader>
          Editar usuário{' '}
          {!isLoading && isFetching && (
            <Spinner size="sm" color="gray.500" ml="4" />
          )}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isLoading ? (
            <Spinner color="purple.400" />
          ) : (
            <VStack>
              <Input
                name="name"
                value={state.name}
                onChange={(event) => handleChange(event)}
              />
              <Input
                name="email"
                value={state.email}
                onChange={(event) => handleChange(event)}
              />
              <Input
                name="createdAt"
                value={state.createdAt}
                onChange={(event) => handleChange(event)}
              />
            </VStack>
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="pink" variant="outline" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="purple">Editar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    // update from mutation responses, final aula de mutations
  )
}
