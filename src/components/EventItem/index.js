import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent, ActiveEvent} = props
  const {id, imageUrl, location, name, registrationStatus} = eventDetails

  const onSelectEvent = () => {
    onClickEvent(registrationStatus, id)
  }

  const activeEvent = ActiveEvent ? 'active-event' : null

  return (
    <li onClick={onSelectEvent}>
      <button className="image-button" type="button">
        <img
          className={`event-image ${activeEvent}`}
          src={imageUrl}
          alt="event"
        />
      </button>
      <p className="location">{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
