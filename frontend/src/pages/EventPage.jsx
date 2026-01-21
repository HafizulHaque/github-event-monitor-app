import { EventList } from "../components"
import { useServerSentEvents } from "../hooks"


export const EventPage = () => {

    const { events } = useServerSentEvents(
        `http://localhost:8000/events`, 
        (newEvent) => {
            console.log("New event received:", newEvent)
        }
    )

    return (
        <EventList events={events} />
    )
}