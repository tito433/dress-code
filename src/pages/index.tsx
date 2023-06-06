
//import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Month from '../component/Month';
import StringInput from '../component/StringInput';
import { setValue } from '../inputSlice';
//import type { RootState } from '../store';

export default function IndexPage() {
    const dispatch = useDispatch();

    //const inputText = useSelector((state: RootState) => state.inputText.value)

    const onInputChange =(value:string[])=>{
        dispatch(setValue(value));
    }
    return (
        
    <>
        <div className="input">
            <StringInput onChange={onInputChange}/>
        </div>
        <div className='months'>
            <Month month={6} year={2023}/>
            <Month month={7} year={2023}/>
        </div>
    </>
    );
}