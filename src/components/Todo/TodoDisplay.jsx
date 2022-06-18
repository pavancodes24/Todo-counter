
const TodoDisplay=({todo})=>{
    return (
        <>
            {todo.map(item=>(
                <div key={item.id}>{item.input}</div>
            ))}
        </>
    )
}

export default TodoDisplay