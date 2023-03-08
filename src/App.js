import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Data } from "./data/presets";
import AppContext from "./context/AppContext";
import { useState, useEffect } from "react";
import Archive from "./pages/archive";
function App() {
  const [isLoading, setLoading] = useState(true);
  
  function someRequest() { 
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  } 

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) { 
    return null;
  }

  return (
    <AppContext.Provider value={Data}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="/archive" element={<Archive />}></Route>
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
