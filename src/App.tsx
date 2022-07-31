import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Archive from "./pages/Archive";
import Home from "./pages/Home";
import Stream from "./pages/Stream";

function App() {
  return (
    <main className="main">
      <div className="App">
        <h1>Welcome to Sport Live</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="stream" element={<Stream />} />
          <Route path="archive" element={<Archive />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
