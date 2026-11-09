import SectionLayout from '../components/SectionLayout.jsx'
import Callout from '../components/Callout.jsx'
import DataTable from '../components/DataTable.jsx'
import CodeBlock from '../components/CodeBlock.jsx'

const nextLinks = {
  security: { to: '/acceso-autenticacion', label: 'Control de acceso y autenticación' },
  access: { to: '/identidad-permisos', label: 'Gestión de identidad y permisos' },
  identity: { to: '/auditoria-registros', label: 'Auditoría y análisis de registros' },
  audit: { to: '/mejoras', label: 'Propuestas de mejora' },
}

export function InitialSecurity() {
  const columns = [
    { key: 'setting', label: 'Configuración' },
    { key: 'value', label: 'Valor documentado', render: (value) => <span className="table-primary">{value}</span> },
    { key: 'purpose', label: 'Finalidad' },
  ]
  const rows = [
    { setting: 'Cuenta de almacenamiento', value: 'stpuertofrio01', purpose: 'Repositorio utilizado para los certificados de temperatura.' },
    { setting: 'Redundancia', value: 'Standard_LRS', purpose: 'Configuración de redundancia local indicada para la cuenta.' },
    { setting: 'Transporte seguro', value: 'HTTPS obligatorio', purpose: 'Evitar transferencias mediante conexiones HTTP sin cifrar.' },
    { setting: 'Versión TLS mínima', value: 'TLS 1.2', purpose: 'Establecer una versión mínima de protocolo para las conexiones.' },
    { setting: 'Acceso anónimo', value: 'Deshabilitado', purpose: 'Impedir el acceso público no autenticado a los blobs.' },
    { setting: 'Cifrado de blobs', value: 'Activado', purpose: 'Proteger los datos almacenados mediante cifrado.' },
    { setting: 'Firewall de red', value: 'Deny por defecto', purpose: 'Bloquear conexiones no incluidas explícitamente en las reglas.' },
    { setting: 'Regla de IP', value: 'IP específica autorizada', purpose: 'Permitir únicamente el origen de red definido en la práctica.' },
  ]

  return (
    <SectionLayout
      number="01" eyebrow="ALMACENAMIENTO Y RED" title="Configuración de seguridad inicial"
      description="Controles aplicados a la cuenta de almacenamiento stpuertofrio01 para limitar la exposición de los certificados y exigir conexiones seguras."
      previous={{ to: '/', label: 'Resumen ejecutivo' }} next={nextLinks.security}
    >
      <section className="section-block">
        <h2>1.1 Repositorio de certificados</h2>
        <p className="body-copy">
          La protección inicial se centra en la cuenta <code>stpuertofrio01</code>.
          La configuración documentada mantiene la redundancia <code>Standard_LRS</code>
          y combina restricciones de transporte, acceso al contenido y filtrado de red.
        </p>
      </section>

      <section className="section-block">
        <div className="panel-title">
          <div><h2>Matriz de configuración</h2><p className="panel-subtitle">Parámetros de seguridad descritos en el caso</p></div>
          <span className="status-label">Configuración documentada</span>
        </div>
        <DataTable columns={columns} rows={rows} label="Matriz de configuración de la cuenta stpuertofrio01" />
      </section>

      <section className="section-block section-grid two-columns">
        <div>
          <h2>1.2 Reglas de red</h2>
          <p className="body-copy">
            El firewall se configura con una acción predeterminada de denegación (<code>Deny</code>).
            La excepción corresponde a una dirección IP específica autorizada para el acceso.
            De esta forma, el acceso no queda abierto a cualquier origen de red.
          </p>
          <Callout variant="danger" title="Riesgo abordado">
            Mantener el acceso anónimo o permitir conexiones desde cualquier red facilitaría
            el acceso no autorizado a los certificados y aumentaría la exposición del repositorio.
          </Callout>
        </div>
        <div>
          <CodeBlock title="Resumen lógico de la configuración" language="yaml"
            note="Representación descriptiva de los parámetros del caso; no es una transcripción de comandos ejecutados.">
            {'storage_account: stpuertofrio01\nredundancy: Standard_LRS\nsecure_transfer_required: true\nminimum_tls_version: TLS1_2\nanonymous_blob_access: disabled\nblob_encryption: enabled\n\nnetwork_rules:\n  default_action: Deny\n  allowed_ip:\n    - IP específica autorizada'}
          </CodeBlock>
        </div>
      </section>

      <Callout variant="success" title="Resultado de la configuración">
        El repositorio queda documentado con transporte seguro, acceso anónimo deshabilitado,
        cifrado de blobs habilitado y una política de red restrictiva basada en denegación por defecto.
      </Callout>
    </SectionLayout>
  )
}

