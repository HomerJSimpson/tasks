import React from 'react';

const Tasks = (props) => {
	return (<div className='tasks card'>
		{props.taskData.tasks.map(e=><p>{e.name}</p>)}
	</div>);

};

export default Tasks;
