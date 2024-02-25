import React, { useContext } from "react";
import { TaskContext } from "../store/AppContext";



export default function ListItem({ task, index }) {
    const { taskActions } = useContext(TaskContext);

    return (
        <li className="list-group-item d-flex justify-content-between">
            {task}
            <button
                onClick={() => taskActions({ type: "remove", index })}
                role="button"
                className="badge bg-danger btn btn-flat rounded-pill"
            >
                {/* Trash can icon for delete */}
                {/* <i className="bi bi-trash3"></i> */}
                --
            </button>
        </li>
    );
}