export function AccessControl() {
  const columns = [
    { key: 'control', label: 'Control' },
    { key: 'state', label: 'Estado en el caso' },
    { key: 'detail', label: 'Descripción' },
  ]
  const rows = [
    { control: 'Security Defaults', state: <span className="status-label">Activado</span>, detail: 'Configuración de seguridad predeterminada de Microsoft Entra ID habilitada.' },
    { control: 'Autenticación multifactor (MFA)', state: <span className="status-label">Enrolamiento realizado</span>, detail: 'Los usuarios deben completar el proceso de registro de un segundo factor.' },
    { control: 'Acceso Condicional', state: <span className="status-label proposed">Diseño teórico</span>, detail: 'Políticas propuestas para restringir ubicaciones y exigir dispositivos compatibles.' },
  ]
  const policyColumns = [
    { key: 'policy', label: 'Política propuesta' },
    { key: 'condition', label: 'Criterio' },
    { key: 'purpose', label: 'Propósito' },
  ]
  const policyRows = [
    { policy: 'Restricción por ubicación', condition: 'Ubicaciones permitidas definidas por la organización.', purpose: 'Limitar los inicios de sesión desde ubicaciones no autorizadas.' },
    { policy: 'Dispositivo compatible', condition: 'Acceso condicionado al estado de cumplimiento del dispositivo.', purpose: 'Evitar el acceso desde equipos que no cumplan los requisitos establecidos.' },
  ]

  return (
    <SectionLayout
      number="02" eyebrow="IDENTIDAD Y AUTENTICACIÓN" title="Control de acceso y autenticación"
      description="Medidas para reforzar la validación de identidad y reducir el riesgo asociado al uso de credenciales compartidas."
      previous={{ to: '/seguridad-inicial', label: 'Configuración de seguridad inicial' }} next={nextLinks.access}
    >
      <section className="section-block">
        <h2>2.1 Controles documentados</h2>
        <p className="body-copy">
          El caso contempla la activación de Security Defaults y el enrolamiento de los usuarios
          en MFA. Estos controles fortalecen el proceso de autenticación y reducen la dependencia
          de una contraseña como único mecanismo de acceso.
        </p>
        <div className="section-block"><DataTable columns={columns} rows={rows} label="Estado de controles de autenticación" /></div>
      </section>

      <section className="section-block">
        <h2>2.2 Proceso de enrolamiento MFA</h2>
        <div className="step-list">
          <div className="step-item"><span className="step-number">01</span><div><h3>Habilitación de Security Defaults</h3><p>Se activa la configuración predeterminada de seguridad para el entorno de identidad.</p></div></div>
          <div className="step-item"><span className="step-number">02</span><div><h3>Registro del segundo factor</h3><p>Los usuarios realizan el enrolamiento de MFA para complementar la autenticación.</p></div></div>
          <div className="step-item"><span className="step-number">03</span><div><h3>Uso de autenticación reforzada</h3><p>El inicio de sesión considera un factor adicional al uso de credenciales.</p></div></div>
        </div>
      </section>

      <section className="section-block">
        <h2>2.3 Diseño teórico de Acceso Condicional</h2>
        <p className="body-copy">
          Como medida de diseño, se plantean políticas que evalúen la ubicación desde donde
          se realiza el acceso y el cumplimiento del dispositivo. El material del caso las
          presenta como una propuesta teórica, no como políticas implementadas.
        </p>
        <div className="section-block"><DataTable columns={policyColumns} rows={policyRows} label="Diseño teórico de políticas de Acceso Condicional" /></div>
        <Callout variant="warning" title="Alcance de la propuesta">
          Las reglas de ubicación, los criterios de cumplimiento y las acciones de bloqueo
          deberán definirse antes de implementar estas políticas en el entorno real.
        </Callout>
      </section>
    </SectionLayout>
  )
}

