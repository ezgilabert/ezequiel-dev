/**
 * translations.js
 * Translation data only; add a key here for each language or experience entry.
 */

window.TRANSLATIONS = {
    es: {
        meta_description: "Portfolio de Ezequiel Garcia Gilabert, desarrollador Senior .NET Full Stack en Buenos Aires.",
        profile_open: "Abrir perfil",
        profile_close: "Cerrar perfil",
        location_map_title: "Ver Buenos Aires en Google Maps",
        tablist_label: "Secciones del portfolio",
        language_toggle_title: "Cambiar idioma",
        theme_toggle_title: "Cambiar tema",
        theme_toggle_label: "Modo",
        cosmos_toggle_label: "Contemplar el fondo cósmico",
        cosmos_theme_toggle_label: "Cambiar modo oscuro o claro",
        cosmos_exit_label: "Volver al portfolio",
        loading_text: "CARGANDO...",
        experience_language_english: "Trabajo en inglés",
        role_kopius: "Senior .NET Full Stack Developer",
        role_axonier: "Ssr Full Stack Developer",
        role_arrow: "Ssr Full Stack Developer",
        role_octubre: "Jr. Full Stack Developer",
        bio: `Hola, soy <strong class="font-semibold text-zinc-900 dark:text-white">Ezequiel</strong>!<br><br>
        Desarrollador con más de 9 años de experiencia en el ecosistema <span class="font-medium underline underline-offset-4 decoration-black/30 dark:decoration-white/30">.NET</span>, especializado principalmente en sectores como <span class="font-medium underline underline-offset-4 decoration-black/30 dark:decoration-white/30">Healthcare e Insurance</span>.<br><br>
        Más allá de mi pasión por la ciencia y las nuevas tecnologías, lo que realmente me mueve es resolver problemas, que termina siendo ayudar a las personas: entender qué está pasando, descubrir por qué ocurre e intentar encontrar la mejor solución.<br><br>
        Soy curioso por naturaleza. Me encantan un montón de temas: desde juegos, cine y series hasta economía, marketing y geopolítica. ¡Y podría seguir!<br><br>
        Disfruto trabajar en equipo, enfrentar desafíos y estar ahí para ayudar cuando alguien lo necesita.`,
        cat_contact: "¡Contactame!",
        contact_title: "Hablemos",
        contact_subtitle: "Elegí el canal que más te convenga",
        contact_linkedin_desc: "Conectemos profesionalmente",
        contact_whatsapp_desc: "Respuesta rápida",
        nav_exp: "Experiencia",
        nav_skills: "Habilidades",
        nav_edu: "Educación",
        nav_contact: "Contacto",
        title_exp: "Experiencia Laboral",
        title_skills: "Habilidades Técnicas",
        cat_backend: "Backend & Arquitectura",
        cat_frontend: "Frontend & Frameworks",
        cat_db: "Bases de Datos & Reportes",
        cat_devops: "Cloud, DevOps & Herramientas",
        cat_ai: "IA & Desarrollo Moderno",
        title_edu: "Educación y Calificaciones",
        degree_title: "Título de Técnico Informático",
        degree_avg: "Promedio Académico: 8.0 / 10.0",
        degree_intro: "Formación técnica de 6 años en informática, con una sólida base en programación orientada a objetos, bases de datos, redes, software y hardware.",
        course_badge: "Curso",
        course_angular_title: "Angular: De cero a experto (Edición 2024)",
        course_angular_desc: "Formación intensiva en Angular moderno: componentes, directivas, servicios, routing, formularios reactivos, HTTP, signals, standalone components, testing y despliegue en producción.",
        course_node_title: "Node: De cero a experto (2022)",
        course_node_desc: "Formación completa en Node.js: creación de servidores, APIs REST, autenticación con JWT, bases de datos MongoDB, sockets en tiempo real y despliegue en producción.",
        title_contact: "¿Qué tenés en mente?",
        sub_contact: "Mandame un mensaje, contame tu idea y vemos qué podemos hacer!",
        ph_name: "Tu nombre",
        ph_email: "tu@email.com",
        ph_message: "Contame tu idea, tu proyecto o lo que necesites...",
        toast_copy: "Email copiado al portapapeles: ",
        toast_send: "Mensaje enviado exitosamente.",
        toast_send_error: "No se pudo enviar el mensaje. Intentá nuevamente.",
        toast_send_config: "El formulario todavía no está configurado. Contactame por email.",
        lists: {
            experience: {
                kopius: [
                    "Desarrollé y mantuve una aplicación Blazor WebAssembly responsive para gestión de referidos de healthcare, integrada en una arquitectura de micro-frontends con Piral, trabajando en su preparación para el pre-release.",
                    "Trabajo en bases de datos, realizando cambios de esquema y tareas relacionadas con replicación, además de crear, modificar y optimizar procedimientos almacenados; también desarrollé y ajusté reportes en Microsoft Report Builder.",
                    "Contribuí al desarrollo y mantenimiento de microservicios RESTful consumidos vía Refit, e implementé capacidades de extracción de datos asistida por IA para documentos clínicos.",
                    "Optimicé capas de datos multi-tenant con Dapper, procedimientos almacenados complejos en SQL Server y scripts SSDT (dacpac) para despliegues CI/CD idempotentes.",
                    "Mantuve la aplicación legacy WinForms (arquitectura MVP) de sistemas de healthcare, desarrollando reportes SSRS y procedimientos almacenados para módulos clínicos y de facturación.",
                    "Orquesté el despliegue de microservicios en Microsoft Azure, gestionando configuraciones, recursos y pipelines de release.",
                    "Colaboré con múltiples equipos de ingeniería para gestionar dependencias técnicas, alinear cronogramas de release y coordinar integraciones en sprints Scrum.",
                    "Resolví incidentes críticos de producción, bugs y problemas de performance en microservicios y sistemas legacy, asegurando alta disponibilidad.",
                    "Aproveché GitHub Copilot y migrá a una solución interna MCP propia para optimizar la velocidad de desarrollo y automatizar flujos de trabajo diarios."
                ],
                axonier: [
                    "Desarrollé y mantuve dos portales de ventas Razor para Assist-Card: un motor de ventas interno (B2E) y un portal multi-tenant B2B para agencias, localizado para mercados regionales.",
                    "Brindé mantenimiento continuo, optimizaciones de performance y corrección de bugs críticos en plataformas de ventas de seguros y servicios web/APIs, asegurando alta disponibilidad.",
                    "Implementé lógica de base de datos combinando procedimientos almacenados de SQL Server y consultas inline de alto rendimiento, optimizando la velocidad de recuperación de datos.",
                    "Utilicé Azure DevOps para gestión de repositorios y ciclo de vida, ejecutando despliegues manuales a ambientes inferiores.",
                    "Gestioné control de código fuente y pipelines de release con Azure, Git y TFS, participando activamente en ceremonias Scrum y entregas de sprint."
                ],
                arrow: [
                    "Me desempeñé como Development Lead en una startup: definí el stack tecnológico, trabajé con clientes, mentoreé al equipo y desarrollé funcionalidades clave.",
                    "Contribuí al desarrollo de aplicaciones enterprise usando .NET Core 3.1 en el backend y Angular 8 para SPAs.",
                    "Integré Entity Framework con PostgreSQL, diseñando esquemas y optimizando consultas ORM.",
                    "Desarrollé y mantuve una plataforma e-commerce en Laravel, incluyendo panel de administración para productos y contenido.",
                    "Mentoreé a desarrolladores junior y mid-level, realicé code reviews y fomenté buenas prácticas en el equipo."
                ],
                octubre: [
                    "Desarrollé nuevas pantallas de UI y módulos core en plataformas de clientes (healthcare, educación superior, etc.) usando arquitectura monolítica .NET/NHibernate y frontends en Vanilla JS (Bindows).",
                    "Colaboré directamente con Product Managers y clientes a través de plataformas de tickets para definir requerimientos y traducir feedback en tareas accionables.",
                    "Modelé y mantuve estructuras de base de datos relacionales en PostgreSQL y SQL Server, escribiendo consultas, scripts y asegurando la integración con los servicios backend.",
                    "Investigué y resolví bugs en frontend y backend, diagnosticando causas raíz mediante herramientas de debugging y logs para mantener la estabilidad del sistema.",
                    "Creé y modifiqué reportes (Crystal Reports) según las necesidades del equipo y de los usuarios."
                ]
            },
            education: {
                degree: [
                    "Proyecto Final (POO + LINQ + Base de Datos): Desarrollo de un sistema de gestión completo aplicando Programación Orientada a Objetos, con acceso a datos mediante LINQ y persistencia en base de datos.",
                    "Proyecto Final de Videojuego: Desarrollo de un videojuego interactivo con Unity y C#.",
                    "Prácticas Profesionalizantes: 210 horas completadas."
                ],
                angularCourse: [
                    "Dominio de Angular CLI, componentes standalone, directivas y pipes personalizados.",
                    "Gestión de estado con servicios, RxJS, signals y patrones reactivos modernos.",
                    "Formularios reactivos, validaciones, routing con guards y lazy loading.",
                    "Integración con APIs REST, manejo de errores, interceptores y autenticación.",
                    "Buenas prácticas de arquitectura, testing con Jasmine/Karma y despliegue en producción."
                ],
                nodeCourse: [
                    "Creación de servidores backend y servicios REST con Express.",
                    "Gestión de archivos, subida de archivos y variables de entorno.",
                    "Conexión a MongoDB, modelos, validaciones y relaciones.",
                    "Autenticación con JWT, roles, middlewares y protección de rutas.",
                    "WebSockets con Socket.IO para aplicaciones en tiempo real.",
                    "Despliegue en Heroku, GitHub y entornos de producción.",
                    "Buenas prácticas, Git/GitHub y arquitectura escalable."
                ]
            }
        }
    },
    en: {
        meta_description: "Portfolio of Ezequiel Garcia Gilabert, a Senior .NET Full Stack Developer based in Buenos Aires.",
        profile_open: "Open profile",
        profile_close: "Close profile",
        location_map_title: "View Buenos Aires on Google Maps",
        tablist_label: "Portfolio sections",
        language_toggle_title: "Change language",
        theme_toggle_title: "Change theme",
        theme_toggle_label: "Theme",
        cosmos_toggle_label: "View the cosmic background",
        cosmos_theme_toggle_label: "Toggle dark or light mode",
        cosmos_exit_label: "Return to portfolio",
        loading_text: "LOADING...",
        experience_language_english: "English-speaking role",
        role_kopius: "Senior .NET Full Stack Developer",
        role_axonier: "Mid-level Full Stack Developer",
        role_arrow: "Mid-level Full Stack Developer",
        role_octubre: "Junior Full Stack Developer",
        bio: `Hi, I'm <strong class="font-semibold text-zinc-900 dark:text-white">Ezequiel</strong>!<br><br>
        I'm a developer with over 9 years of experience in the <span class="font-medium underline underline-offset-4 decoration-black/30 dark:decoration-white/30">.NET</span> ecosystem, specializing mainly in <span class="font-medium underline underline-offset-4 decoration-black/30 dark:decoration-white/30">healthcare and insurance</span>.<br><br>
        I'm passionate about science and new technologies, but what drives me most is solving problems and helping people. I enjoy understanding what is happening, figuring out why, and finding the best solution.<br><br>
        I am naturally curious. I love a wide range of things, from games, movies, and TV shows to economics, marketing, and geopolitics. I could go on!<br><br>
        I enjoy working as part of a team, taking on challenges, and being there to help when someone needs it.`,
        cat_contact: "Contact Me!",
        contact_title: "Let's talk",
        contact_subtitle: "Choose the channel that works best for you",
        contact_linkedin_desc: "Let's connect professionally",
        contact_whatsapp_desc: "Quick response",
        nav_exp: "Experience",
        nav_skills: "Skills",
        nav_edu: "Education",
        nav_contact: "Contact",
        title_exp: "Work Experience",
        title_skills: "Technical Skills",
        cat_backend: "Backend & Architecture",
        cat_frontend: "Frontend & UI Frameworks",
        cat_db: "Databases & Reporting",
        cat_devops: "Cloud, DevOps & Tools",
        cat_ai: "AI & Modern Development",
        title_edu: "Education & Qualifications",
        degree_title: "IT Technician Degree",
        degree_avg: "Academic GPA: 8.0 / 10.0",
        degree_intro: "Six-year technical education in IT, with a solid foundation in object-oriented programming, databases, networking, software, and hardware.",
        course_badge: "Course",
        course_angular_title: "Angular: From Zero to Expert (2024 Edition)",
        course_angular_desc: "Intensive training in modern Angular: components, directives, services, routing, reactive forms, HTTP, signals, standalone components, testing, and production deployment.",
        course_node_title: "Node: From Zero to Expert (2022)",
        course_node_desc: "Comprehensive Node.js training covering server creation, REST APIs, JWT authentication, MongoDB databases, real-time sockets, and production deployment.",
        title_contact: "What's on your mind?",
        sub_contact: "Send me a message, tell me your idea, and let's see what we can build together!",
        ph_name: "Your name",
        ph_email: "you@email.com",
        ph_message: "Tell me your idea, your project, or whatever you need...",
        toast_copy: "Email copied to clipboard: ",
        toast_send: "Message sent successfully.",
        toast_send_error: "The message could not be sent. Please try again.",
        toast_send_config: "The form is not configured yet. Please contact me by email.",
        lists: {
            experience: {
                kopius: [
                    "Built and maintained a responsive Blazor WebAssembly application for healthcare referral intake management, seamlessly integrated into a Piral micro-frontend architecture while preparing it for pre-release.",
                    "Worked with databases, handling schema changes and replication-related work, as well as creating, modifying, and optimizing stored procedures; also created and updated reports using Microsoft Report Builder.",
                    "Contributed to the development and maintenance of RESTful microservices consumed via Refit HTTP clients, and implemented AI-assisted data extraction capabilities for clinical documents.",
                    "Optimized multi-tenant data layers using Dapper, complex SQL Server stored procedures, and SSDT (dacpac) for idempotent CI/CD deployment scripts.",
                    "Maintained legacy enterprise WinForms application (MVP architecture) for healthcare systems, developing SSRS reports and SQL Server stored procedures for clinical and billing modules.",
                    "Orchestrated microservice deployments to Microsoft Azure, managing app settings, resource configurations, and release pipelines.",
                    "Collaborated with multiple cross-functional engineering teams to manage technical dependencies, align release schedules, and coordinate integration across microservices in Agile Scrum sprints.",
                    "Resolved critical production incidents, bug fixes, and performance issues across microservices and legacy systems, ensuring high system availability.",
                    "Leveraged GitHub Copilot and transitioned to a custom internal MCP solution to optimize developer velocity and automate daily workflows."
                ],
                axonier: [
                    "Continued the development of two Razor web portals for Assist-Card: an internal/B2E sales engine and a multi-tenant B2B agency portal localized for regional markets.",
                    "Provided continuous maintenance, performance optimizations, and critical bug fixes across insurance sales platforms and backend web services/APIs, ensuring high availability.",
                    "Implemented database logic using a mix of SQL Server stored procedures and high-performance inline queries, optimizing data retrieval speed.",
                    "Utilized Azure DevOps features for repository and lifecycle management, executing manual application deployments to lower environments.",
                    "Managed source control and release pipelines through Azure, Git & TFS, actively contributing to daily Scrum ceremonies and sprint deliveries."
                ],
                arrow: [
                    "Served as Development Lead at a startup: defined the technology stack, worked with clients, mentored the team, and developed key features.",
                    "Contributed to the development of enterprise applications using .NET Core 3.1 for backend logic and Angular 8 for single-page applications (SPAs).",
                    "Integrated Entity Framework with PostgreSQL databases, designing schemas and optimizing ORM queries.",
                    "Developed and maintained a Laravel e-commerce platform, including a back-office admin panel for product and content management.",
                    "Mentored junior and mid-level developers, conducted code reviews, and fostered best practices within the team."
                ],
                octubre: [
                    "Built new UI screens and core modules across diverse client platforms (healthcare, higher education, etc.) using a .NET / NHibernate monolithic backend and multiple Vanilla JS (Bindows) frontends.",
                    "Partnered directly with Product Managers and clients via ticketing platforms to scope requirements and translate feedback into actionable tasks.",
                    "Modeled and maintained PostgreSQL and SQL Server relational database structures, writing SQL queries, scripts, and ensuring seamless integration with backend services.",
                    "Investigated and resolved software bugs across frontend and backend codebases, diagnosing root causes through debugging tools and logs to maintain system stability.",
                    "Created and modified reports (Crystal Reports) based on team and user needs."
                ]
            },
            education: {
                degree: [
                    "Final Project (OOP + LINQ + Database): Developed a complete management system using object-oriented programming, LINQ for data access, and database persistence.",
                    "Final Video Game Project: Developed an interactive video game with Unity and C#.",
                    "Professional Internship: Completed 210 hours."
                ],
                angularCourse: [
                    "Mastery of Angular CLI, standalone components, custom directives, and pipes.",
                    "State management with services, RxJS, signals, and modern reactive patterns.",
                    "Reactive forms, validations, routing with guards, and lazy loading.",
                    "REST API integration, error handling, interceptors, and authentication.",
                    "Architecture best practices, testing with Jasmine/Karma, and production deployment."
                ],
                nodeCourse: [
                    "Building backend servers and REST services with Express.",
                    "File management and uploads, and environment variables.",
                    "Connecting to MongoDB, with models, validations, and relationships.",
                    "JWT authentication, roles, middleware, and route protection.",
                    "WebSockets with Socket.IO for real-time applications.",
                    "Deployment to Heroku, GitHub, and production environments.",
                    "Best practices, Git/GitHub, and scalable architecture."
                ]
            }
        }
    }
};
