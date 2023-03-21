import './App.css';
import { AddTransaction } from './Components/AddTransaction/AddTransaction';
import { Header } from './Components/Header/Header';
import { IncomeExpense } from './Components/IncomeExpense/IncomeExpense';
import { TransactionHistory } from './Components/TransactionHistory/TransactionHistory';

function App() {
  return (

    <>

        <Header />
        <div className='transaction-tab'>
          <IncomeExpense />
          <TransactionHistory />
          <AddTransaction />
        </div>
    </>
  );
}

export default App;
