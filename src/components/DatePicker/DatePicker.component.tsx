import * as React from 'react'
import { CalendarContainer, WeekDay } from './DatePicker.styles'
import { DateRange, DayPicker, DayPickerRangeProps } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { format } from 'date-fns'
import Header from './components/Header'

export interface DatePickerProps {
  selected?: DayPickerRangeProps['selected']
  onSelect?: (value?: DateRange) => void
}

const DatePicker = ({ selected, onSelect }: DatePickerProps) => {
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
        selected={selected}
        onSelect={onSelect}
        showOutsideDays
        fromDate={new Date()}
      />
    </CalendarContainer>
  )
}

export default DatePicker