export function IdentityPermissions() {
  const columns = [
    { key: 'group', label: 'Grupo de seguridad', render: (value) => <code>{value}</code> },
    { key: 'role', label: 'Rol asignado', render: (value) => <span className="table-primary">{value}</span> },
    { key: 'scope', label: 'Responsabilidad documentada' },
  ]
  const rows = [
    { group: 'grp-recepcion', role: 'LectorInfraPuertoFrio', scope: 'Lectura de infraestructura según el alcance definido para el rol personalizado.' },
    { group: 'grp-admin', role: 'Storage Blob Data Contributor', scope: 'Contribución y administración de datos de blobs dentro del alcance asignado.' },
    { group: 'grp-auditoria', role: 'Monitoring Reader', scope: 'Consulta de información de supervisión y monitorización.' },
  ]

  return (
    <SectionLayout
      number="03" eyebrow="AUTORIZACIÓN Y MÍNIMO PRIVILEGIO" title="Gestión de identidad y permisos"
      description="Segregación de funciones mediante grupos de seguridad y asignación de permisos según la responsabilidad de cada perfil."
      previous={{ to: '/acceso-autenticacion', label: 'Control de acceso y autenticación' }} next={nextLinks.identity}
    >
      <section className="section-block">
        <h2>3.1 Principio de mínimo privilegio</h2>
        <p className="body-copy">
          El principio de mínimo privilegio establece que cada grupo debe contar solo con los
          permisos necesarios para cumplir sus tareas. La separación por grupos facilita la
          administración de accesos y evita concentrar todas las capacidades en una única identidad.
        </p>
        <Callout variant="info" title="Segregación de funciones">
          Recepción, administración y auditoría se documentan como funciones diferenciadas,
          con roles asociados a sus necesidades de operación.
        </Callout>
      </section>

      <section className="section-block">
        <div className="panel-title">
          <div><h2>3.2 Matriz de grupos y roles</h2><p className="panel-subtitle">Asignaciones especificadas para el caso Puerto Frío Logística</p></div>
          <span className="status-label">3 grupos definidos</span>
        </div>
        <DataTable columns={columns} rows={rows} label="Matriz de grupos de seguridad y roles asignados" />
      </section>

      <section className="section-block section-grid equal-columns">
        <div className="panel">
          <h3>Rol personalizado</h3>
          <p className="body-copy">
            <code>LectorInfraPuertoFrio</code> se asocia al grupo <code>grp-recepcion</code>.
            Su alcance debe corresponder a las operaciones de lectura de infraestructura
            contempladas en la definición del rol.
          </p>
        </div>
        <div className="panel">
          <h3>Roles integrados de Azure</h3>
          <p className="body-copy">
            Los grupos <code>grp-admin</code> y <code>grp-auditoria</code> utilizan los roles
            Storage Blob Data Contributor y Monitoring Reader, respectivamente, de acuerdo
            con las funciones documentadas.
          </p>
        </div>
      </section>
      <Callout variant="warning" title="Revisión de asignaciones">
        El alcance exacto de cada asignación debe comprobarse en el ámbito correspondiente
        del recurso. No se agregan permisos específicos que no estén detallados en el material base.
      </Callout>
    </SectionLayout>
  )
}

export function AuditLogs() {
  const columns = [
    { key: 'source', label: 'Origen del registro' },
    { key: 'evidence', label: 'Información revisada' },
    { key: 'use', label: 'Utilidad para la auditoría' },
  ]
  const rows = [
    { source: 'Azure Activity Log', evidence: 'Eventos de actividad y operaciones realizadas sobre los recursos de Azure.', use: 'Revisar cambios y operaciones relevantes en la suscripción.' },
    { source: 'Interactive Sign-ins (Entra ID)', evidence: 'Registros de inicios de sesión interactivos.', use: 'Analizar los accesos realizados por las identidades.' },
    { source: 'Directory Audits (Entra ID)', evidence: 'Eventos de auditoría del directorio.', use: 'Revisar cambios relacionados con la administración del directorio.' },
  ]

  return (
    <SectionLayout
      number="04" eyebrow="TRAZABILIDAD Y VALIDACIÓN" title="Auditoría y análisis de registros"
      description="Fuentes utilizadas para revisar operaciones de Azure, actividad de inicio de sesión y cambios sobre el directorio de identidades."
      previous={{ to: '/identidad-permisos', label: 'Gestión de identidad y permisos' }} next={nextLinks.audit}
    >
      <section className="section-block">
        <h2>4.1 Fuentes de auditoría</h2>
        <p className="body-copy">
          La revisión combina registros de actividad de Azure con los registros de Microsoft Entra ID.
          Esta separación permite observar tanto operaciones realizadas sobre recursos como eventos
          asociados a las identidades y al directorio.
        </p>
        <div className="section-block"><DataTable columns={columns} rows={rows} label="Fuentes de auditoría y registros analizados" /></div>
      </section>

      <section className="section-block">
        <h2>4.2 Validación de denegación de permisos</h2>
        <p className="body-copy">
          Se validó que un intento de modificar la configuración de red sin autorización
          fuera rechazado. El resultado <code>AuthorizationFailed</code> evidencia que la
          operación no contaba con los permisos requeridos.
        </p>
        <div className="section-block">
          <CodeBlock title="Resultado resumido de la validación" language="log"
            note="Representación conceptual del resultado descrito en el caso; no corresponde a una exportación literal del registro de Azure.">
            {'operacion: Intento de modificación de red\nresultado: AuthorizationFailed\nefecto:    Acceso denegado\nvalidacion: Permisos insuficientes'}
          </CodeBlock>
        </div>
        <Callout variant="success" title="Validación exitosa">
          La denegación confirma que la identidad utilizada no pudo modificar la red sin
          autorización. El control evita que un usuario sin permisos suficientes realice
          cambios en la configuración del recurso.
        </Callout>
      </section>

      <section className="section-block">
        <h2>4.3 Relación entre eventos y control</h2>
        <div className="panel">
          <ul className="inline-list">
            <li>Azure Activity Log permite revisar la operación sobre el recurso.</li>
            <li>Interactive Sign-ins aporta contexto sobre el inicio de sesión de la identidad.</li>
            <li>Directory Audits permite revisar cambios administrativos del directorio.</li>
            <li>El resultado <code>AuthorizationFailed</code> aporta evidencia de la denegación de permisos.</li>
          </ul>
        </div>
      </section>
    </SectionLayout>
  )
}

