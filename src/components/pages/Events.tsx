import React, {
  FC,
  useRef,
  Suspense,
  unstable_SuspenseList as SuspenseList,
} from 'react';
import { Divider } from 'semantic-ui-react';
import EventList from 'containers/organisms/EventList';
import ErrorBoundary from 'ErrorBoundary';
import Spinner from 'components/molecules/Spinner';
import './Events.css';

const Events: FC = () => {
  const ebKey = useRef(0);

  return (
    <>
      <header>
        <h1>イベントリスト</h1>
        <Divider />
        <ErrorBoundary
          statusMessages={{
            404: 'エラーだよ',
          }}
          onError={() => {
            ebKey.current += 1;
          }}
          key={ebKey.current}
        >
          <SuspenseList revealOrder="forwards">
            <Suspense fallback={<Spinner size="small" />}>
              <EventList />
            </Suspense>
          </SuspenseList>
        </ErrorBoundary>
      </header>
    </>
  );
};

export default Events;
