import AddList from '../AddList';
import DoneList from '../DoneList';
import ToDo from '../ToDo';

import {
    Route,
    Routes,
    Link,
} from "react-router-dom";

function Home() {
  return (
    <>
        <nav>
            <ul>
                <li><Link to='/toDoList'>To-Do List</Link></li>
                <li><Link to='/doneList'>Done To-Do's</Link></li>
                <li><Link to='/addList'>Add To-Do</Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path="/toDoList" element={<ToDo />} />
            <Route path="/doneList" element={<DoneList />} />
            <Route path="/addList" element={<AddList />} />
        </Routes>
    </>
    
  );
}

export default Home;
