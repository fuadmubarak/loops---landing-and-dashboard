import { LandingPage, Dashboard } from "@pages";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
      </Routes>
  );
}

export default App;
