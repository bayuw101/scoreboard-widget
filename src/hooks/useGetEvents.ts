import { useEffect, useState } from 'react';
import { getEvents } from '../api/events';
import type { EventType } from '../types';
import { dummyEvents } from '../lib/data';


export const useEvents = (organizationToken:string) => {
    const [events, setEvents] = useState<EventType[]>([]);
    const [eventsLoading, setLoading] = useState<boolean>(true);
    const [errorEvents, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                const data = await getEvents(organizationToken);
                if (organizationToken === 'dummy') {
                    setEvents(dummyEvents);
                }else{
                    setEvents(data.data);
                }
            } catch (err) {
                setError('Failed to fetch events');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return { events, eventsLoading, errorEvents };
};