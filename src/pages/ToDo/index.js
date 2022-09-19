import { useContext, useState } from 'react';
import {toDoContext} from '../../Contex/index';

function ToDo() {
    const {toDo, setToDo} = useContext(toDoContext);
    const {done, setDone} = useContext(toDoContext);

    function handleDone(e, element){
        if(!done.includes(element)){
            setDone([...done, element]);
            alert('To-do added');
        }
        else{
            e.target.checked = false;
            alert('To-do already added');
        }
    }

    return (
        <>
            <h1>To-Do List</h1>
            <ul>
                {
                    toDo.map((el, i) => {
                        return <li key={i}>
                            {el}
                            <input type='checkBox' onChange={(e) => handleDone(e, el)} />
                        </li>
                    })
                }
            </ul>
        </>
    );
}

export default ToDo;
