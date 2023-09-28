import React, { useState, useEffect } from 'react'
import { Modal, Form, Input, Select, Button, message } from 'antd'

const { Option } = Select

interface User {
  id: string
  username: string
  role: boolean
}

interface UserFormModalProps {
  visible: boolean
  user: User | null
  onSave: (user: User) => void
  onCancel: () => void
}

const UserFormModal: React.FC<UserFormModalProps> = ({
  visible,
  user,
  onSave,
  onCancel
}) => {
  useEffect(() => {
    if (user?.id) {
      let updatedInitialValues = {
        id: user?.id,
        username: user?.username,
        role: user?.role
      }
      form.setFieldsValue(updatedInitialValues)
    } else {
      let updatedInitialValues = {
        id: '',
        username: '',
        role: ''
      }
      form.setFieldsValue(updatedInitialValues)
    }
  }, [user])
  const [form] = Form.useForm()
  const handleSave = () => {
    form
      .validateFields()
      .then(values => {
        onSave(values)
        form.resetFields()
      })
      .catch(error => {
        message.error('error')
        console.error('Validation failed:', error)
      })
  }

  return (
    <Modal
      open={visible}
      title={user?.id ? 'Edit User' : 'AddUser'}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          {user?.id ? 'Save' : 'Add'}
        </Button>
      ]}
    >
      <Form form={form} layout="vertical">
        {user?.id && (
          <Form.Item name="id" label="id" preserve>
            <Input disabled readOnly />
          </Form.Item>
        )}
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: ' username not null' }]}
        >
          <Input defaultValue={user?.username} />
        </Form.Item>
        <Form.Item
          name="role"
          label="Role"
          rules={[{ required: true, message: ' role not null' }]}
        >
          <Select>
            <Option value={true}>Admin</Option>
            <Option value={false}>Manage</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default UserFormModal
