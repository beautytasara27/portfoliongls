import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Data } from "./data/presets";
import AppContext from "./context/AppContext";
import Loading from "./components/Loader/loading";
import { useContext } from "react";
function App() {
  
  return (
    <AppContext.Provider value={Data}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="" element={<Home />}></Route>
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
