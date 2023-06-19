import * as React from 'react'
import { CalendarContainer, WeekDay } from './DatePicker.styles'
import { DateRange, DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { format } from 'date-fns'
import Header from './components/Header'

const DatePicker = () => {
  const [range, setRange] = React.useState<DateRange | undefined>()

  return (
    <CalendarContainer>
      <DayPicker
        mode='range'
        components={{
          Caption: Header,
        }}
        formatters={{
          formatWeekdayName: (weekday, options) => (
            <WeekDay>{format(weekday, 'EEEEEE', { locale: options?.locale })}</WeekDay>
          ),
        }}
        selected={range}
        onSelect={setRange}
        showOutsideDays
        fromDate={new Date()}
      />
    </CalendarContainer>
  )
}

export default DatePicker
