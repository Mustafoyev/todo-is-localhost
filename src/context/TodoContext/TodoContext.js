import { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [inpVAlue, setInpValue] = useState([]);

	return (
		<TodoContext.Provider value={{ inpVAlue, setInpValue }}>
			{children}
		</TodoContext.Provider>
	);
};
