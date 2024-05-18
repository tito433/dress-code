import * as React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import {CharToBin} from '../utils';

export default function BinMessage() {

    const inputText = useSelector((state: RootState) => state.memory.value)
    const inputOfBin = inputText.split('').map(CharToBin).join(' ');

    return (
        <div className='BinMessage'>
            {inputOfBin}
        </div>
    );
}