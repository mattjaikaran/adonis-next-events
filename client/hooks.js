import axios from 'axios'

export default class ApiService {
  constructor() {
    this.http = axios.create({ baseURL: 'http://localhost:3333/api'})
  }
  getEvents = async () => this.http.get('/events')
  createEvent = async (event) => this.http.post('/events', event)
  deleteEvent = async (id) => this.http.delete(`/events/${id}`)
  updateEvent = async (id) => this.http.put(`/events/${id}`)
}