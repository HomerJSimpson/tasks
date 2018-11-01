/* global it, expect, jest */

import { AppComponent as App } from './App';
import React from 'react';
import { shallow } from 'enzyme';
import { initialState } from './reducers';

it('renders without crashing', () => {
	const mockf = jest.fn();
	const component = shallow(
		<App
			state={initialState}
			addTask={mockf}
		></App>
	);

	expect(component.exists()).toEqual(true);
});
