import * as React from 'react';
export default function AsciiMessage(props: {
    value: string;
    onChange: (input: string) => void;
}) {

    return (
        <div className="sect">
            <label className='heading'>The message</label>
            <div className='AsciiMessage'>
                <textarea
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                    placeholder="Enter your message"
                />
            </div>
        </div>
    );
}