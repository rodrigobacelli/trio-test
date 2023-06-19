import * as React from 'react'
import { CaptionsContainer, NavButton, Container, Month, NavContainer, Year } from './Header.styles'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { CaptionProps, useNavigation as useCaptionsNavigation } from 'react-day-picker'
import { format } from 'date-fns'

const Header = ({ displayMonth, id }: CaptionProps) => {
  const { goToMonth, nextMonth, previousMonth } = useCaptionsNavigation()
  return (
    <Container id={id}>
      <CaptionsContainer>
        <Month>{format(displayMonth, 'LLLL')}</Month>
        <Year>{format(displayMonth, 'yyyy')}</Year>
      </CaptionsContainer>
      <NavContainer>
        <NavButton
          disabled={!previousMonth}
          onClick={() => previousMonth && goToMonth(previousMonth)}
          aria-label='Previous Month'
          role='navigation'
        >
          <ChevronLeft />
        </NavButton>
        <NavButton
          disabled={!nextMonth}
          onClick={() => nextMonth && goToMonth(nextMonth)}
          aria-label='Next Month'
          role='navigation'
        >
          <ChevronRight />
        </NavButton>
      </NavContainer>
    </Container>
  )
}

export default Header
