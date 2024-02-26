import React, { useContext } from "react";


import AddItem from "./component/AddItem.jsx";
import ListItem from "./component/ListItem.jsx";
import { TaskContext } from "./store/AppContext.jsx";



const App = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 mb-2">
                <h1 className="mb-2 text-center" >ToDo App</h1>
                <AddItem />
            </div>

            {tasks.length > 0 ? (
                <ul className="list-group col-sm-12 col-md-6">
                    {tasks.map((task, index) => (
                        <ListItem key={index} task={task} index={index} />
                    ))}
                </ul>) : (
                <h2>No tasks, add a task</h2>
            )}
        </div>
    );
}

export default App;