
import { useEffect, useState } from 'react';
import {CharToBin} from '../utils';

export default function AsciiToBin(props:{
    char: string
}){
    const [binValue, setBinValue] = useState<string>('');
    useEffect(() => {
       setBinValue(CharToBin(props.char));
    }, [props.char]);

    return (
        <div className='AsciiToBin'>
            <b>{props.char}</b><br/>{binValue}
        </div>
    );
}