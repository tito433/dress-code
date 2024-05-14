
import * as React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Calendar from '../component/Calendar';
import StringInput from '../component/StringInput';
import { setValue } from '../inputSlice';
import DatePicker from '../component/DatePicker';
import BitPicker from '../component/BitPicker';
//import type { RootState } from '../store';

export default function IndexPage() {
    const dispatch = useDispatch();

    //const inputText = useSelector((state: RootState) => state.inputText.value)

    const onInputChange =(value:string[])=>{
        dispatch(setValue(value));
    }
    return (
        
    <>
        <div className="sect input">
            <label className='heading'>The message</label>
            <StringInput onChange={onInputChange}/>
        </div>
        <div className="sect">
            <label className='heading'>Bit per day</label>
            <BitPicker />
        </div>
        <div className="sect">
            <label className='heading'>Start date</label>
            <DatePicker />
        </div>
        <div className='sect'>
            <Calendar />
        </div>
    </>
    );
}