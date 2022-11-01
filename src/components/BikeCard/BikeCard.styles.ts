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
}))

export const Header = styled(CardHeader)<CardHeaderProps>(() => ({
  paddingTop: 0,
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
