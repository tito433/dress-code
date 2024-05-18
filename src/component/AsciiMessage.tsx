import * as React from 'react';
export default function AsciiMessage(props: {
    onChange: (value: string) => void
}) {

    return (
        <div className='AsciiMessage'>
            <textarea
                onChange={(e) => props.onChange(e.target.value)}
                placeholder="Enter your message here"
            />
        </div>
    );
}