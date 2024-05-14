import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { setBit } from '../inputSlice';

export default function BitPicker() {
    const dispatch = useDispatch();
    const bit = useSelector((state: RootState) => state.memory.bit);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(setBit(Number(value)));
    }
    return (
        <>
            <div className='bitPicker'>
                <label>
                    <div className="radio-label">
                        <input type="radio" name="radio" value="1" checked={bit === 1} onChange={onInputChange}/> Single
                    </div>
                    <div className='bit single'></div>
                </label>
                <label>
                    <div className="radio-label">
                        <input type="radio" name="radio" value="2" checked={bit === 2}  onChange={onInputChange}/> Double
                    </div>
                    <div className='bit double'></div>
                </label>
                <label>
                    <div className="radio-label">
                        <input type="radio" name="radio" value="4" checked={bit === 4}  onChange={onInputChange}/> Quadruple
                    </div>
                    <div className='bit quadruple'></div>
                </label>
            </div>
        </>
    );
}