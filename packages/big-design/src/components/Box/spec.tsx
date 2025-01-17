import { theme } from '@bigcommerce/big-design-theme';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';

import { Box } from './index';

test('has margin props', () => {
  const { container, rerender } = render(<Box />);

  expect(container.firstChild).not.toHaveStyle('margin: 1rem');

  rerender(<Box margin="medium" />);

  expect(container.firstChild).toHaveStyle('margin: 1rem');
});

test('has padding props', () => {
  const { container, rerender } = render(<Box />);

  expect(container.firstChild).not.toHaveStyle('padding: 1rem');

  rerender(<Box padding="medium" />);

  expect(container.firstChild).toHaveStyle('padding: 1rem');
});

test('has backgroundColor props', () => {
  const { container, rerender } = render(<Box />);

  expect(container.firstChild).not.toHaveStyle('background-color: #fff');

  rerender(<Box backgroundColor="white" />);

  expect(container.firstChild).toHaveStyle('background-color: #fff');
});

test('has borderRadius props', () => {
  const { container, rerender } = render(<Box />);

  expect(container.firstChild).not.toHaveStyle('border-radius: 50%');

  rerender(<Box borderRadius="circle" />);

  expect(container.firstChild).toHaveStyle('border-radius: 50%');
});

test('has border props', () => {
  const { container } = render(<Box border="box" />);

  expect(container.firstChild).toMatchSnapshot();
});

test('has individual border props', () => {
  const { container } = render(<Box borderBottom="box" borderRight="box" />);

  expect(container.firstChild).toMatchSnapshot();
});

test('has shadow props', () => {
  const { container } = render(<Box shadow="floating" />);

  expect(container.firstChild).toMatchSnapshot();
});

test('theme prop overrides default theme', () => {
  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: 'red',
    },
  };

  const { container } = render(<Box backgroundColor="primary" theme={customTheme} />);

  expect(container.firstChild).toHaveStyle(`background-color: red`);
});

test('renders as a different tag', () => {
  const { getByTestId } = render(<Box data-testid="box" as="section" />);
  const tag = getByTestId('box').tagName;

  expect(tag).toBe('SECTION');
});
