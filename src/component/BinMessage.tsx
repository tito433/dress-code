import * as React from 'react';
import { CharToBin } from '../utils';

export default function BinMessage(props: {
    value: string;
}) {
    const render = () => {
        if (props.value.length > 0) {
            const inputOfBin = props.value.split('').map(CharToBin).join(' ');
            return (
                <div className="sect">
                    <label className='heading'>The binaries</label>
                    <div className='BinMessage'>
                        {inputOfBin}
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
    return render();
}