import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', number: '00', label: 'Resumen ejecutivo', end: true },
  { to: '/seguridad-inicial', number: '01', label: 'Configuración de seguridad' },
  { to: '/acceso-autenticacion', number: '02', label: 'Acceso y autenticación' },
  { to: '/identidad-permisos', number: '03', label: 'Identidad y permisos' },
  { to: '/auditoria-registros', number: '04', label: 'Auditoría y registros' },
  { to: '/mejoras', number: '05', label: 'Propuestas de mejora' },
]

function ShieldMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 19 6v5.2c0 4.7-2.8 7.7-7 9.8-4.2-2.1-7-5.1-7-9.8V6l7-3Z" />
      <path d="m8.5 11.8 2.2 2.2 4.8-5" />
    </svg>
  )
}

export default function Sidebar({ isOpen, onNavigate }) {
  return (
    <aside className={'sidebar ' + (isOpen ? 'open' : '')} aria-label="Navegación principal">
      <Link className="brand" to="/" onClick={onNavigate}>
        <span className="brand-mark"><ShieldMark /></span>
        <span className="brand-copy">
          <strong>PUERTO FRÍO</strong>
          <span>LOGÍSTICA · WIKI TÉCNICA</span>
        </span>
      </Link>

      <p className="sidebar-caption">CONTENIDO DEL DOCUMENTO</p>
      <nav className="sidebar-nav">
        {links.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={onNavigate}
            className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}
          >
            <span className="nav-number">{item.number}</span>
            <span className="nav-link-text">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <p className="sidebar-bottom-label">CONTEXTO DEL CASO</p>
        <p>Protección de certificados de temperatura y control de acceso a los recursos de Azure.</p>
        <span className="document-status">Contenido de unidad 2</span>
      </div>
    </aside>
  )
}
