import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let puraniData = {
    income: [],
    expense: []
}
let transaction = (oldData = puraniData, newData) => {
    if (newData.type == 'ADD_TRANSACTION') {
        if (newData.payload.amount > 0) {

            oldData.income.push(newData.payload)
        } else {
            oldData.expense.push(newData.payload)

        }
    } else if (newData.type == 'DELETE_INCOME') {
        oldData.income.splice(newData.payload, 1)
    } else if (newData.type == 'DELETE_EXPENSE') {
        oldData.expense.splice(newData.payload, 1)
    } else if (newData.type == "EDIT_INCOME") {
        oldData.income[newData.incomeIndex].amount = newData.editAmount
    } else if (newData.type == "EDIT_EXPENSE") {
        oldData.expense[newData.expenseIndex].amount = newData.editAmount;
    }
    else if (newData.type == 'persist/REHYDRATE') {
        return newData.payload.transaction
    }

    return { expense: [...oldData.expense], income: [...oldData.income] }
}


const persistConfig = {
    key: 'root',
    storage,
}

let bigSection = combineReducers({ transaction });
const persistedReducer = persistReducer(persistConfig, bigSection)


export let myStore = createStore(persistedReducer)
export let persistor = persistStore(myStore)