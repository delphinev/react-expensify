import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense, startRemoveExpense, startEditExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  constructor (props) {
    super(props)
  }
  onRemove = () => {
    this.props.startRemoveExpense({id: this.props.expense.id})
    this.props.history.push('/')
  }
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <ExpenseForm 
          expense={this.props.expense}
          // onSubmit={(expense) => {
          //   this.props.dispatch(editExpense(this.props.expense.id, expense))
          //   this.props.history.push('/')
          // }}
          onSubmit={this.onSubmit}
        />
  
        {/* <button onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }))
          props.history.push('/')
        }}> */}
        <button 
          onClick={this.onRemove}
        >
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense)),
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
