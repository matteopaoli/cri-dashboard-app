import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import EventForm from '../components/EventForm'

const Admin = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [showEventForm, setShowEventForm] = useState(false)
  const drawerWidth = 240
  const onSelectEvent = (eventId) => {
    setSelectedEvent(eventId)
    setShowEventForm(true)
  }

  return (
    <div>
      <Sidebar width={drawerWidth} onSelect={onSelectEvent} />
      <div style={{ width: `calc(100% - ${drawerWidth}px` }}>

      </div>
      <h2>Seleziona un evento per visualizzare o modificare i suoi dati
      </h2>
      { showEventForm && <EventForm editId={selectedEvent} /> }
    </div>
  )
}

export default Admin