export function Improvements() {
  const recommendations = [
    { number: '01', title: 'Almacenamiento inmutable (WORM)', description: 'Evaluar políticas de inmutabilidad Write Once, Read Many para impedir modificaciones o eliminaciones de los certificados durante el período de retención que se defina.' },
    { number: '02', title: 'Validación del emisor del certificado', description: 'Incorporar una comprobación del emisor y de la confianza del certificado antes de aceptar o procesar el documento de temperatura.' },
    { number: '03', title: 'Private Endpoints para la red industrial', description: 'Evaluar el uso de Private Endpoints para que el acceso a los servicios de Azure se realice mediante conectividad privada desde la red correspondiente.' },
    { number: '04', title: 'Pruebas periódicas de restauración', description: 'Ejecutar pruebas de restauración de respaldos y comprobar que los objetivos definidos de RPO y RTO puedan cumplirse.' },
  ]

  return (
    <SectionLayout
      number="05" eyebrow="FORTALECIMIENTO Y CONTINUIDAD" title="Propuestas de mejora"
      description="Controles adicionales recomendados para reforzar la integridad de los certificados y la continuidad de los servicios asociados."
      previous={{ to: '/auditoria-registros', label: 'Auditoría y análisis de registros' }}
    >
      <section className="section-block">
        <p className="body-copy">
          Las siguientes acciones complementan las medidas documentadas en las secciones anteriores.
          Se presentan como propuestas de mejora y requieren evaluación antes de su implementación.
        </p>
      </section>

      <section className="section-block">
        <div className="recommendation-grid">
          {recommendations.map((item) => (
            <article className="recommendation-card" key={item.number}>
              <span className="recommendation-index">MEJORA {item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="status-label proposed">Propuesta de mejora</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>5.1 Definiciones necesarias para la implementación</h2>
        <DataTable
          columns={[
            { key: 'item', label: 'Elemento' },
            { key: 'definition', label: 'Definición pendiente' },
          ]}
          rows={[
            { item: 'Inmutabilidad WORM', definition: 'Período de retención y condiciones de protección requeridas.' },
            { item: 'Validación de certificados', definition: 'Emisores aceptados y criterios de confianza que utilizará la organización.' },
            { item: 'Private Endpoints', definition: 'Servicios y segmentos de red que deberán utilizar conectividad privada.' },
            { item: 'Respaldos', definition: 'Valores objetivo de RPO y RTO, junto con la frecuencia de las pruebas de restauración.' },
          ]}
          label="Definiciones pendientes para implementar las mejoras"
        />
      </section>

      <Callout variant="info" title="Criterio de continuidad">
        Las pruebas de restauración deben demostrar que la información puede recuperarse
        dentro de los objetivos de recuperación definidos por la organización. Los valores
        concretos de RPO y RTO no están especificados en el material del caso.
      </Callout>
    </SectionLayout>
  )
}
