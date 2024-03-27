import { useState } from "react";
import { Todo } from "./Todo";
import "./App.css";
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
		<div className="cardTodo">
			<h2>Add a task</h2>
			<div className="inputWrapper">
				<input value={input} placeholder="Task Name" onChange={handleInput}></input>
				<button onClick={handleClick}>Add task</button>
			</div>
			<ul className="ulTodo">
				<h2>ToDo List</h2>
				{todo &&
					todo.map((e, i) => {
						return <Todo id={i} callback={handleDelete} taskName={e}></Todo>;
					})}
			</ul>
		</div>
	);
}

export default App;
