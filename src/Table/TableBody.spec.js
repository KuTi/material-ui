// @flow weak
/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { createShallowWithContext } from 'test/utils';
import TableBody, { styleSheet } from './TableBody';

describe('<TableBody />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallowWithContext();
    classes = shallow.context.styleManager.render(styleSheet);
  });

  it('should render a tbody', () => {
    const wrapper = shallow(
      <TableBody />,
    );
    assert.strictEqual(wrapper.is('tbody'), true, 'should be a tbody');
  });

  it('should render with the user and root classes', () => {
    const wrapper = shallow(<TableBody className="woof" />);
    assert.strictEqual(wrapper.hasClass('woof'), true, 'should have the "woof" class');
    assert.strictEqual(wrapper.hasClass(classes.root), true, 'should have the root class');
  });

  it('should render children', () => {
    const children = <tr className="test" />;
    const wrapper = shallow(<TableBody>{children}</TableBody>);
    assert.strictEqual(wrapper.childAt(0).equals(children), true);
  });
});
