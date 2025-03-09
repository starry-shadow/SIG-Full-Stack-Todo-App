import React from "react"
import AddTask from "./AddTask/index.js"
function Todo(){
    return(
        <>
            <h1 class="title">Todo List</h1>
            <div class="container">
                <div class="search-bar">
                    <input type="search" class="search-input"></input>
                </div>
                <h2>Todo Tasks</h2>
                {/*<button class="addButton">+</button>*/}
                <AddTask/>
            </div>
        </>
    );
}
export default Todo