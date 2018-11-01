/* global expect, it, describe */

import { types, add_task, add_group } from './actions';

const debug = require('debug')('test:debug');

debug(__filename);

describe('Actions', () => {
	it('check types not empty', () => {
		expect(Object.keys(types).length).toBeGreaterThan(0);
	});

	it('check add_task action creator', () => {
		const addTask = add_task({name:'test', stm: (new Date()).toISOString()});
		expect(addTask).toBeDefined();
		debug('addTask: ', addTask);
	});


	it('check add_group action creator', () => {
		const addGroup = add_group({});
		expect(addGroup).toBeDefined();
		debug('addGroup: ', addGroup);
	});
});
