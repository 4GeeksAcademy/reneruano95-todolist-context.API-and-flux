import React, { useContext } from "react";


import AddItem from "./component/AddItem.jsx";
import ListItem from "./component/ListItem.jsx";
import { TaskContext } from "./store/AppContext.jsx";



const App = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <main>
            <h2>Todo list</h2>
            <ul className="list-group w-50">
                <AddItem />
                {tasks.map((task, index) => (
                    <ListItem key={index} task={task} index={index} />
                ))}
            </ul>
        </main>
    );
}

export default App;