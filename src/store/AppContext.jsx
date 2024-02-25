import React, { useReducer, createContext } from "react";

export const TaskContext = createContext(null);

const TaskReducer = (state, action) => {
	switch (action.type) {
		case "add":
			return [...state, action.payload];
		case "remove":
			let newState = [...state]
			newState.splice(action.index, 1);
			return newState
		default:
			return state;
	}
};

export const TaskProvider = ({ children }) => {
	const [tasks, taskActions] = useReducer(TaskReducer, []);

	return (
		<TaskContext.Provider value={{ tasks, taskActions }}>
			{children}
		</TaskContext.Provider >
	);
}


