import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import MenuPage from "@/pages/MenuPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<MenuPage />} path="/menu" />
      </Routes>
    </HashRouter>
  );
}

export default App;
