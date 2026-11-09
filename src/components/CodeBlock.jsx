export default function CodeBlock({ title, language = 'text', children, note }) {
  return (
    <div>
      <div className="code-panel">
        <div className="code-panel-header">
          <span>{title}</span>
          <span>{language}</span>
        </div>
        <pre><code>{children}</code></pre>
      </div>
      {note && <p className="code-note">{note}</p>}
    </div>
  )
}
