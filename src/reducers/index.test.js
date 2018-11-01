/* global expect, it, describe */

import { reducer, initialState } from '.';
import { add_task, add_group } from '../actions';


describe('Reducer', () => {
	it('Should return the initial state when no actions passed', () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});


	describe('Submit task', () => {
		const ttm = new Date().toISOString();
		const action = add_task({ name: 'test', ttm });
		const expectedState = {
			tasks:[
				{
					name: 'test',
					touched: [ ttm ]
				}
			],
			groups: []
		};
		expect(reducer(undefined, action)).toEqual(expectedState);
	});

	describe('Returns existing state for action types we don\'t handle', () => {
		expect(reducer(undefined, { type: 'Not Handled', payload: ['stuff'] })).toEqual(initialState);
	});

	describe('Submit group', () => {
		const ttm = new Date().toISOString();
		const action = add_group({name: 'Guitar', ttm});
		const expectedState = {
			tasks:[],
			groups: [
				{
					name: 'Guitar',
					touched: [ ttm ]
				}
			]
		};
		expect(reducer(undefined, action)).toEqual(expectedState);
	});
});

