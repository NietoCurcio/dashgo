import {
  useDisclosure,
  UseDisclosureReturn,
  useMediaQuery,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  ProviderProps,
  useState,
} from 'react'

const MediaQueryContext = createContext({})

export function MediaQueryProvider({ children }: any) {
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)')

  const [isMobile, setIsMobile] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsMobile(isSmallerThan768)
    setIsLoading(false)
  }, [])

  return (
    <MediaQueryContext.Provider value={{ isMobile, isLoading }}>
      {children}
    </MediaQueryContext.Provider>
  )
}

export const useMediaQueryContext = () => useContext(MediaQueryContext)
