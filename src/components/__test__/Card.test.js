import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '../Card'
import '@testing-library/jest-dom/extend-expect';

/**
 * fireEvent: 模擬 trigger 事件
 */


describe('<Card />', () => {
  // https://positivegrid-js.s3.amazonaws.com/contentful/sandbox/stickyBar.json?t=2021_08_19_09_55
  it('should render <Card /> correct', async () => {
    const { asFragment, getByTestId } = render(<Card />);

    const cardContainer = getByTestId('card-container')
    const cardContent = getByTestId('card-text')
    fireEvent.click(cardContainer)
    // textContent 取得 DOM 元素的內容
    expect(cardContent.textContent).toBe('已點擊')


    expect(asFragment()).toMatchSnapshot();
  });
});

