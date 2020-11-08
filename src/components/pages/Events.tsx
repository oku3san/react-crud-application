import React, { FC, useRef, Suspense } from 'react';
import EventList from 'containers/organisms/EventList';
import ErrorBoundary from 'ErrorBoundary';
import Spinner from 'components/molecules/Spinner';

const Events: FC = () => {
  const ebKey = useRef(0);

  return (
    <>
      <header>
        <h1>イベントリスト</h1>
        <ErrorBoundary
          statusMessages={{
            404: 'エラーだよ',
          }}
          onError={() => {
            ebKey.current += 1;
          }}
          key={ebKey.current}
        >
          <Suspense fallback={<Spinner size="small" />}>
            <EventList />
          </Suspense>
        </ErrorBoundary>
      </header>
    </>
  );
};

export default Events;
