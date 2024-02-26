import React, { useContext } from "react";


import AddItem from "./component/AddItem.jsx";
import ListItem from "./component/ListItem.jsx";
import { TaskContext } from "./store/AppContext.jsx";
import { Footer } from "./component/Footer.jsx";



const App = () => {
    const { tasks } = useContext(TaskContext);

    const remainingTasks = tasks.length

    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="col-sm-12 col-md-6 mb-2">
                    <h1 className="mb-2 text-center" >ToDo App</h1>
                    <AddItem />
                    {tasks.length > 0 ? (
                        <>
                            <ul className="list-group">
                                {tasks.map((task, index) => (
                                    <ListItem key={index} task={task} index={index} />
                                ))}
                            </ul>
                            <p className="mt-2 ps-3">{remainingTasks} item{remainingTasks > 1 && 's'} left</p>
                        </>
                    ) : (
                        <h2 className="text-center">No tasks, add a task</h2>
                    )}
                </div>
            </div >
            <Footer />

        </>

    );
}

export default App;