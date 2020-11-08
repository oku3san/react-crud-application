export type Event = {
  id: number;
  title: number;
  body: string;
};

const isEvent = (arg: unknown): arg is Event => {
  const e = arg as Event;

  return (
    typeof e?.id === 'number' &&
    typeof e?.title === 'string' &&
    typeof e?.body === 'string'
  );
};

const isEvents = (args: unknown[]): args is Event[] =>
  !args.some((arg) => !isEvent(arg));

export { isEvent, isEvents };
