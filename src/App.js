import { Routes, Route } from "react-router-dom";
import { CategoriasProvider } from "./contexts/CategoriasContext";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";

function App() {
  return (
    <CategoriasProvider>
      <Cabecalho />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/novo-video"
          element={<NovoVideo />}
        />
      </Routes>

      <Rodape />
    </CategoriasProvider>
  )
}

export default App