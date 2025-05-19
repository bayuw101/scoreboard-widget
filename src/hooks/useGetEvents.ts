import { useEffect, useState } from 'react';
// import { getEvents } from '../api/events';
import type { EventType } from '../types';
import { dummyEvents } from '../lib/data';


export const useEvents = (_organizationToken:string) => {
    const [events, setEvents] = useState<EventType[]>([]);
    const [eventsLoading, setLoading] = useState<boolean>(true);
    const [errorEvents, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                // const data = await getEvents(organizationToken);
                // setEvents(data.data);
                setEvents(dummyEvents);
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