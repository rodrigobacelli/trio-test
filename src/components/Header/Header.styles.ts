import { Box, Button, ButtonProps, styled, Typography } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flex: 1,
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  position: 'absolute',
  height: 275,
  left: 0,
  top: 0,
  padding: '44px 100px',
  borderBottomLeftRadius: theme.shape.borderRadius * 2,
  borderBottomRightRadius: theme.shape.borderRadius * 2,
  zIndex: -1,
}))

export const Title = styled(Typography)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.white,
  textTransform: 'none',
  fontSize: 48,
  fontWeight: 'bold',
}))

export const LoginButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.white,
  borderRadius: 16,
  textTransform: 'none',
  fontSize: 16,

  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}))

export const SignUpButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.black,
  borderRadius: 16,
  textTransform: 'none',
  fontSize: 16,
  padding: '14px 20px',
  marginLeft: 30,

  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}))
