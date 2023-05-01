import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    

  return (
    <div className='alert alert-secondary'> Currency {
      <select name="currency" id="currency" className="currency-menu"
        onChange={event=>changeCurrency(event.target.value)}
        style={{backgroundColor: 'lightgreen', color: 'azure'}}>
        <option value="£">$ Dollar</option>
        <option value="₹">₹ Ruppee</option>
        <option value="€">€ Euro</option>
        <option value="CAD">£ Pound</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;