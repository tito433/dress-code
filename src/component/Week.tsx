
import {TDay} from '../models';
import WeekDay from './WeekDay';

export default function Week(props:{
    days: TDay[],
}){
    return (
        <div className='week'>
            {props.days.map((it:TDay, idx) => <WeekDay label={it.label} color={it.color} key={idx}/> )}
        </div>
    )
}