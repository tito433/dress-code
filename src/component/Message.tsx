import { ReactNode, useState } from 'react';
import BinMessage from '../component/BinMessage';
import Calendar from '../component/Calendar';
import AsciiMessage from './AsciiMessage';
import BitPicker from './BitPicker';
import DatePicker from './DatePicker';
import Window from './Window';

import { ReactComponent as IconAccept } from '../assets/icons/Accept.svg';
import { ReactComponent as IconFilter } from '../assets/icons/Settings.svg';

export default function Message(props: {
    title?: ReactNode;
    onClose?: (e: React.MouseEvent) => void;
}) {
    const [inputText, setInputText] = useState('');
    const [showSettings, setShowSettings] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const [excludeWeekend, setExcludeWeekend] = useState(true);
    const handleDateChange = (config: { startDate: Date, excludeWeekend: boolean }) => {
        setStartDate(config.startDate);
        setExcludeWeekend(config.excludeWeekend);
    }
    const renderSettings = () => {
        return (
            <>
                <AsciiMessage value={inputText} onChange={setInputText} />
                <BitPicker />
                <DatePicker startDate={startDate} excludeWeekend={excludeWeekend} onChange={handleDateChange} />
            </>
        );
    };
    const renderCalendar = () => {
        return (
            <>
                <BinMessage value={inputText} /> 
                <Calendar value={inputText} dateConfig={{ startDate, excludeWeekend }} />
            </>
        );
    };
    const getToolbar = () => {
        return (
            <button onClick={() => setShowSettings(!showSettings)}>
                {showSettings ? <IconAccept /> : <IconFilter />}
            </button>
        );
    };
    return (

        <Window {...props} toolbar={getToolbar()}>
            {showSettings ? renderSettings() : null}
            {!showSettings ? renderCalendar() : null}
        </Window>
    );
}