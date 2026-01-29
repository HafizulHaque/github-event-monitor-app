import { useEffect, useState } from 'react'

export const useServerSentEvents = (url : string, onMessage : any ) => {

    const [events, setEvents]: Array<any> = useState([])

    useEffect(() => {
        const eventSource = new EventSource(url)

        eventSource.onmessage = (event) => {
            const parsedData = JSON.parse(event.data)
            setEvents((prevEvents : any) => [parsedData, ...prevEvents])
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