import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Data } from "./data/presets";
import AppContext from "./context/AppContext";
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
