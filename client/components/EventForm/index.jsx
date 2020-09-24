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

const EventForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values) 
  } 

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo) 
  } 

  function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  function onOk(value) {
    console.log('onOk: ', value);
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
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
  ) 
} 

export default EventForm