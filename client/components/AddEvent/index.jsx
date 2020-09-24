import { useState } from 'react'
import axios from 'axios'
import { Form, Input, Button, DatePicker } from 'antd'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}
const { RangePicker } = DatePicker

const AddEvent = (props) => {
  const url = process.env.API_URL
  const [eventTitle, setEventTitle] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventPrice, setEventPrice] = useState('')
  const [eventStartDate, setEventStartDate] = useState('')
  const [eventEndDate, setEventEndDate] = useState('')

  const onFinish = async (values) => {
    console.log('Success:', values)
    const { title, location, price } = values
    const event = {
      title,
      location,
      price,
      start_date: eventStartDate,
      end_date: eventEndDate
    }
    props.createEvent(event)
    try {
      const response = await axios.post(url, event)
      console.log('submit')
      console.log(response)
      setEventTitle('')
      setEventLocation('')
      setEventPrice('')
      setEventStartDate('')
      setEventEndDate('')
    } catch (err) {
      console.log('error', err)
      console.log(eventStartDate)
      console.log(eventEndDate)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  function onChange(value, dateString) {
    console.log('Selected Time: ', value) 
    console.log('Formatted Selected Time: ', dateString) 
    setEventStartDate(dateString[0])
    setEventEndDate(dateString[1])
  }

  function onOk(value) {
    console.log('onOk: ', value) 
  }

  const handleChange = (e) => {
    setEventDetails({
      ...eventDetails,
      [e.target.name]: e.target.value
    })
  }

  const handleDateChange = (date, selectedDate, config) => {
    console.log(date)
    console.log(config)
    console.log(selectedDate)
    setEventDetails({
      [config._input.name]: selectedDate
    })
  }
  const handleSubmit = async () => {
    try {
      console.log(eventDetails)
      props.createEvent(eventDetails)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onSubmit={props.createEvent}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: 'Please enter Title',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              message: 'Please enter Location',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: 'Please enter Price',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Date"
          name="Date"
          rules={[
            {
              required: true,
              message: 'Please enter Dates',
            },
          ]}>
          {/* <DatePicker showTime onChange={onChange} onOk={onOk} /> */}
          <RangePicker
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            onChange={onChange}
            onOk={onOk}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
      {/* <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4 className="text-center mb-5">Add new Event</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                name="title" 
                onChange={handleChange} 
                value={eventDetails.title}
                type="text" 
                className="form-control" 
                placeholder="Title" />
            </div>
            <div className="form-group">
              <input 
                name="location" 
                onChange={handleChange} 
                value={eventDetails.location}
                type="text" 
                className="form-control" 
                placeholder="Location" />
            </div>
            <div className="form-group">
              <input 
                name="price" 
                onChange={handleChange} 
                value={eventDetails.price}
                type="number" 
                className="form-control" 
                placeholder="Price" />
            </div>
            <div className="form-group">
              <Flatpickr
                className="form-control"
                name="start_date"
                data-enable-time
                placeholder="Select start date and time"
                onChange={handleDateChange}
                value={eventDetails.start_date}
              />
            </div>
            <div className="form-group">
              <Flatpickr
                className="form-control"
                placeholder="Select end date and time"
                name="end_date"
                data-enable-time
                onChange={handleDateChange}
                value={eventDetails.end_date}
              />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-success">
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  )
}

export default AddEvent