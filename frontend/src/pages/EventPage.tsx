import { EventList } from "../components/index.js"
import { useServerSentEvents } from "../hooks/index.js"


export const EventPage = () => {

    const { events } = useServerSentEvents(
        `http://localhost:8000/events`, 
        (newEvent : any) => {
            console.log("New event received:", newEvent)
        }
    )

    return (
        <EventList events={events} />
    )
}