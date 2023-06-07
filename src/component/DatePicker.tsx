import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { setStartDate } from '../inputSlice';

export default function DatePicker(){
    const dispatch = useDispatch();
    const currDate = useSelector((state: RootState) => new Date(state.memory.startDate))

    const onDayChange =(e) =>{
        const value = e.target.value;
        const updated = new Date(currDate.getFullYear(), currDate.getMonth(), Number(value));
        dispatch(setStartDate(updated.valueOf()));
    }
    const onMonthChange =(e) =>{
        const value = e.target.value;
        const updated = new Date(currDate.getFullYear(), Number(value)-1, currDate.getDate());
        dispatch(setStartDate(updated.valueOf()));
    }
    const onYearChange =(e) =>{
        const value = e.target.value;
        const updated = new Date(Number(value), currDate.getMonth(), currDate.getDate());
        dispatch(setStartDate(updated.valueOf()));
    }
    return(
        <>
            <div className='datePicker'>
                <input type='number' placeholder='DD' size={2} onChange={onDayChange} defaultValue={currDate.getDate()}/>&nbsp;-&nbsp;
                <input type='number' placeholder='MM' size={2} onChange={onMonthChange} defaultValue={currDate.getMonth()+1}/>&nbsp;-&nbsp;
                <input type='number' placeholder='YYYY' size={4} onChange={onYearChange} defaultValue={currDate.getFullYear()}/>
            </div>
        </>
    );
}