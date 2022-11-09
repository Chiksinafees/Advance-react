import React from 'react'
import './ExpenseForm.css'

const ExpenseForm =() =>{

   const submitHandler=(e)=>{
      e.preventDefault()
      console.log(e.target.value)
   }

   return (
    <form>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
           <label>Title</label>
           <input type='text'  onChange={submitHandler}/>
        </div>
        <div className="new-expense__control">
           <label>Amount</label>
           <input type='number' min="0.01"  step="0.01"  onChange={submitHandler} />
        </div>
        <div className="new-expense__control">
           <label>Date</label>
           <input type='date' min='2022-00-01' max='2022-11-31'  onChange={submitHandler} />
        </div>
        <div className="new-expense__actions">
           <button>Add Expense</button>
        </div>
     </div>
    </form>
   )
}

export default ExpenseForm 