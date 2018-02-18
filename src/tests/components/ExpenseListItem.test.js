import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses'


test('should render ExpenseListItem correctly', () => {
  // const expense = expenses[0]
  // const { id, description, amount, createdAt } = expenses[0]
  // const wrapper = shallow(<ExpenseListItem id={expense.id} description={expense.description} amount={expense.amount} createdAt={expense.createdAt} />)
  const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
  // const wrapper = shallow(<ExpenseListItem id={id} description={description} amount={amount} createdAt={createdAt} />)
  expect(wrapper).toMatchSnapshot();
})
