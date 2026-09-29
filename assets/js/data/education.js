/**
 * education.js
 * - title: si usa i18nKey, se traduce; si no, usa title literal.
 * - link: opcional, URL externa (ej: curso Udemy).
 * Used by: render-education.js.
 */

window.EDUCATION_DATA = [
    {
        titleKey: 'course_angular_title',
        titleFallback: 'Angular: De cero a experto (Edición 2024)',
        titleIcon: 'ph-laptop',
        subtitle: 'Fernando Herrera · Udemy',
        subtitleIcon: 'ph-arrow-square-out',
        subtitleLink: 'https://www.udemy.com/course/angular-fernando-herrera/',
        badge: 'Curso',
        descKey: 'course_angular_desc',
        descFallback: 'Formación intensiva en Angular moderno: componentes, directivas, servicios, routing, formularios reactivos, HTTP, signals, standalone components, testing y despliegue en producción.',
        bulletsKey: 'lists.education.angularCourse'
    },
    {
        titleKey: 'degree_title',
        titleFallback: 'Título de Técnico Informático',
        titleIcon: 'ph-graduation-cap',
        subtitle: 'Instituto Técnico Industrial San Judas Tadeo',
        subtitleIcon: 'ph-map-pin',
        subtitleLink: null,
        badge: '12/2010 - 12/2016',
        descKey: 'degree_avg',
        descFallback: 'Promedio Académico: 8.0 / 10.0',
        bulletsKey: 'lists.education.degree'
    }
];