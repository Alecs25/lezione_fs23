import "./App.css"

export function Todo({ id, taskName, callback}) {
	return (
		<li className="toDo" key={id}>
			{taskName}
			<button callback={callback} onClick={() => callback(id)}>Delete task</button>
		</li>
	);
}
