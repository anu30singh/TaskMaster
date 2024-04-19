import React, { useState } from "react";
import Create from './Create'
import './App.scss'

function Home() {
    const [todos, setTodos] = useState([])
    return (
        <div>
            <h2>Keep Track, Stay Inspired</h2>
            <Create />
            {
                todos.length === 0 ?  //ternary if length 0 that means no record to dispaly
                <div> <h2> No Record</h2> </div> :
                todos.map(todo=>(
                   <div>
                    {todo}
                   </div>
                ))
            }
        </div>
    )
}
export default Home