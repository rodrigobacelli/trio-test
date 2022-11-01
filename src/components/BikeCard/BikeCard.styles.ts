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
} from '@mui/material'

export const Container = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  padding: 18,
  width: 400,

  '&:hover': {
    cursor: 'pointer',
    boxShadow: `
        0.6px 0.6px 2.2px rgba(0, 0, 0, 0.02),
        1.3px 1.3px 5.3px rgba(0, 0, 0, 0.028),
        2.5px 2.5px 10px rgba(0, 0, 0, 0.035),
        4.5px 4.5px 17.9px rgba(0, 0, 0, 0.042),
        8.4px 8.4px 33.4px rgba(0, 0, 0, 0.05),
        20px 20px 80px rgba(0, 0, 0, 0.07)
    `,
  },
}))

export const Header = styled(CardHeader)<CardHeaderProps>(() => ({
  paddingTop: 0,
}))

export const ImageContainer = styled(Box)<BoxProps>(() => ({
  padding: '0 73px',
  width: '100%',
}))

export const Name = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.common.black,
  fontSize: 24,
  fontWeight: 800,
  marginTop: 22,
}))

export const Footer = styled(Box)<BoxProps>(() => ({
  paddingTop: 8,
}))

export const PriceText = styled(Typography)<TypographyProps & { component: string }>(
  ({ theme }) => ({
    color: theme.palette.common.black,
    fontSize: 24,
    fontWeight: 800,
  }),
)
