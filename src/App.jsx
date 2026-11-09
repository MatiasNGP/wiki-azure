import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Overview from './pages/Overview.jsx'
import {
  AccessControl,
  AuditLogs,
  IdentityPermissions,
  Improvements,
  InitialSecurity,
} from './pages/Sections.jsx'
import './App.css'

const pageDetails = {
  '/': { title: 'Resumen ejecutivo' },
  '/seguridad-inicial': { title: 'Configuración de seguridad inicial' },
  '/acceso-autenticacion': { title: 'Control de acceso y autenticación' },
  '/identidad-permisos': { title: 'Gestión de identidad y permisos' },
  '/auditoria-registros': { title: 'Auditoría y análisis de registros' },
  '/mejoras': { title: 'Propuestas de mejora' },
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { pathname } = useLocation()
  const currentPage = pageDetails[pathname] ?? pageDetails['/']
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="app-shell">
      <Sidebar isOpen={sidebarOpen} onNavigate={closeSidebar} />
      {sidebarOpen && (
        <button
          className="sidebar-scrim"
          type="button"
          aria-label="Cerrar menú de navegación"
          onClick={closeSidebar}
        />
      )}

      <div className="workspace">
        <header className="topbar">
          <button
            className="mobile-menu-button"
            type="button"
            aria-label="Abrir menú de navegación"
            aria-expanded={sidebarOpen}
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon />
          </button>
          <div className="topbar-location">
            <span>WIKI TÉCNICA</span>
            <span className="topbar-divider">/</span>
            <strong>{currentPage.title}</strong>
          </div>
          <div className="topbar-status">
            <span className="status-indicator" />
            <span>Unidad 2 · Seguridad Azure</span>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/seguridad-inicial" element={<InitialSecurity />} />
            <Route path="/acceso-autenticacion" element={<AccessControl />} />
            <Route path="/identidad-permisos" element={<IdentityPermissions />} />
            <Route path="/auditoria-registros" element={<AuditLogs />} />
            <Route path="/mejoras" element={<Improvements />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <span>Puerto Frío Logística</span>
          <span>Documentación técnica · Unidad 2</span>
        </footer>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
