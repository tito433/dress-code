import { useEffect, useState } from 'react';
import {CharToBin} from '../utils';

function SingleInput(props:{
    value: string,
    onKeyPress: (value: string)=>void,
    onDelete: () => void,
    attr: any | undefined,
}){

    const [binValue, setBinValue] = useState<string>('');

    useEffect(() => {
        setBinValue(CharToBin(props.value));
     }, [props.value]);

    const onFocus =(e) =>{
        e.target.select();
    }

    const onKeyDown =(e) =>{
        const code = e.keyCode;
        const value = e.target.value.toUpperCase();
        if(code == 8 && value == ''){
            props.onDelete();
            return false;
        }
    }
    const onChange =(e) =>{
        const value = e.target.value.toUpperCase();
        if(value == ''){
            props.onDelete();
            return false;
        }else{
            props.onKeyPress(value.charAt(0));
        }
    }

    return(
        <div className="char">
            <input type="text" 
                defaultValue={props.value} 
                onKeyDown={onKeyDown}
                onChange={onChange} 
                onFocus={onFocus} {...props.attr}/>
            <div className='AsciiToBin'>
                {binValue}
            </div>
        </div>
    );
}

export default function StringInput(props: {
    onChange: (value: string[]) => void
}) {

    const [cursorPos, setCursorPos] = useState<number>(0);
    const [inputText, setInputText] = useState<string[]>([]);

    const inputChange = (idx, value)=>{
        const updated = [...inputText];
        if(idx>inputText.length){
            updated.push(value);
            setInputText(updated);
        }else{
            updated[idx] = value;
            setInputText(updated);
        }
        setCursorPos(idx+1)
        props.onChange(updated);
    }
    const onDelete = (idx) =>{
        const updated = [...inputText];
        updated.splice(idx,1);
        setInputText(updated);
        setCursorPos(updated.length);
    }

    return (
        <div className="inputText">
            {inputText.map((it,idx)=> <SingleInput 
                 attr={cursorPos==idx? {'autoFocus':'autoFocus'}:''} 
                 value={it} 
                 onKeyPress={(e) => inputChange(idx,e)} 
                 onDelete={() => onDelete(idx)}
                 key={`char-${idx}`}/>
            )}
            <SingleInput 
                attr={cursorPos==inputText.length? {'autoFocus':'autoFocus'}:''} 
                value='' 
                onKeyPress={(e) => inputChange(inputText.length,e)}
                onDelete={() => onDelete(inputText.length-1)}
                key={`char-${inputText.length}`}
                />
        </div>
    );
}