---
modo: Jira
model: GPT-5 mini (copilot)
description: Actualizar una tarea de Jira existente según la petición del usuario - solo actualizar lo que se solicite.
---

#file:../instructions/jira.instructions.md

# Actualizar una tarea de Jira

Tu misión es actualizar una tarea de Jira existente usando las herramientas MCP `jira`. Este prompt es **consciente del contexto** y solo actualiza lo que el usuario solicite explícitamente. All text in the issue must be in english.

## Estrategia de actualización consciente del contexto

**CRÍTICO**: Este prompt sigue un enfoque de "preguntar solo lo que falta":

1. **El usuario especifica qué actualizar** → Solo actualiza eso, no preguntes por otros campos
2. **El usuario no especifica detalles** → Pregunta únicamente la información que falta
3. **El usuario dice "update MSSED-XXX"** (sin detalles) → Pregunta qué quiere actualizar

**Ejemplos:**

-   "Update description of MSSED-1234" → Obtener la tarea, pedir la nueva descripción, actualizar solo eso
-   "Update target end to 2025-10-10" → Actualizar solo la fecha de finalización objetivo
-   "Change priority to High" → Actualizar solo la prioridad
-   "Update MSSED-1234" → Preguntar "What would you like to update?"

## Pasos del flujo de trabajo

### 1. Obtener la tarea actual

Siempre empieza obteniendo la tarea actual para ver los valores existentes.

Usa `mcp_jira_jira_get_issue` con los campos apropiados según lo que pueda actualizarse.

### 2. Identificar qué actualizar

Analiza la petición del usuario para determinar qué campos necesitan actualización:

**Tipos comunes de actualización:**

-   **Summary** (título)
-   **Description** (con Wiki Markup)
-   **Priority** (Blocker, High, Normal, Low)
-   **Assignee** (email o username)
-   **Dates** (Target start/end, Start/End date)
-   **Estimate** (timetracking - solo originalEstimate, remainingEstimate se calcula automáticamente)
-   **Custom fields** (Customer, Categorisation)
-   **State/Status** (usar transiciones, no actualización directa)
-   **Labels, Components**
-   **Crear subtareas** (si se solicita)

### 3. Pedir información faltante

**Solo pedir la información que falte** para la actualización específica solicitada.

Si el usuario dijo "update description", preguntar por la nueva descripción.
Si dijo "change priority", preguntar cuál prioridad.
Si dijo "update dates", preguntar qué fechas y valores nuevos.

**NO** preguntar por campos no relacionados.

### 4. Mostrar resumen antes de actualizar

Mostrar qué se actualizará y pedir confirmación:

```
📝 Update Summary for MSSED-XXXX

Current: [Current value]
New: [New value]

Proceed with update? (yes/no)
```

### 5. Realizar la actualización

Usa la herramienta MCP Jira apropiada para actualizar:

-   Para campos estándar: `mcp_jira_jira_update_issue` con el parámetro `fields`
-   Para timetracking: `mcp_jira_jira_update_issue` con `additional_fields`
-   Para transiciones: `mcp_jira_jira_transition_issue`
-   Para comentarios: `mcp_jira_jira_add_comment`

### 6. Proveer informe de actualización

Después de la actualización exitosa, mostrar:

```
✅ Task Updated Successfully

Task: MSSED-XXXX - [Summary]
Link: [Jira URL]

Updated fields:
- [Field name]: [Old value] → [New value]
```

**Campos actualizados**: Si se actualizaron múltiples campos, listar cada uno con valor antiguo y nuevo. Si solo se actualizó la descripción, decir simplemente "Description updated".
**Jira URL**: El formato es `https://manuovera.atlassian.net/browse/[issue-key]`

## Referencia de campos actualizables

### Summary (Título)

```json
{
    "fields": {
        "summary": "New title (max 10 words recommended)"
    }
}
```

### Description

Debe usar formato Wiki Markup. Recuerda la estructura estándar.

```json
{
    "fields": {
        "description": "h1. Description\n[content]..."
    }
}
```

#### Guía para escribir la descripción

**Principios generales:**

-   Escribir como un **desarrollador profesional** con lenguaje claro, conciso y accionable
-   Proveer **contexto y justificación** para la tarea, no solo lo que hay que hacer
-   Enfocarse en **valor de negocio** y **impacto técnico**
-   Usar **wiki markup** correctamente
-   Mantener cada sección **enfocada** y relevante - evitar verborrea

**Instrucciones por sección:**

**h1. Description**

-   Explicar **qué** necesita hacerse y **por qué** importa
-   Proveer contexto de negocio o impacto de usuario
-   Mantenerlo claro y directo (3-5 frases típicamente)

**h1. Acceptance Criteria**

