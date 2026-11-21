# Mente Serena - Consultorio de Psicología

Sitio web de un consultorio de psicología ficticio. Proyecto original en HTML5 y CSS3, modernizado con **Bulma** para la asignatura Programación Web.

## Herramienta de estilización: Bulma

Elegí Bulma entre Bulma, daisyUI y PrimeNG por estas razones:

- Es CSS puro: funciona sobre HTML y CSS sin framework de JavaScript.
- Se integra con un solo `<link>` por CDN, sin instalación ni proceso de compilación.
- PrimeNG solo funciona con Angular y daisyUI requiere Tailwind, por lo que no encajaban con un proyecto HTML/CSS.

## Integración

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
<link rel="stylesheet" href="css/styles.css">
```

Mi CSS se carga después de Bulma para poder personalizarlo. Se usa `data-theme="light"` en `<html>` para evitar que Bulma cambie a modo oscuro automáticamente.

## Componentes de Bulma utilizados

| Categoría | Componentes |
|---|---|
| Estructura | hero, navbar (fijo, con dropdown y menú hamburguesa), columns, section, container, footer |
| Contenido | card, box, level, media, message, notification, tag, table, tabs |
| Formularios | field, control, input, select, textarea, button |
| Interacción | modal |
| Utilidades | helpers de espaciado, color y alineación (`mt-4`, `has-text-centered`, `is-hidden`, etc.) |

## Personalización

- **Colores:** paleta propia (verde salvia, beige, azul suave y gris oscuro) definida con variables CSS, integrada con las variables de Bulma.
- **Tipografía:** Playfair Display para títulos y Nunito para el texto (Google Fonts).
- **Distribución:** layout en columnas, servicios en tarjetas, precios en 3 tarjetas, secciones con fondos alternos.
- **Detalles visuales:** hero con imagen de fondo y degradado, íconos de Font Awesome, efecto hover en tarjetas, animaciones de entrada al hacer scroll.

## Funcionalidades

- Menú de navegación fijo, con submenú de servicios y botón hamburguesa en móvil.
- Modal "Agenda tu cita".
- Pestañas en la sección de servicios.
- Preguntas frecuentes con `<details>` (sin JavaScript).
- Botón "volver arriba" y scroll suave.
- Diseño responsive.
- Respeta `prefers-reduced-motion` para quienes prefieren menos movimiento.

Los formularios son solo visuales: todavía no envían datos.

## Estructura del proyecto

```
consultorio-psicologia/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── hero.jpeg
├── capturas/
└── README.md
```

## Tecnologías

HTML5 · CSS3 · Bulma 1.0.2 · JavaScript (modal, pestañas, menú y animaciones) · Font Awesome · Google Fonts · Git y GitHub

## Créditos

- Íconos: Font Awesome
- Tipografías: Google Fonts

## Autor

Yefri - [github.com/Yefridev](https://github.com/Yefridev)