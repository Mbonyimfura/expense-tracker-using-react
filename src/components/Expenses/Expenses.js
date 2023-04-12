import { useState } from 'react';
import ExpenseList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpensesChart';
const Expenses=(props)=> {
  const [filteredYear,setFilteredYear]=useState('2023')
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)
   
  }
  const filteredExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear
  })
 
  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear}
      onChangeFilter={filterChangeHandler}/>   
      <ExpenseChart expenses={filteredExpenses}/>         
    <ExpenseList items={filteredExpenses}/>
    
    </Card>
  );
}

export default Expenses;