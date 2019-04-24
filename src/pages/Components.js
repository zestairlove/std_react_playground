import React from 'react';

import Clock from '../Apps/Clock';
import NameForm from '../Apps/NameForm';
import NameForm2 from '../Apps/NameForm2';
import Reservation from '../Apps/Reservation';
import LoginControl2 from '../Apps/LoginControl2';
import Mailbox from '../Apps/Mailbox';
import WarningBannerPage from '../Apps/WarningBannerPage';

const Components = () => {
  return (
    <div>
      <Clock />
      <NameForm />
      <NameForm2 />
      <Reservation />
      <LoginControl2 />
      <Mailbox />
      <WarningBannerPage />
    </div>
  );
};

export default Components;
