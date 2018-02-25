// export const getExpensesTotal = (expenses) => {
//   const amounts = [] 
//   expenses.map((expense) => amounts.push(expense.amount))
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   return amounts.reduce(reducer)
// }

export default (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value , 0)
};
