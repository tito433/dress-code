import * as React from 'react';
import { ReactNode } from 'react';
import { ReactComponent as IconClose } from '../assets/icons/Close.svg';

export default function Window(props: {
    title?: ReactNode;
    children?: ReactNode;
    className?: string;
    toolbar?: ReactNode;
    onClose?: (e: React.MouseEvent) => void;
}) {
    return (
        <section className={`Window ${props.className ?? ''}`}>
            <header>
                <h2>{props.title}</h2>
                <div className='buttons'>
                    {props.toolbar}
                    <button onClick={props.onClose}>
                        <IconClose />
                    </button>
                </div>
            </header>
            <article className='content'>
                {props.children}
            </article>
        </section>
    )
}