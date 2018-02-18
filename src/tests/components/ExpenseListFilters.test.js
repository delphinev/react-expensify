import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
})

test('should render ExpenseListFilers correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilers with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot()
})

test('should handle onTextChange', () => {
  const event = {target: {value: 'test'}}
  wrapper.find('input').simulate('change', event)
  expect(setTextFilter).toHaveBeenLastCalledWith('test')
})

test('should handle onSortChange by date', () => {
  wrapper.setProps({
    filters: altFilters
  })
  const event = {target: { value: 'date' }}
  wrapper.find('select').simulate('change', event);
  expect(sortByDate).toHaveBeenLastCalledWith()
})

test('should handle onSortChange by amount', () => {
  wrapper.setProps({
    filters: altFilters
  })
  const event = {target: { value: 'amount' }}
  wrapper.find('select').simulate('change', event);
  expect(sortByAmount).toHaveBeenLastCalledWith()
})

test('should handle onDatesChange', () => {
  const startDate = moment(0).add(4, 'years')
  const endDate = moment(0).add(8, 'years')
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle onFocusChange', () => {
  const calendarFocused = 'endDate'
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})

