import { useMediaQuery } from '@chakra-ui/react'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const MediaQueryContext = createContext({})

interface MediaQueryProviderProps {
  children: ReactNode
}

export function MediaQueryProvider({ children }: MediaQueryProviderProps) {
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
