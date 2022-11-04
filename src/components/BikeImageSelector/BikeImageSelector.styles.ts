import { Box, styled, BoxProps } from '@mui/material'

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  marginBottom: 30,
  display: 'grid',
  gridTemplateColumns: '100px 1fr',
  gap: 32,

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}))
