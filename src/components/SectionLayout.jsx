import { Link } from 'react-router-dom'

export default function SectionLayout({ number, eyebrow, title, description, previous, next, children }) {
  return (
    <article className="document-section">
      <div className="page-heading">
        <p className="page-kicker">{number} / {eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
      {(previous || next) && (
        <nav className="next-page" aria-label="Navegación entre secciones">
          {previous ? <Link to={previous.to}>← {previous.label}</Link> : <span />}
          {next ? <Link to={next.to}>{next.label} →</Link> : <span />}
        </nav>
      )}
    </article>
  )
}
