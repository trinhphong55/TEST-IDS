import React, { useState } from 'react'
import { Modal, Button } from 'antd'

interface User {
  id?: string
  username: string
  role: boolean
}

interface UserFormModalProps {
  showModal: boolean
  onDelete: (values: string) => void
  user: User | null
  onCancel: () => void
}
const DeleteModal: React.FC<UserFormModalProps> = ({
  showModal,
  onDelete,
  onCancel,
  user
}) => {
  const submit = () => {
    let a = user?.id ? user?.id : ''
    onDelete(a)
  }

  return (
    <div>
      <Modal
        open={showModal}
        title={'delete'}
        onCancel={onCancel}
        footer={[
          <Button key="cancel" onClick={onCancel}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={submit}>
            Delete
          </Button>
        ]}
      >
        <p>Do you want to delete user {user?.username}</p>
      </Modal>
    </div>
  )
}

export default DeleteModal
