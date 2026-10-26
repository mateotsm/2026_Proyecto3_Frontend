
import { NavLink, Outlet } from "react-router-dom";
import {
  Dumbbell,
  LayoutDashboard,
  Users,
  ClipboardList,
  Activity,
  ChartNoAxesCombined,
} from "lucide-react";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/personas", label: "Personas", icon: Users },
  { to: "/ejercicios", label: "Ejercicios", icon: Dumbbell },
  { to: "/rutinas", label: "Rutinas", icon: ClipboardList },
  { to: "/entrenamiento", label: "Entrenamiento", icon: Activity },
  { to: "/progreso", label: "Progreso", icon: ChartNoAxesCombined },
];

export default function MainLayout() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2>TrainTrack</h2>

        <nav>
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <Icon size={19} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <span>Gestión de entrenamiento</span>
        </header>

        <section className="page-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
