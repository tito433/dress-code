import * as React from 'react';
import { useState } from 'react';

export interface DatePickerConfig {
    startDate: Date,
    excludeWeekend: boolean
}

export default function DatePicker(props: DatePickerConfig & {
    onChange: (input: DatePickerConfig) => void;
}) {

    const [startDate, setStartDate] = useState(props.startDate);
    const [excludeWeekend, setExcludeWeekend] = useState(props.excludeWeekend);

    const onDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const updated = new Date(startDate.getFullYear(), startDate.getMonth(), Number(value));
        setStartDate(updated);
        props.onChange({ startDate: updated, excludeWeekend });
    }
    const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const updated = new Date(startDate.getFullYear(), Number(value) - 1, startDate.getDate());
        setStartDate(updated);
        props.onChange({ startDate: updated, excludeWeekend });
    };
    const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const updated = new Date(Number(value), startDate.getMonth(), startDate.getDate());
        setStartDate(updated);
        props.onChange({ startDate: updated, excludeWeekend });
    };
    const onExcludeWeekendChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.checked;
        setExcludeWeekend(value);
        props.onChange({ startDate, excludeWeekend: value });
    };

    return (
        <div className="sect">
            <label className='heading'>Start date</label>

            <div className='datePicker'>
                <input type='number' placeholder='DD' size={2} onChange={onDayChange} defaultValue={startDate.getDate()} />&nbsp;-&nbsp;
                <input type='number' placeholder='MM' size={2} onChange={onMonthChange} defaultValue={startDate.getMonth() + 1} />&nbsp;-&nbsp;
                <input type='number' placeholder='YYYY' size={4} onChange={onYearChange} defaultValue={startDate.getFullYear()} />
            </div>
            <div style={{ marginTop: '1.5rem' }}>
                <label>
                    <input type='checkbox' onChange={onExcludeWeekendChange} checked={excludeWeekend} />
                    Exclude weekend</label>
            </div>
        </div>
    );
}