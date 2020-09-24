'use strict'
const Event = use('App/Models/Event')

class EventController {
  async index ({ response }) {
    const events = await Event.all()
    return response.status(200).json({ events })
  }
  async store ({ response, request }) {
    const {
      title,
      start_date,
      end_date,
      location,
      price
    } = request.all()
    const event = await Event.create({
      title,
      start_date,
      end_date,
      location,
      price
    })
    return response.status(201).json({ event })
  }
  async delete ({ params, response }) {
    const event = await Event.find(params.id)
    await event.delete()
    return response.status(200).json({
      message: 'Event deleted successfully.'
    })
  }
  async update({ params, request }) {
    const event = await Event.find(params.id)
  }
}

module.exports = EventController
