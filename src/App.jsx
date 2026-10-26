
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Personas from "./pages/Personas";
import Rutinas from "./pages/Rutinas";
import Progreso from "./pages/Progreso";
import Entrenamiento from "./pages/Entrenamiento";
import Ejecicios from "./pages/Ejercicios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/rutinas" element={<Rutinas />} />
          <Route path="/progreso" element={<Progreso />} />
          <Route path="/entrenamiento" element={<Entrenamiento />} />
          <Route path="/ejercicios" element={<Ejecicios />} />
        </Route>


        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