-   Listar **condiciones específicas y comprobables** que definen la finalización
-   Usar listas no ordenadas (`*`) con resultados medibles
-   Cada criterio debe ser verificable de forma independiente
-   Mantener de 3 a 7 criterios - si hay más, considerar subtareas

**h1. Technical Notes**

-   Proveer **guía de implementación** solo si tienes contexto claro del proyecto
-   Mencionar archivos, componentes o patrones relevantes
-   Incluir restricciones técnicas o dependencias
-   Mantenerlo de alto nivel (2-4 puntos clave)
-   Si no estás seguro, escribir `TODO` en vez de adivinar

**h1. Detail solution**

-   Siempre escribir `TODO` - esta sección se llena **después** de completar la tarea
-   Nunca pre-poblar esta sección al crear tareas

**h1. How to test**

-   Proveer **guía de prueba de alto nivel**, NO casos de prueba exhaustivos
-   Enfocarse en **cómo verificar** que la funcionalidad funciona
-   Mantenerlo conciso (2-4 viñetas max)
-   Si no puedes proveer guía significativa, escribir `TODO`

**Para bugs:**

-   **Steps to Reproduce**: Debe ser proporcionado por el usuario - preguntarlo si falta
-   **Expected Result**: Debe ser proporcionado por el usuario - preguntarlo si falta
-   **Actual Result**: Escribir lo que ocurre o `TODO`
-   **Environment**: Inferir del proyecto (ej., "Production - Efbet.com ES regulation, Chrome 120")

**Errores comunes a evitar:**

-   ❌ Escribir código de implementación o algoritmos detallados
-   ❌ Crear listas de pruebas exhaustivas (ser conciso)
-   ❌ Usar `[]` checkboxes o `#` para listas numeradas (no soportado)
-   ❌ Usar `*text*` para código/archivos (usar `{{text}}` en su lugar)
-   ❌ Usar `*text*` para negrita (crea cursiva - usar `h3.` para títulos)
-   ❌ Bullets anidados `**` o `***` (usar `h3.` + `*` simple)
-   ❌ Ser vago o genérico ("fix the bug")
-   ❌ Sobre-explicar puntos obvios

### Priority

```json
{
    "fields": {
        "priority": { "name": "High" }
    }
}
```

Valores posibles: `Blocker`, `High`, `Normal`, `Low`

### Assignee

```json
{
    "fields": {
        "assignee": { "emailAddress": "user@sportradar.com" }
    }
}
```

O usar `{"name": "username"}` o `{"accountId": "accountid:..."}`

### Fechas

**Target start and Target end:**

```json
{
    "fields": {
        "customfield_16210": "2025-10-06", // Target start
        "customfield_16211": "2025-10-10" // Target end
    }
}
```

**Start date and End date:**

```json
{
    "fields": {
        "customfield_11006": "2025-10-06", // Start date (should match Target start)
        "customfield_11606": "2025-10-10" // End date (should match Target end)
    }
}
```

**IMPORTANTE**: Al actualizar rangos de fechas, actualizar los 4 campos para mantenerlos sincronizados.

### Estimate (Time Tracking)

Formato: `1w 2d 3h 30m` (semanas, días, horas, minutos)

-   1 day = 8 hours
-   1 week = 5 working days

```json
{
    "additional_fields": {
        "timetracking": {
            "originalEstimate": "1d 4h"
        }
    }
}
```

**Notas IMPORTANTES**:

-   Usar `additional_fields`, no `fields` para timetracking
-   Solo actualizar `originalEstimate` - `remainingEstimate` se calcula automáticamente según worklog
-   NO establecer manualmente `remainingEstimate`

### Custom Fields

**Customer (customfield_31203):**

```json
{
    "fields": {
        "customfield_31203": [{ "id": "29953" }] // Efbet (array de objetos)
    }
}
```

**Categorisation of time (customfield_27003):**

```json
{
    "fields": {
        "customfield_27003": { "id": "25620" } // Product features (object)
    }
}
```

**Valores disponibles de categorización:**

-   Administration: `{"id": "26905"}`
-   Bug fixing: `{"id": "26902"}`
-   Maintenance: `{"id": "26901"}`
-   Make it better: `{"id": "26904"}`
-   Other Sportradar Tribes Requirements: `{"id": "26900"}`
-   Product features: `{"id": "25620"}` (por defecto)
-   Quality of Service: `{"id": "25619"}`
-   Support: `{"id": "26903"}`

### Labels

```json
{
    "fields": {
        "labels": ["frontend", "urgent", "refactor"]
    }
}
```

### Components

```json
{
    "fields": {
        "components": [{ "name": "Frontend" }, { "name": "API" }]
    }
}
```

### Añadir subtareas

Usar MCP Jira para saber cómo crear subtareas (`Sub-task` issue type).

**Cómo estructurar subtareas:**

Al crear subtareas, cada una debe tener:

