import './App.css';
import ToDoProvider from './Contex/index';
import {BrowserRouter} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <ToDoProvider>
        <Home/>
      </ToDoProvider>
    </BrowserRouter>
  )
}

export default App;
