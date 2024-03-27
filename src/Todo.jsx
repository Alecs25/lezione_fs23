export function Todo({ id, taskName, callback}) {
	return (
		<li key={id}>
			{taskName}
			<button callback={callback} onClick={() => callback(id)}>Delete task</button>
		</li>
	);
}
