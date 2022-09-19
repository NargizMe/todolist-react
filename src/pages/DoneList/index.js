import { useContext } from 'react';
import {toDoContext} from '../../Contex/index';

function DoneList() {
    const {done, setDone} = useContext(toDoContext);

  return (
    <>
        <h1>Done List</h1>
        <ul>
            {
                done.map((el,i) => {
                   return <li key={i}>{el}</li>
                })
            }
        </ul>
        <button onClick={() => setDone([])}>Delete</button>
    </>
  );
}

export default DoneList;
