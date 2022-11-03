import { Card, styled, CardProps } from '@mui/material'

interface ContainerProps extends CardProps {
  isSelected: boolean
}

export const Container = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<ContainerProps>(({ theme, isSelected }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 14,
  width: 100,
  height: 100,
  padding: 8,
  borderColor: isSelected ? theme.palette.primary.main : theme.palette.grey[500],

  '&:hover': {
    cursor: 'pointer',
  },
}))

// @media (max-width: 767px) {
//   .image-to-select {
//       width: 50px;
//       height: 50px;
//       border-radius: 16px;
//       margin-bottom: 0;
//   }
// }
