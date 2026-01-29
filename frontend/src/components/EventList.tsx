import { SingleEventItem } from './SingleEventItem.js'

export const EventList = ({ events }) => {
  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event, index) => (
          <SingleEventItem key={index} event={event} />
        ))}
      </ul>
    </div>
  )
}