-   **Summary**: Específico y accionable (ej., "Implement user login API endpoint")
-   **Description**: Más técnico y concreto que la tarea padre, enfocado en esta porción. **Seguir las guías de descripción** arriba.
-   **Acceptance Criteria**: 2-4 criterios específicos para esta subtarea
-   **Estimate**: Estimación individual (la suma debería aproximar la estimación del padre)
-   **Parent link**: **CRÍTICO** - Usar `additional_fields: {"parent": "MSSED-XXX"}` donde el valor es una **CADENA** (STRING), no un objeto
    -   ✅ CORRECTO: `{"parent": "MSSED-2853"}`
    -   ❌ INCORRECTO: `{"parent": {"key": "MSSED-2853"}}` (este es el formato API directo, NO formato MCP)
-   **Same fields**: Todos los campos mandatorios (assignee, customer, categorisation) como el padre

## Casos especiales de actualización

### Actualizar secciones de la descripción

Si el usuario quiere actualizar solo una sección específica de la descripción (ej., "Detail solution"), debes:

1. Obtener la descripción actual
2. Parsearla para encontrar la sección
3. Actualizar solo esa sección
4. Preservar todas las demás secciones
5. Actualizar la descripción completa con el contenido modificado

### Actualizar Estado/Status

**NO** actualizar el estado directamente. Usar transiciones en su lugar:

1. Obtener transiciones disponibles con `mcp_jira_jira_get_transitions`
2. Encontrar el ID de transición apropiado
3. Usar `mcp_jira_jira_transition_issue`
4. Nunca añadir un comentario en este paso; los comentarios deben añadirse por separado si es necesario.

Para cambios de estado complejos, considera usar prompts especializados:

-   **jira-on-hold** - Para poner tareas en espera
-   **jira-complete-task** - Para completar tareas con validación

### Añadir vs Reemplazar

**Por defecto, las actualizaciones REEMPLAZAN el valor del campo.**

Para campos que soportan adición (como labels, comments):

-   Labels: Proveer array completo con valores antiguos + nuevos
-   Comments: Siempre usar `mcp_jira_jira_add_comment` (los comentarios son aditivos por naturaleza)

## Manejo de errores

Gestiona estos escenarios de forma clara:

1. **Tarea no encontrada**: Verificar formato de clave e existencia
2. **Campo no editable**: Informar al usuario qué campos no pueden actualizarse
3. **Valor inválido**: Mostrar opciones válidas para el campo
4. **Permiso denegado**: Informar al usuario que no tiene permiso
5. **Campo obligatorio faltante**: Algunas actualizaciones pueden requerir otros campos - informarlo

## Escenarios comunes de actualización

### Escenario 1: Actualizar solo la descripción

```
User: "Update description of MSSED-1234 to add acceptance criteria"
AI: [Fetches task]
AI: "What acceptance criteria should I add?"
User: [Provides criteria]
AI: [Updates description, preserves other sections]
```

### Escenario 2: Actualizar fechas

```
User: "Change target end of MSSED-1234 to next Friday"
AI: [Calculates date: 2025-10-11]
AI: [Shows summary: Target end: 2025-10-07 → 2025-10-11]
AI: "Should I also update End date to match? (recommended)"
User: "Yes"
AI: [Updates both customfield_16211 and customfield_11606]
```

### Escenario 3: Actualizar estimación

```
User: "Update estimate for MSSED-1234"
AI: [Fetches task - current: 2d]
AI: "Current estimate: 2d. What should the new estimate be?"
User: "3 days"
AI: [Updates to 3d, shows confirmation]
```

### Escenario 4: Múltiples campos

```
User: "Update MSSED-1234: priority to High and add label 'urgent'"
AI: [Fetches task]
AI: [Shows summary of both changes]
AI: [Updates both in single call]
```

### Escenario 5: Petición vaga

```
User: "Update MSSED-1234"
AI: [Fetches task to show current state]
AI: "What would you like to update? (description, priority, dates, estimate, assignee, labels, etc.)"
User: "The due date"
AI: "What should the new Target end date be?"
```

---

## Buenas prácticas

1. **Fetch first** - Siempre obtener valores actuales antes de actualizar
2. **Ask minimal questions** - Solo preguntar por la información faltante relevante
3. **Show before/after** - Permitir al usuario ver qué cambiará
4. **Preserve data** - Al actualizar secciones, preservar el resto del contenido
5. **Validate dates** - Asegurar formatos (YYYY-MM-DD)
6. **Sync related fields** - Al actualizar Target dates, ofrecer actualizar Start/End
7. **Use Wiki Markup** - Formatear descripciones correctamente
8. **Confirm changes** - Mostrar resumen antes de ejecutar
9. **Handle errors gracefully** - Dar feedback claro sobre fallos
10. **Link to task** - Siempre proporcionar la URL de Jira en la respuesta
