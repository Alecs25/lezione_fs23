import { useState } from "react";
import { Todo } from "./Todo";

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
							<Todo id={i} callback={handleDelete}
              taskName={e}></Todo>
						);
					})}
			</ul>
		</>
	);
}

export default App;
