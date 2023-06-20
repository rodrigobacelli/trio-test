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
  IconButton,
  IconButtonProps,
  Drawer,
  SwipeableDrawer,
  SwipeableDrawerProps,
} from '@mui/material'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import InfoOutlined from '@mui/icons-material/InfoOutlined'
import CalendarMonth from '@mui/icons-material/CalendarMonth'

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

export const NavButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  color: theme.palette.common.black,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: theme.palette.grey['500'],
  borderRadius: 20,
  width: 52,
  height: 52,
  transition: 'all 0.2s ease',
  marginRight: 40,
}))

export const BikeOverview = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  // borderRadius: 20,
  padding: 16,
  marginTop: 24,
}))

export const BikePrice = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: 8,
}))

export const CalendarIcon = styled(CalendarMonth)(({ theme }) => ({
  color: theme.palette.primary.main,
  fonstSize: 24,
}))

export const DatePickerDrawer = styled(SwipeableDrawer)<SwipeableDrawerProps>(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.primary.main,
    padding: 24,
    borderRadius: '30px 30px 0px 0px',
  },
}))
