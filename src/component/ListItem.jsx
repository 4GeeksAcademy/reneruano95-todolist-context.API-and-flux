import React, { useContext, useState } from "react";
import { TaskContext } from "../store/AppContext";
import { FaTrash } from "react-icons/fa";


export default function ListItem({ task, index }) {
    const [isHovered, setIsHovered] = useState(false)
    const { taskActions } = useContext(TaskContext);

    const handleOnMouseEnter = () => {
        setIsHovered(true)
    }

    const handleOnMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <li className="list-group-item d-flex justify-content-between" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            {task}
            {isHovered && (
                <button
                    onClick={() => taskActions({ type: "remove", index })}
                    role="button"
                    className="btn p-0"
                >
                    <FaTrash />
                </button>
            )}
        </li>
    );
}
