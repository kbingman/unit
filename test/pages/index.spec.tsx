import React from 'react';
import { render } from '@testing-library/react';

import IndexPage from '../../pages/index';

describe('the Index page', () => {
  it('works', () => {
    const { debug } = render(<IndexPage />);
    console.log(debug());
    expect(true).toBe(true);
  });
});
