# Wiki Azure · Puerto Frío Logística

Aplicación web académica para documentar los controles de seguridad de Microsoft Azure aplicados al caso práctico **Puerto Frío Logística**.

La wiki organiza el contenido de la Unidad 2 en cinco secciones: configuración de almacenamiento, autenticación, gestión de permisos, auditoría y propuestas de mejora.

## Tecnologías

- React
- Vite
- React Router
- Tailwind CSS 4 (integrado mediante el plugin de Vite)
- CSS propio para los componentes y la presentación de informe técnico

## Requisitos

- Node.js compatible con la versión de Vite instalada.
- npm.

## Instalación y ejecución

    npm install
    npm run dev

Vite mostrará la dirección local para abrir la aplicación en el navegador.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| npm run dev | Inicia el servidor de desarrollo. |
| npm run build | Genera la versión de producción en dist/. |
| npm run preview | Permite revisar localmente la compilación. |
| npm run lint | Ejecuta ESLint. |

## Estructura principal

    src/
    ├── components/
    │   ├── Callout.jsx
    │   ├── CodeBlock.jsx
    │   ├── DataTable.jsx
    │   ├── SectionLayout.jsx
    │   └── Sidebar.jsx
    ├── pages/
    │   ├── Overview.jsx
    │   └── Sections.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx

## Despliegue en Vercel

1. Importar el repositorio desde GitHub en Vercel.
2. Mantener el preset de framework Vite.
3. Utilizar npm run build como comando de compilación.
4. Utilizar dist como directorio de salida.

Las rutas de la aplicación se gestionan con React Router. Para un despliegue con navegación directa a rutas internas, Vercel debe aplicar una reescritura de rutas hacia index.html si la configuración del proyecto no la incorpora automáticamente.

## Alcance del contenido

El documento diferencia entre configuraciones descritas como aplicadas o validadas en el caso y controles que se plantean como mejoras. No se inventan valores que no aparecen en el material base, como la IP autorizada, períodos de retención o métricas concretas de RPO/RTO.
