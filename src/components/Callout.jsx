const symbols = { info: 'i', warning: '!', danger: '!', success: '✓' }

export default function Callout({ variant = 'info', title, children }) {
  return (
    <aside className={'callout ' + variant} role={variant === 'danger' || variant === 'warning' ? 'note' : 'status'}>
      <span className="callout-icon" aria-hidden="true">{symbols[variant]}</span>
      <div className="callout-content">
        <strong>{title}</strong>
        <p>{children}</p>
      </div>
    </aside>
  )
}
