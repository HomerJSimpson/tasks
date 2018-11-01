import types from '../actions';

export const initialState = { tasks: [], groups: []};

export const reducer = (state=initialState, action) => {
	switch(action.type) {
	case types.ADD_TASK:
		return {
			...state,
			tasks: [
				...state.tasks,
				{
					name: action.payload.name,
					touched: [ action.payload.ttm || new Date().toISOString() ]
				}
			]
		};
	case types.ADD_GROUP:
		return {
			...state,
			groups: [
				...state.tasks,
				{
					name: action.payload.name,
					touched: [ action.payload.ttm || new Date().toISOString() ]
				}
			]
		};
	default:
		return state;
	}
};

export default reducer;


