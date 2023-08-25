import { useState } from "react";
import { Route, Routes } from "react-router";
import SignIn from "./page/SignIn";
import Home from "./page/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
