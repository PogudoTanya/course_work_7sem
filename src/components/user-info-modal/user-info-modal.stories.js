import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { useState } from '@storybook/addons';
import { UserInfoModal } from './user-info-modal';

export default {
  title: 'UserInfoModal',
  component: UserInfoModal,
  decorators: [withKnobs],
};

const user = {
  _id: 1,
  name: 'Jane Cooper',
  email: 'Jane_Cooper@gmail.com',
  adminNotes: 'notes',
  permission: 'free permission',
  lastSession: new Date(2014, 1, 11, 3, 45).toISOString(),
};

export function SuperUserInfoModal() {
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <UserInfoModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      user={user}
    />
  );
}
