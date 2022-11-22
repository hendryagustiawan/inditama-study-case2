import { LoginPage, HomePage, DetailPage, AddPage, EditPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectRouter from "./pages/ProtectRouter";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectRouter />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
