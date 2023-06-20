import { Box, styled, BoxProps } from '@mui/material'
import InfoOutlined from '@mui/icons-material/InfoOutlined'

export const Container = styled(Box)<BoxProps>(() => ({
  position: 'relative',
}))

export const InfoIcon = styled(InfoOutlined)(({ theme }) => ({
  color: theme.palette.grey[500],
}))

export const PriceRow = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))
