import { createContext, useState } from "react";

export const toDoContext = createContext(null);

const ToDoProvider = ({children}) => {

    const [toDo, setToDo] = useState([]);
    const [done, setDone] = useState([]);
    
    const values = {
        toDo,
        setToDo,
        done, 
        setDone
    }

    return <toDoContext.Provider value={values}>{children}</toDoContext.Provider>

}

export default ToDoProvider;