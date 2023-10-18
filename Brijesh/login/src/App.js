import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Dashbord from "./components/Dashbord";
import Protectaderoute from "./components/Protectaderoute";
import Singin from "./components/Singin";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Socialmedia from "./components/Socialmedia";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={<Protectaderoute Component={Dashbord} />}
          >
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="Socialmedia" element={<Socialmedia/>} />
          </Route>
          <Route path="/error" element={<Error />} />
          <Route path="/singin" element={<Singin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
