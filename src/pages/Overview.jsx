import { Link } from 'react-router-dom'
import Callout from '../components/Callout.jsx'

const sections = [
  { number: '01', title: 'Configuración de seguridad inicial', description: 'Protección del almacenamiento, cifrado, transporte seguro y reglas de red.', to: '/seguridad-inicial' },
  { number: '02', title: 'Control de acceso y autenticación', description: 'Security Defaults, enrolamiento MFA y diseño de Acceso Condicional.', to: '/acceso-autenticacion' },
  { number: '03', title: 'Gestión de identidad y permisos', description: 'Grupos de seguridad y asignación de roles bajo mínimo privilegio.', to: '/identidad-permisos' },
  { number: '04', title: 'Auditoría y análisis de registros', description: 'Revisión de actividad, inicios de sesión y cambios de directorio.', to: '/auditoria-registros' },
  { number: '05', title: 'Propuestas de mejora', description: 'Controles adicionales para integridad, red industrial y continuidad.', to: '/mejoras' },
]

export default function Overview() {
  return (
    <article className="document-section">
      <section className="overview-hero">
        <div className="overview-hero-content">
          <p className="page-kicker">DOCUMENTACIÓN TÉCNICA · UNIDAD 2</p>
          <h1>Seguridad de Microsoft Azure</h1>
          <p>
            Registro técnico del caso práctico de Puerto Frío Logística. El objetivo es
            proteger la integridad de los certificados de temperatura asociados a los
            embarques mediante controles de almacenamiento, identidad, permisos y auditoría.
          </p>
          <div className="hero-tags">
            <span className="hero-tag">CASO: PUERTO FRÍO LOGÍSTICA</span>
            <span className="hero-tag">PLATAFORMA: MICROSOFT AZURE</span>
            <span className="hero-tag">UNIDAD 2</span>
          </div>
        </div>
      </section>

      <div className="overview-stats" aria-label="Resumen del contenido">
        <div className="stat-card"><strong>05</strong><span>Secciones documentadas</span></div>
        <div className="stat-card"><strong>03</strong><span>Grupos de seguridad definidos</span></div>
        <div className="stat-card"><strong>01</strong><span>Validación de denegación registrada</span></div>
      </div>

      <div className="overview-intro">
        <section className="overview-panel">
          <h2>1. Antecedentes del caso</h2>
          <p>
            Puerto Frío Logística necesita asegurar que los certificados de temperatura
            de sus embarques mantengan su integridad y que solo las identidades autorizadas
            puedan acceder a los recursos asociados. El escenario identifica dos debilidades
            iniciales: uso de credenciales compartidas y redes sin segmentación.
          </p>
          <Callout variant="warning" title="Riesgos identificados">
            Las credenciales compartidas dificultan la atribución de acciones a una persona
            y una red sin segmentación amplía la exposición de los recursos. La wiki documenta
            los controles aplicados y las mejoras propuestas para tratar estos riesgos.
          </Callout>
        </section>

        <section className="overview-panel">
          <h2>2. Objetivo de la documentación</h2>
          <ul className="risk-list">
            <li><span className="risk-dot" />Restringir el acceso al almacenamiento de certificados.</li>
            <li><span className="risk-dot" />Reforzar la autenticación de las identidades.</li>
            <li><span className="risk-dot" />Separar responsabilidades mediante roles y grupos.</li>
            <li><span className="risk-dot" />Mantener trazabilidad de operaciones y denegaciones.</li>
          </ul>
        </section>
      </div>

      <section className="section-index">
        <div className="section-index-heading">
          <h2>Índice de contenidos</h2>
          <span>Seleccione una sección para consultar el detalle</span>
        </div>
        <div className="section-link-grid">
          {sections.map((section) => (
            <Link className="section-link-card" to={section.to} key={section.number}>
              <span className="section-link-number">{section.number}</span>
              <span className="section-link-copy">
                <strong>{section.title}</strong>
                <span>{section.description}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <p className="scope-note">
        Alcance: el contenido distingue las medidas descritas como configuradas o validadas
        en el caso de aquellas que se presentan como propuestas. Los valores no especificados
        en el material base —por ejemplo, la IP autorizada o los objetivos concretos de RPO/RTO—
        no se inventan y deberán definirse según el entorno.
      </p>
    </article>
  )
}
