import './App.css';
import Components from './Components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodo from './Components/AddTodo';
import ListTodo from './Components/ListTodo';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Components/>}>
          <Route index element={<Home/>} />
          <Route path="AddTodo" element={<AddTodo/>} />
          <Route path="ListTodo" element={<ListTodo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
