import { memo } from 'react';
import CountDisplay from './count-display';
import CountControllers from './count-controllers';

function Counter() {
  return (
    <div className="flex gap-2 items-center">
      <div>
        <CountDisplay />
        <CountControllers />
      </div>
    </div>
  );
}

export default memo(Counter);
