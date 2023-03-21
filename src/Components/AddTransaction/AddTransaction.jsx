import React from 'react'
import './AddTransaction.css'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';


export const AddTransaction = () => {
    
    let {register,handleSubmit,formState:{errors}} = useForm();
    let dispatch = useDispatch()
    const saveTransaction =(transactionFound)=>{
        localStorage.setItem('transactionFund',transactionFound);
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transactionFound
        });
    }


  return (
    <div className='add-transaction-box'>
        <div className='add-tr-textbox'>
            <h2 className='add-tr-text'>Add New Transaction</h2>
        </div>
        <form onSubmit={handleSubmit(saveTransaction)}>

        <div className='description-box'>
            <h3>Description</h3>
            <input type='text' placeholder='Detail of Transaction'
                {...register('description',{required:true})}
            />
        </div>
        <div className='transaction-box'>
            <h3>Transaction Amount</h3>
            <input type='number' placeholder='Value of Transaction'
                {...register('amount',{required:true})}

            />
        </div>
        <div className='add-button'>
            <button type='submit'>
                Add Transaction
            </button>
        </div>
        </form>
    </div>
  )
}
