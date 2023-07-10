import './App.css';
import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';


function App() {
    return (
      <>
      <BrowserRouter>
      {localStorage.getItem("token") == null && <Login />}

      {localStorage.getItem("token") !=null && <Home />}
      </BrowserRouter>
      </>
    );
  }
export default App;
