import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Error404 from "./components/Error404";
import Logout from "./components/Logout";
import "bootstrap/dist/css/bootstrap.css";
import { useReducer } from "react";
import { initialstate } from "./reducer/UseReducer";
import UseReducer from "./reducer/UseReducer";

export const UserContext = React.createContext();
function App() {
  const [state, dispatch] = useReducer(UseReducer, initialstate);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
