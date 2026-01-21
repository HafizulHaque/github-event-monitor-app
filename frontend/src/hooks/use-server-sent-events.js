import { useEffect, useState } from 'react'

export const useServerSentEvents = (url, onMessage) => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        const eventSource = new EventSource(url)

        eventSource.onmessage = (event) => {
            const parsedData = JSON.parse(event.data)
            setEvents((prevEvents) => [parsedData, ...prevEvents])
            if (onMessage) {
                onMessage(parsedData)
            }
        }

        return () => {
            eventSource.close()
        }
    }, [url, onMessage])


    return { events }
}