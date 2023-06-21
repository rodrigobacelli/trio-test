import { styled, BoxProps, Box, Typography, TypographyProps } from '@mui/material'

export const CalendarContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  padding: 24,
  marginLeft: -22,
  marginRight: -22,

  '.rdp': {
    '--rdp-accent-color': theme.palette.primary.main,
    '--rdp-background-color': theme.palette.common.white,
    /* Switch to dark colors for dark themes */
    /* Outline border for focused elements */

    '&-day': {
      color: theme.palette.common.white,
      borderWidth: 1,
      fontWeight: 600,

      '&_today:not(&_selected)': {
        borderColor: theme.palette.common.white,
      },

      '&:hover:not(&_disabled)': {
        color: theme.palette.primary.main,
      },
      '&_selected': {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
      },
    },
  },
}))

export const WeekDay = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.common.white,
  opacity: 0.5,
  fontSize: 16,
  fontWeight: 700,
  lineHeight: 1.5,
  textTransform: 'capitalize',
}))
