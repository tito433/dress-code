
import { useEffect, useState } from 'react';
import {TDay} from '../models';
import WeekDay from './WeekDay';

export default function Month(props:{
    month: number,
    year: number
}){

    const montNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [days, setDays] = useState<Date[]>([]);
    const [startGap, setStartGaps] = useState<number>(0);

    useEffect(() => {
        const dt = new Date(props.year, props.month-1,1);
        const curDate = new Date(dt.getFullYear(), dt.getMonth(), 1);
        const endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 1);
        const updated:Date[] = [];
        const dayofweek = curDate.getDay();
        setStartGaps(dayofweek);
        while (curDate < endDate) {
            updated.push(new Date(curDate));
			curDate.setDate(curDate.getDate() + 1);
		}
        setDays(updated);
    }, [props.month, props.year]);

    return (
        <div className='month'>
            <h5>{montNames[props.month-1]}</h5>
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
                {days.map((it:Date, idx) => <WeekDay value={it} color=''  key={`week-${idx}`}/> )}
            </div>
        </div>
    )
}