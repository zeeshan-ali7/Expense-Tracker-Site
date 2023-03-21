import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './IncomeExpense.css'


export const IncomeExpense = () => {

  let incomeData = useSelector((store) => {
    return store.transaction.income;
  });


  let currBalance = 0;
  let incomeAmount = 0
  for (let myIncome of incomeData) {
    incomeAmount += parseInt(myIncome.amount);
    currBalance += parseInt(myIncome.amount)
  }

  let expenseData = useSelector((store) => {
    return store.transaction.expense;
  });

  let expenseAmount = 0;
  let styling = {}
  for (let myExpenses of expenseData) {
    expenseAmount += parseInt(myExpenses.amount);
    currBalance += parseInt(myExpenses.amount)

  }
  if (currBalance < 0) {
    styling.display = 'block'
    styling.color = 'red'
  } else {
    styling.display = 'none'
  }


  return (
    <div>
      <div className='current-balance'>
        <p className='cb-text'>current balance</p>
        <h1 className='cb-amount'>{'$' + currBalance + '.00'} </h1>
        <p style={styling}>Your current balance is insufficient</p>
      </div>

      <div className='income-expense-box'>
        <div className='income-expense'>
          <div className='income-box'>
            <h2>Income</h2>
            <h3>{incomeAmount + '.00'}</h3>
          </div>
          <hr />
          <div className='expense-box'>
            <h2>Expense</h2>
            <h3>{expenseAmount + '.00'}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
