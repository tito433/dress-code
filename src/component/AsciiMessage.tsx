import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

import { setValue } from 'src/inputSlice';
export default function AsciiMessage() {
    const dispatch = useDispatch();
    const inputText = useSelector((state: RootState) => state.memory.value)
    const onInputChange =(value:string)=>{
        dispatch(setValue(value));
    }
    
    return (
        <div className="sect">
            <label className='heading'>The message</label>
            <div className='AsciiMessage'>
                <textarea
                    value={inputText}
                    onChange={(e) => onInputChange(e.target.value)}
                    placeholder="Enter your message"
                />
            </div>
        </div>
    );
}