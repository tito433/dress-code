import * as React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import {CharToBin, GetBinColor, IsValidDay} from '../utils';
import Month from './Month';
import {TDay} from '../models';

type MonthMap= {
    [id: number] : TDay[]
}

export default function Calendar(){
    const inputText = useSelector((state: RootState) => state.memory.value)
    const startDate = useSelector((state: RootState) => new Date(state.memory.startDate))
    const inputOfBin = inputText.map((it:string)=>CharToBin(it)).join('');
    const curDate = new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate());
    let i = 0;
    const monthDistro:MonthMap = {};

    while (i<inputOfBin.length) {
        if(IsValidDay(curDate)){
            const key = new Date(curDate.getFullYear(),curDate.getMonth(), 1).valueOf();
            if(!monthDistro[key]){
                monthDistro[key]=[];
            }
            const tDay:TDay = {date: new Date(curDate.valueOf()), color: GetBinColor(inputOfBin.charAt(i))}
            monthDistro[key].push(tDay);
            i++;
        }
        curDate.setDate(curDate.getDate() + 1);
    }
    console.log(monthDistro);
    const monthList = Object.keys(monthDistro);
    console.log(monthList);
    return(
        <>
            {monthList.length>0 && monthList.map((mn)=>{
                return <Month date={Number(mn)} codes={monthDistro[Number(mn)]} key={mn}/>
                })
            }
            
        </>
    );
}