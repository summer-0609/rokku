import React from 'react';
import { mount } from 'enzyme';
import Button from '../index';

import mountTest from '../../../tests/shared/mountTest';

describe('Button', () => {
  mountTest(Button);
  mountTest(() => <Button type="danger" />);

  it('renders correctly', () => {
    expect(<Button />).toMatchRenderedSnapshot();
  });

  it('mount correctly', () => {
    expect(() => mount(<Button />)).not.toThrow();
  });
});
