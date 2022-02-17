import { Stack, Box } from '@chakra-ui/react'
import { PaginationButton } from './PaginationButton'

export function Pagination() {
  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationButton number={1} isCurrent />
        <PaginationButton number={2} />
        <PaginationButton number={3} />
        <PaginationButton number={4} />
        <PaginationButton number={5} />
        <PaginationButton number={6} />
        <PaginationButton number={7} />
        <PaginationButton number={8} />
      </Stack>
    </Stack>
  )
}
