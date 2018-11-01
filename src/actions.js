export const types = [
	'ADD_GROUP',
	'ADD_TASK',
].reduce((acc, e) => {
	acc[e] = e;
	return acc;
}, {});

export const add_group = (payload) => ({ type: types.ADD_GROUP, payload });
export const add_task = (payload) => ({ type: types.ADD_TASK, payload });

export default types;

