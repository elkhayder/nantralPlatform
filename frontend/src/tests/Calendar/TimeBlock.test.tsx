import React from 'react';

import { TimeBlock } from '#shared/components/Calendar/Day/TimeBlock/TimeBlock';
import { wrapAndRender } from '#utils/tests';

describe('<DayInfos />', () => {
  it('should display an TimeBlock', async () => {
    const oddComponent = wrapAndRender(
      <TimeBlock key="TimeBlockOddTest" startTime={5} />
    );

    const evenComponent = wrapAndRender(
      <TimeBlock key="TimeBlockEvenTest" startTime={2} />
    );
    expect(
      oddComponent.getByTestId('TimeBlockOddTestId').className.slice(0, 12)
    ).toBe('timeBlockOdd');
    expect(
      evenComponent.getByTestId('TimeBlockEvenTestId').className.slice(0, 13)
    ).toBe('timeBlockEven');

    expect(evenComponent).toMatchSnapshot();
    expect(oddComponent).toMatchSnapshot();
  });
});
