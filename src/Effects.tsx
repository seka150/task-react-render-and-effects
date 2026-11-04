import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const { sourceId } = props;
    
    
    const [lastMessage, setLastMessage] = useState<number | null>(null);

    useEffect(() => {
        
        setLastMessage(null);

        
        const handleStatusChange = (message: number) => {
            setLastMessage(message);
        };

    
        subscribe(sourceId, handleStatusChange);

        
        return () => {
            unsubscribe(sourceId, handleStatusChange);
        };
    }, [sourceId]); 

    
    const sourceName = sourceId; 

    return (
        <div>
            {sourceName}: {lastMessage !== null ? lastMessage : -1}
        </div>
    );
}