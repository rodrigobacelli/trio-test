import {
  Box,
  Card,
  CardHeader,
  CardHeaderProps,
  CardProps,
  styled,
  Typography,
  BoxProps,
  TypographyProps,
  Button,
  ButtonProps,
} from '@mui/material'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import InfoOutlined from '@mui/icons-material/InfoOutlined'

interface BikeImageProps extends BoxProps {
  isLoaded: boolean
}

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: 'fixed',
  padding: '18px 24px',
  height: 'fit-content',
  width: '100%',
  left: 0,
  bottom: 0,
}))

export const RentButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 20,
  color: theme.palette.common.black,
  fontWeight: 800,
  width: '100%',
  padding: 18,
  lineHeight: 1.5,
  fontSize: 16,
}))

export const InfoIcon = styled(InfoOutlined)(({ theme }) => ({
  color: theme.palette.grey[500],
}))

export const PriceRow = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const BookingContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  position: 'fixed',
  height: '100%',
  width: '100%',
  left: 0,
  top: 0,
  padding: '40px 24px',
}))

export const BookingHeader = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
}))
