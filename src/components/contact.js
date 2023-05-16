import React from "react"
import { Button, Card, Form, Input } from "antd"
import "./contact.scss"

const layout = {
  wrapperCol: { span: 24 },
}

let Contact = () => (
  <Card className={"hs-contact-card"}>
    <h3>CONTACT ME</h3>
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      style={{ margin: "10px 8%" }}
    >
      <h4 style={{ margin: "30px 0" }}>
        Fell free to contact me in case of any question
      </h4>
      <Form.Item
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        Your Name (required)
        <Input />
      </Form.Item>

      <Form.Item
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        Your Email (required)
        <Input />
      </Form.Item>

      <Form.Item>
        Subject
        <Input />
      </Form.Item>
      <Form.Item>
        Your Message
        <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
      </Form.Item>
      <Button style={{ width: 100 }} shape="round">
        Send
      </Button>
    </Form>
  </Card>
)

export default Contact
