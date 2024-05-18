import { useSelector } from 'react-redux';
import { TDay } from '../models';
import type { RootState } from '../store';
import { CharToBin, IsValidDay } from '../utils';
import Month from './Month';

type MonthMap = {
    [id: number]: TDay[]
}

export default function Calendar() {
    const inputText = useSelector((state: RootState) => state.memory.value)
    const startDate = useSelector((state: RootState) => new Date(state.memory.startDate));
    const excludeWeekend = useSelector((state: RootState) => state.memory.excludeWeekend);

    const bit = useSelector((state: RootState) => state.memory.bit);
    const inputOfBin = inputText.split('').map(CharToBin).join('');
    const curDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    let i = 0;
    const monthDistro: MonthMap = {};
    while (i < inputOfBin.length) {
        if (IsValidDay(curDate, excludeWeekend)) {
            const key = new Date(curDate.getFullYear(), curDate.getMonth(), 1).valueOf();
            if (!monthDistro[key]) {
                monthDistro[key] = [];
            }
            const binPart = inputOfBin.substring(i, i + bit).padEnd(bit, "0");
            const tDay: TDay = { date: new Date(curDate.valueOf()), color: 'color' + binPart }
            monthDistro[key].push(tDay);
            i += bit;
        }
        curDate.setDate(curDate.getDate() + 1);
    }
    const monthList = Object.keys(monthDistro);
    return monthList.length > 0 ? (
        <div className='sect'>
            <label className='heading'>Dress code</label>
            <div className='months'>
                {monthList.map((mn) =>
                    <Month date={Number(mn)} codes={monthDistro[Number(mn)]} key={mn} />
                )
                }
            </div>
        </div>
    ) : null;
}