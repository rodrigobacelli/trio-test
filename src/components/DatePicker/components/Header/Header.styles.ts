import {
  styled,
  BoxProps,
  Box,
  IconButton,
  IconButtonProps,
  Typography,
  TypographyProps,
} from '@mui/material'

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  color: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const NavContainer = styled(Box)<BoxProps>(({ theme }) => ({
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'row',

  '& > *:not(:last-child)': {
    marginRight: 8,
  },
}))

export const NavButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  color: theme.palette.common.white,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: theme.palette.common.white,
  borderRadius: 20,
  width: 52,
  height: 52,
  transition: 'all 0.2s ease',

  '&:disabled': {
    borderColor: theme.palette.grey[500],
    color: theme.palette.grey[500],
    opacity: 0.5,
  },
}))

export const CaptionsContainer = styled(Box)<BoxProps>(({ theme }) => ({
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
}))

export const Month = styled(Typography)<TypographyProps>(() => ({
  fontSize: 34,
  fontWeight: 800,
  lineHeight: 1.1,
}))

export const Year = styled(Typography)<TypographyProps>(() => ({
  fontSize: 16,
  lineHeight: 1.5,
  fontWeight: 600,
  opacity: 0.5,
}))
