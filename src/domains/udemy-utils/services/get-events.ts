import ky, { Options } from 'ky';
import { DEFAULT_API_OPTIONS } from './config';
import { isEvents, Event } from '../models/event';

const getEvents = async (options?: Options): Promise<Event[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(`api/v1/events?token=token123`, mergedOptions);
  const events = (await response.json()) as unknown[];

  if (!isEvents(events)) {
    throw Error('API type error');
  }

  return events;
};

export default getEvents;
