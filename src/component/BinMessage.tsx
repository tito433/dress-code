import * as React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { CharToBin } from '../utils';

export default function BinMessage() {
    const inputText = useSelector((state: RootState) => state.memory.value)
    const inputOfBin = inputText.split('').map(CharToBin).join(' ');
    const render = () =>
    (
        <div className="sect">
            <label className='heading'>The binaries</label>
            <div className='BinMessage'>
                {inputOfBin}
            </div>
        </div>
    )
    return inputText.length > 0 ? render() : null;
}