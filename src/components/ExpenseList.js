import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'


export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((expense, index) => (
          <ExpenseListItem
            key={index}
            {...expense}
          />
        ))
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

// const mapStateToProps = (state) => {
//   return {
//     expenses: state.expenses,
//     filters: state.filters
//   }
// }

export default connect(mapStateToProps)(ExpenseList);
