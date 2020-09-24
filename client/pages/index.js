import { useState, useEffect } from 'react'
import Event from '../components/Event'
import AddEvent from '../components/AddEvent'
import ApiService from '../hooks'
import MainLayout from '../components/layouts/MainLayout'

export default function Home() {
  const [events, setEvents] = useState([])
  const [eventFormVisibility, setEventFormVisibility] = useState(false)
  const apiService = new ApiService()

  const handleFormToggle = () => {
    return setEventFormVisibility(!eventFormVisibility)
  }
  const fetchEvents = async () => {
    try {
      const response = await apiService.getEvents()
      return setEvents(response.data.events)
    } catch (err) {
      console.log(err)
    }
  }
  const createEvent = async (data) => {
    try {
      await apiService.createEvent(data)
      await fetchEvents()
      return handleFormToggle()
    } catch (err) {
      console.log(err)
    }
  }

  const deleteEvent = async (id) => {
    try {
      await apiService.deleteEvent(id)
      await fetchEvents()
      return handleFormToggle()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    async function fetchData() {
      return await fetchEvents()
    }
    fetchData()
  }, [events])

  const renderEvents = () => (
    events.map((event) => (
      <Event
        key={event.id}
        deleteEvent={deleteEvent}
        event={event} />
    ))
  )
  const renderButton = () => (
    <div className="text-center mb-5">
      <button
        className={`btn ${eventFormVisibility ? 'btn-danger' : 'btn-info'}`}
        onClick={handleFormToggle}>
        {eventFormVisibility ? 'Cancel' : 'Create Event'}
      </button>
    </div>
  )
  return (
    <MainLayout>
      <div className="container">
        <h1 className="text-center my-5">Event Manager</h1>
        {renderButton()}
        {eventFormVisibility && <AddEvent createEvent={createEvent} />}
        {renderEvents()}
      </div>
    </MainLayout>
  )
}
