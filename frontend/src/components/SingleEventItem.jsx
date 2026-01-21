export const SingleEventItem = ({ event }) => {
  return (
    <div>
        <pre>{JSON.stringify(event, null, 2)}</pre>
    </div>
  )
}