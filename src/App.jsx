import { useState } from "react";

function App() {
	const [todo, setTodo] = useState([]);
	const [input, setInput] = useState("");

	function handleInput(e) {
		setInput(e.target.value);
	}

	function handleClick() {
		setTodo([...todo, input]);
	}

	function handleDelete(index) {
		const result = todo.filter((e, i) => i !== index);
		setTodo(result);
	}

	return (
		<>
			<input value={input} onChange={handleInput} />
			<button onClick={handleClick}>Add task</button>
			<ul>
				{todo &&
					todo.map((e, i) => {
						return (
							<li key={i}>
								{e}
								<button onClick={() => handleDelete(i)}>Delete task</button>
							</li>
						);
					})}
			</ul>
		</>
	);
}

export default App;
