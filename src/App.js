import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/Home";

function App() {
  return (
    <div className=" ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
