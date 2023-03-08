import { Routes, BrowserRouter, Route } from "react-router-dom";
import Hero from "./components/hero";
import Format from "./layout/format";
import Demo from "./components/demo";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Format>
              <Demo />
            </Format>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
