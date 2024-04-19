import React, { useState } from "react";
import Create from './Create'
import './App.css'

function Home() {
    const [todos, setTodos] = useState([])
    return (
        <div className="home">
            <h2>Keep Track, Stay Inspired</h2>
            <Create />
            {
                todos.length === 0 ?  //ternary if length 0 that means no record to dispaly
                <div> <h2> No Record</h2> </div> :
                todos.map(todo=>(
                   <div className="task">
                    <div className="checkbox" onClick={handleEdit}>
                        <bsFillBox className= 'icon'/>
                    <p>{todo.task}</p>

                    </div>
                    
                    <div> 
                        <span> <BsFillTrash className= 'icon'/></span>
                    </div>
                   </div>
                ))
            }
        </div>
    )
}
export default Home