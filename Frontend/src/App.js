import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />



        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
