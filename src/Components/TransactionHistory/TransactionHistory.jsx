import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './TransactionHistory.css'

export const TransactionHistory = () => {
    let trHistory = useSelector((store) => {
        return store.transaction;
    });

    let dispatch = useDispatch()
    return (
        <div className='t-history-box'>
            <div className='t-h-text'>
                <h2>
                    Transaction History
                </h2>
            </div>
            <hr className='hr-line' />
            <div className='transaction-list'>
                <ul>
                    {trHistory.expense.map((expenses, expenseIndex) => {
                        return <li className='expense-list'>
                            <button className='expense-delete-btn'>
                                <img src='delete.png' onClick={
                                    () => {
                                        dispatch({
                                            type: 'DELETE_EXPENSE',
                                            payload: expenseIndex
                                        })

                                    }
                                } />
                            </button>
                            {expenses.description}
                            <span>{"$" + expenses.amount}</span>

                            <button className='expense-edit-btn'>
                                <img src='edit.png'
                                    onClick={
                                        () => {
                                            let editAmount = prompt('enter a number');
                                            dispatch({
                                                type: "EDIT_EXPENSE",
                                                editAmount,
                                                expenseIndex,
                                            })

                                        }}
                                />

                            </button>
                        </li>
                    })
                    }
                    {trHistory.income.map((incomes, incomeIndex) => {
                        return <li className='income-list'>
                            <button className='income-delete-btn'>
                                <img src='delete.png' onClick={
                                    () => {
                                        dispatch({
                                            type: 'DELETE_INCOME',
                                            payload: incomeIndex
                                        })
                                    }
                                } />
                            </button>
                            {incomes.description}
                            <span> {'$+' + incomes.amount}</span>

                            <button className='income-edit-btn'>
                                <img src='edit.png'
                                    onClick={
                                        () => {
                                            let editAmount = prompt('enter a number')
                                            dispatch({
                                                type: "EDIT_INCOME",
                                                editAmount,
                                                incomeIndex
                                            })

                                        }}
                                />
                            </button>
                        </li>
                    })
                    }
                </ul>

            </div>
        </div>
    )
}


// trHistory.expense.map((transaction) => {
//     return <li>
//         {transaction.description}
//         <span> {transaction.amount}</span>
//     </li>
// })

{/* <table>
    {trHistory.map((trd) => {
        return <tr>
            <td>{trd.description}</td>
        </tr>
    })}
</table> */}