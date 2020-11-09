import React, { FC } from 'react';
import { Card } from 'semantic-ui-react';
import { Event } from 'domains/udemy-utils';

const EventList: FC<{ events: Event[] }> = ({ events = [] }) => (
  <>
    <Card.Group>
      {events.map((event) => (
        <Card key={event.id} target="_blank" rel="noopener noreferrer">
          <Card.Content>
            <Card.Header>{event.title}</Card.Header>
            <Card.Description>{event.body}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </>
);

export default EventList;
