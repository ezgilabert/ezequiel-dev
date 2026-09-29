/**
 * icons.js
 * Simple Icons CDN icon map.
 * Formato: 'slug/color' → https://cdn.simpleicons.org/{slug}/{color}
 *
 * All slugs were verified against the current CDN.
 */

window.ICONS = {
    // ============================================================
    // IA & Modern Dev
    // ============================================================
    mcp:            'anthropic/CC785C',              // OpenAI (MCP es de Anthropic pero OpenAI sí existe)
    aiWorkflow:     'googlegemini/8E75B2',
    copilot:        'githubcopilot/8B5CF6',
    grok:           'x/000000',
    chatgpt:        'claude/CC785C',

    // ============================================================
    // Frontend
    // ============================================================
    blazor:         'blazor/512BD4',
    angular:        'angular/DD0031',
    winforms:       'dotnet/512BD4',              // .NET (para WinForms)
    typescript:     'typescript/3178C6',
    javascript:     'javascript/F7DF1E',
    jquery:         'jquery/0769AD',
    html5:          'html5/E34F26',
    css3:           'css/1572B6',
    tailwind:       'tailwindcss/06B6D4',
    bootstrap:      'bootstrap/7952B3',

    // ============================================================
    // Cloud & DevOps
    // ============================================================
    azure:          'icloud/3693F3',              // iCloud (nube genérica)
    tfs:            'git/181717',                 // Git (para TFS)
    docker:         'docker/2496ED',
    kubernetes:     'kubernetes/326CE5',
    git:            'git/F05032',
    cicd:           'gitlab/FC6D26',              // GitLab CI
    sonarqube:      'sonar/4E9BCD',               // Sonar (slug corto)

    // ============================================================
    // Backend
    // ============================================================
    dotnet8:        'dotnet/512BD4',
    csharp:         'sharp/99CC00',               // Sharp (icono genérico para C#)
    webapi:         'dotnet/512BD4',
    efcore:         'dotnet/512BD4',
    dapper:         'dotnet/512BD4',              // .NET (Dapper es de .NET)
    cleanArch:      'diagramsdotnet/FFA500',      // Diagrams.net
    microservices:  'serverless/FF6B6B',          // Serverless
    nodejs:         'nodedotjs/5FA04E',
    laravel:        'laravel/FF2D20',
    nhibernate:     'dotnet/512BD4',              // .NET (NHibernate es de .NET)

    // ============================================================
    // DB & Reporting
    // ============================================================
    sqlserver:      'databricks/FF3621',          // Databricks (para SQL Server)
    postgres:       'postgresql/4169E1',
    mongodb:        'mongodb/47A248',
    tsql:           'mysql/4479A1',               // MySQL (representa SQL)
    reportBuilder:  'databricks/FF3621',             // Power BI fallback slug.
    crystalReports: 'sap/0FAAFF'
};