---
mode: mjo-litui
model: Claude Sonnet 4 (copilot)
description: Create a documentation page for a new feature in the project.
---

Crea la documentación para una nueva página de documentación para el componente ${componentName}. Puedes encontrar toda la informacion del componente en ${componentDocs}.

Analiza detenidamente las documentaciones existentes en `src/pages/docs/components/accordion.astro`, `src/pages/docs/components/alert.astro`, `src/pages/docs/components/avatar.astro` para entender el formato y estilo de las páginas de documentación. Es muy importante que utilices los mismos componentes y las propiedades y estilos que usan los componentes ya existentes.

Hazlo paso a paso para no perder contexto:
- Crea la introducción de la página de documentación y la importación.
- Crea la sección de ejemplos de uso con ejemplos de todas las propiedades y características del componente.
    - Analiza ejemplos de componentes existentes y crea los ejemplos de uso de componentes lit siguiendo el mismo patrón que en los ejemplos existentes en `src/components/examples`, los ejemplos tienen que ser sencillos y centrados en la propiedad o característica que se está documentando.
- Crea la tabla de propiedades con todas las propiedades del componente siguiendo exactamente el mismo formato de las tablas que hay en las páginas de documentación existentes.
- Crea la tabla de API con todos los métodos públicos del componente siguiendo exactamente el mismo formato de las tablas que hay en las páginas de documentación existentes.
- Crea la tabla de eventos con todos los eventos del componente siguiendo exactamente el mismo formato de las tablas que hay en las páginas de documentación existentes.
- Crea la sección de theming del componente.
    - Crea la tabla con todas las variables CSS del componente siguiendo exactamente el mismo formato de las tablas que hay en las páginas de documentación existentes.
    - Crea la tabla con todas las CSS parts del componente siguiendo exactamente el mismo formato de las tablas que hay en las páginas de documentación existentes.
    - Crea la interface del tema del componente siguiendo exactamente el mismo formato de las tablas que hay en las páginas de documentación existentes.
    - Crea ejemplos de de como personalizar el componente con variables CSS, CSS parts y usando el componente de `mjo-theme`.
- Crea la sección de accesibilidad del componente siguiendo exactamente el mismo formato de lista que hay en las páginas de documentación existentes.
- Crea la sección de tipos de definiciones del componente siguiendo exactamente el mismo formato que hay en las páginas de documentación existentes.