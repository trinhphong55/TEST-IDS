import React from 'react'
import { Input, Select, Button, Form, Col, Row } from 'antd'
import Styles from './Search.module.scss'
const { Option } = Select
interface UserData {
  id: string
  userName: string
  role?: boolean
}

const role = [
  {
    id: 1,
    isType: true
  },
  {
    id: 2,
    isType: false
  }
]
const Search = (props: any) => {
  const [form] = Form.useForm()

  const onFinish = (values: UserData) => {
    props.getDataSearch(values)
  }

  const onClear = () => {
    form.setFieldsValue({ id: undefined })
    form.setFieldsValue({ username: undefined })
    form.setFieldsValue({ role: undefined })
  }

  return (
    <div style={{ padding: '20px' }}>
      <Form form={form} onFinish={onFinish}>
        <Row gutter={16}>
          <Col className="gutter-row" span={10}>
            <Form.Item label="ID" name="id" colon={false}>
              <Input placeholder="Nhập tên..." />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={10}>
            <Form.Item label="Role" name="role" colon={false}>
              <Select   placeholder="Select Role">
                
                {role.map((item: any, index: any) => (
                  <Select.Option key={index} value={item?.isType}>
                    {item?.isType?'Admin':'Manage'}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} justify="end">
          <Col className="gutter-row" span={10}>
            <Form.Item label="Username" name="username" colon={false}>
              <Input placeholder="Enter UserName" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={14}>
            <div className={Styles.Btn}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
                <Button
                  type="default"
                  onClick={onClear}
                  style={{ marginLeft: '10px' }}
                >
                  Clear
                </Button>
              </Form.Item>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Search
