import { useState } from "react";

import "./App.css";
import { Searchbox } from "./components/Searchbox";


function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <Searchbox setResults={setResults} />
        {results && results.length > 0} 
      </div>
    </div>
  );
}

export default App;
