import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card'
import '@testing-library/jest-dom/extend-expect';


describe('<Card />', () => {
  // https://positivegrid-js.s3.amazonaws.com/contentful/sandbox/stickyBar.json?t=2021_08_19_09_55
  it('should render <Card /> correct', async () => {
    const { asFragment } = render(<Card />);

    expect(asFragment()).toMatchSnapshot();
  });
});
