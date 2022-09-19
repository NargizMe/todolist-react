import { useContext, useState } from 'react';
import {toDoContext} from '../../Contex/index';

function AddList() {
    const [state, setState] = useState('');
    const {toDo, setToDo} = useContext(toDoContext);

    function addToDo() {
        if(!toDo.includes(state)){
            setToDo([...toDo, state ]);
            alert('To-do added');
        }
        else{
            alert('this to-do already exists');
        }
    }

  return (
    <>
        <h1>Add List</h1>
        <input placeholder='Add something' onChange={(e) => setState(e.target.value)}/>
        <button onClick={() => addToDo()}>Add To-Do</button>
    </>
  );
}

export default AddList;
