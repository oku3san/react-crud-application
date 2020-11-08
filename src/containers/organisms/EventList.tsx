import React, { FC } from 'react';
import { useQuery } from 'react-query';

import EventList from 'components/organisms/EventList';
import { getEvents } from 'domains/udemy-utils';

const EnhancedEventList: FC = () => {
  const { data: events = [] } = useQuery([], getEvents, {});

  return <EventList events={events} />;
};

export default EnhancedEventList;
