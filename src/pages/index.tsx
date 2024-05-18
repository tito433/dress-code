

import AsciiMessage from '../component/AsciiMessage';
import BinMessage from '../component/BinMessage';
import BitPicker from '../component/BitPicker';
import Calendar from '../component/Calendar';
import DatePicker from '../component/DatePicker';
import { Step, Stepper } from '../component/Stepper';

export default function IndexPage() {

    const Step1 = () => <div><AsciiMessage /> <BitPicker /> <DatePicker /></div>;
    const Step2 = () => <div><BinMessage />  <Calendar /></div>;
    const steps: Step[] = [
        { component: <Step1 />, nextButtonText: 'Finish' },
        { component: <Step2 /> },
    ];

    return (
        <Stepper steps={steps} />
    );
}