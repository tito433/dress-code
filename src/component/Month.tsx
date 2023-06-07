
import * as React from 'react';
import { useEffect, useState } from 'react';
import WeekDay from './WeekDay';
import { TDay } from '../models';

export default function Month(props:{
    date:number,
    codes: TDay[]
}){

    const montNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [days, setDays] = useState<Date[]>([]);
    const [startGap, setStartGaps] = useState<number>(0);
    const [monthName, setMonthName] = useState<string>('');

    useEffect(() => {
        const dt = new Date(props.date);
        const curDate = new Date(dt.getFullYear(), dt.getMonth(), 1);
        const endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 1);
        const updated:Date[] = [];
        const dayofweek = curDate.getDay();
        setStartGaps(dayofweek);
        while (curDate < endDate) {
            updated.push(new Date(curDate));
			curDate.setDate(curDate.getDate() + 1);
		}
        setMonthName(montNames[dt.getMonth()])
        setDays(updated);
        
    }, [props.date]);

    const GetDayColor =(it:Date) =>{
        const maping = props.codes.find((d=> d.date.getDate() == it.getDate()));
        if(maping){
            return maping.color;
        }
        return '';
    }
    return (
        <div className='month'>
            <h5>{monthName}</h5>
            <div className='dname'>
                <div className='nm'>Sun</div>
                <div className='nm'>Mon</div>
                <div className='nm'>Tue</div>
                <div className='nm'>Wed</div>
                <div className='nm'>Thu</div>
                <div className='nm'>Fri</div>
                <div className='nm'>Sat</div>
            </div>
            <div className='days'>
                {Array(startGap).fill(0).map((it,idx)=><div className={`day blank`} key={`weekb-${idx}`}></div>)}
                {days.map((it:Date, idx) => <WeekDay value={it} color={GetDayColor(it)}  key={`week-${idx}`}/> )}
            </div>
        </div>
    )
}