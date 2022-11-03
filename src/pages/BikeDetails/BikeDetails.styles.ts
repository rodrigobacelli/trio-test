import { Box, BoxProps, Card, CardProps, styled } from '@mui/material'

export const Content = styled(Box)<BoxProps>(() => ({
  padding: '0 100px 44px',
  position: 'relative',
  marginTop: 32,
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: 24,
}))

export const DetailsContainer = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  padding: 34,
}))

export const OverviewContainer = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  padding: 34,
  maxHeight: 200,
}))

export const PriceRow = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))
