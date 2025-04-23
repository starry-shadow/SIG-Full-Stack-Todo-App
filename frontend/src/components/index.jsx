import React, { useState} from 'react'
import Form from "./Form/index.jsx"
function Todo(){
    const [titleInput, setTitle]=useState(""); //creating an empty state to store the input in the title of the task being created, along with a function to change the title when there is a change made in the text field
    const [descriptionInput, setDescription]=useState("");
    console.log("Title: "+titleInput);
    console.log("Description: "+descriptionInput);
    return(
    <>
        <div class="todo-list">
            <div class="container">
                <Form titleInput={titleInput} setTitle={setTitle} descriptionInput={descriptionInput} setDescription={setDescription}></Form> {/*passing down the variables that we created to the Form component */}
            </div>
            <h2>Todo Tasks</h2>
        </div>
        </>
    );
}
export default Todo