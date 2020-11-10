import React from 'react';
import { mount, render } from 'enzyme';
import Button from '../index';

import mountTest from '../../../tests/shared/mountTest';

describe('Button', () => {
  mountTest(Button);
  mountTest(() => <Button type="danger" />);

  it('renders correctly', () => {
    expect(<Button></Button>).toMatchRenderedSnapshot();
  });

  it('mount correctly', () => {
    expect(() => mount(<Button></Button>)).not.toThrow();
  });
});
