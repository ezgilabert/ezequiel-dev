/**
 * experience.js
 * i18nKey apunta a TRANSLATIONS[lang][i18nKey] que contiene el array de bullets.
 * Used by: render-experience.js.
 */

window.EXPERIENCE_DATA = [
    {
        role: 'Senior .NET Full Stack Developer',
        company: 'Kopius Tech (Home Care & Home Base)',
        companyParts: [
            { text: 'Kopius Tech', href: 'https://kopiustech.com/' },
            { text: ' (' },
            { text: 'Home Care & Home Base', href: 'https://hchb.com/' },
            { text: ')' }
        ],
        dates: '06/2022 - 07/2026',
        tech: '.NET Core 8, WinForms, Angular (Pilets), Blazor, Microservices, SQL Server, Stored Procedures, Scrum, GitHub Copilot, MCP',
        languageKey: 'experience_language_english',
        i18nKey: 'lists.experience.kopius',
        expanded: true
    },
    {
        role: 'Ssr Full Stack Developer',
        company: 'Axonier Consulting (Assist-Card)',
        companyParts: [
            { text: 'Axonier Consulting', href: 'https://axonier.com/' },
            { text: ' (' },
            { text: 'Assist-Card', href: 'https://www.assistcard.com/ar' },
            { text: ')' }
        ],
        dates: '03/2021 - 06/2022',
        tech: '.NET Core 5.0, Razor, JavaScript, jQuery, Bootstrap, SQL Server, Azure, GIT, TFS',
        i18nKey: 'lists.experience.axonier'
    },
    {
        role: 'Ssr Full Stack Developer',
        company: 'Software Arrow',
        companyParts: [
            { text: 'Software Arrow', href: 'https://www.linkedin.com/company/68165214' },
        ],
        dates: '12/2019 - 12/2020',
        tech: '.NET Core 3.1, Angular 8, TypeScript, Entity Framework, Laravel, PostgreSQL, Bootstrap, Git',
        i18nKey: 'lists.experience.arrow'
    },
    {
        role: 'Jr. Full Stack Developer',
        company: 'Grupo Octubre',
        companyParts: [
            { text: 'Grupo Octubre', href: 'https://octubre.com/' }
        ],
        dates: '02/2017 - 12/2019',
        tech: '.NET Framework, JavaScript (Vanilla), SQL Server, Crystal Reports',
        i18nKey: 'lists.experience.octubre'
    }
];