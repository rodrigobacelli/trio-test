import { Box, BoxProps, Button, ButtonProps, styled } from '@mui/material'

export const SuccessContainer = styled(Box)<BoxProps>(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const GoHomeButton = styled(Button)<ButtonProps>(() => ({
  borderRadius: 20,
  fontWeight: 800,
  width: '100%',
  padding: 18,
  marginTop: 16,
}))
