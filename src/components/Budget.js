import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, remaining, dispatch } = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);

    const handleChange = (e) => {
        if(e.target.value > 20000){
            alert("Budget should not be more than 20,000");
            return false;
        } 

        let spending = budget - remaining;
        if(e.target.value < spending){
            alert("Budget should me higher than Spending")
            return false;
        }

        setNewBudget(e.target.value)
        return true;
    }

    return (
        <div className='alert alert-secondary'>
            <label>Budget: </label>
            <input
                required='required'
                type='number'
                id='budget'
                value={newBudget}
                max='20000'
                step='10'
                onChange={handleChange}>
            </input>
        </div>
    );
};
export default Budget;
