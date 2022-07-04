import { Routes, Route } from "react-router-dom";
import Twitteay from "./components/Twitteay";
import Main from "./components/Main";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/create-twitteay" element={<Twitteay />}></Route>
      </Routes>
    </>
  );
}

export default App;
