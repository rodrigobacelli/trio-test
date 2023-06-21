import {
  Box,
  Card,
  CardProps,
  styled,
  BoxProps,
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
  SwipeableDrawer,
  SwipeableDrawerProps,
} from '@mui/material'
import { InfoOutlined, CalendarMonth } from '@mui/icons-material'

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

export const BikePrice = styled(Box)<BoxProps>(() => ({
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

export const SuccessContainer = styled(Card)<CardProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  bgColor: theme.palette.common.white,
  padding: '24px 18px',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const DatePickerButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderColor: theme.palette.grey['500'],
  borderRadius: 30,
  padding: '18px 24px',
  marginTop: 8,
  textTransform: 'none',
  color: theme.palette.common.black,
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: 16,
  lineHeight: 1.5,
}))

export const BookingButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 20,
  padding: '18px 0',
  marginTop: 30,
  textTransform: 'none',
  color: theme.palette.common.white,
  fontWeight: 800,
}))
