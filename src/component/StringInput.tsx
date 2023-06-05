import { useState } from 'react';


function isValidChar(code){
    if(code>=65 && code<=90){
        return true;
    }else if(code>=97 && code<=122){
        return true;
    }else if(code==32){
        return true;
    }
}

function SingleInput(props:{
    value: string,
    isSelected:boolean,
    onKeyPress: (value: string)=>void,
    onDelete: () => void,
    attr: any | undefined,
}){
    console.log(props.value, props.attr)
    const onFocus =(e) =>{
        e.currentTarget.select();
    }

    const onKeyUp =(e) =>{
        const code = e.which;
        console.log(code,e)
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
                onKeyPress={onKeyUp} 
                onChange={onChange} 
                onFocus={onFocus} {...props.attr}/>
        </div>
    );
}

export default function StringInput(props: {
    onChange: (value: string[]) => void
}) {

    const [cursorPos, setCursorPos] = useState<number>(0);
    const [inputText, setInputText] = useState<string[]>([]);

    const inputChange = (idx, value)=>{
        console.log('change',idx,value,inputText)
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
        console.log('got delete command',idx,inputText)
        const updated = [...inputText];
        updated.splice(idx,1);
        setInputText(updated);
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