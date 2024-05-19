
import { useState } from 'react';
import Message from '../component/Message';

export default function IndexPage() {
    const [showMessage, setShowMessage] = useState(true);
    return showMessage ? (
        <Message title="Chapter: 1" onClose={()=>setShowMessage(false)}/>
    ):null;
}