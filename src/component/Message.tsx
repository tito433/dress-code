import { ReactNode, useState } from 'react';
import AsciiMessage from './AsciiMessage';
import BitPicker from './BitPicker';
import DatePicker from './DatePicker';
import Window from './Window';
import BinMessage from '../component/BinMessage';
import Calendar from '../component/Calendar';

import { ReactComponent as IconAccept } from '../assets/icons/Accept.svg';
import { ReactComponent as IconFilter } from '../assets/icons/Settings.svg';

export default function Message(props: {
    title?: ReactNode;
    onClose?: (e: React.MouseEvent) => void;
}) {
    const [showSettings, setShowSettings] = useState(true);

    const renderSettings = () => {
        return (
            <>
                <AsciiMessage /> <BitPicker /> <DatePicker />
            </>
        );
    };
    const renderCalendar = () => {
        return (
            <>
                <BinMessage /> <Calendar />
            </>
        );
    };
    const getToolbar = () => {
        return (
            <button onClick={() => setShowSettings(!showSettings)}>
                {showSettings ? <IconAccept/> : <IconFilter/>}
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