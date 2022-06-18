import { useState } from "react";
import { v4 as uuid } from 'uuid'
import TodoDisplay from "./TodoDisplay";

const Todo = () => {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);
    const handleTodo = () => {
        const payload = {
            input,
            status: false,
            id: uuid()
        };
        setTodo([...todo, payload])
    };
    return (

        <>
            <h1>Todo</h1>
            <input type="text" placeholder="enter something" value={input}
                onChange={e => setInput(e.target.value)} />
            <button onClick={handleTodo}>ADD Todo</button>
            <TodoDisplay todo={todo} />
        </>
    );
};

export default Todo;
