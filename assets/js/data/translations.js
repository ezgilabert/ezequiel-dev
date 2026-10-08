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
        role_kopius: "Senior Full Stack Engineer (.NET / Blazor / Angular)",
        role_axonier: "Full Stack .NET Developer",
        role_arrow: "Full Stack Tech Lead",
        role_octubre: "Full Stack Developer",
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
                    "Desarrollé y mantuve una aplicación Blazor WebAssembly responsive para gestión de admisiones/referidos de atención médica domiciliaria (Home Care US), impulsando la migración desde una arquitectura monolítica legacy hacia su puesta en producción.",
                    "Integré módulos micro-frontend (pilets) en Angular utilizando Piral dentro de la aplicación monolítica como estrategia para modernizar componentes UI legacy.",
                    "Contribuí al desarrollo y mantenimiento de microservicios RESTful consumidos mediante clientes HTTP Refit, e implementé capacidades de extracción de datos asistida por IA para documentos clínicos.",
                    "Optimicé capas de datos multi-tenant mediante Dapper, procedimientos almacenados complejos en SQL Server y scripts de despliegue SSDT (dacpac).",
                    "Mantuve una aplicación empresarial WinForms legacy (arquitectura MVP), desarrollando reportes SSRS y procedimientos almacenados en SQL Server para módulos clínicos y de facturación.",
                    "Gestioné configuraciones en Azure, variables de entorno, despliegue de microservicios y pipelines de release.",
                    "Investigué y optimicé problemas de rendimiento en microservicios y sistemas legacy, resolviendo incidentes de producción y mejorando la estabilidad del sistema.",
                    "Utilicé GitHub Copilot y posteriormente una solución interna de MCP (Model Context Protocol) con sub-agentes para elevar la productividad de desarrollo y automatizar flujos de trabajo.",
                    "Colaboré con equipos de ingeniería multidisciplinarios (+250 personas en IT) gestionando dependencias técnicas, revisiones de código e integraciones en sprints bajo metodología Scrum."
                ],
                axonier: [
                    "Continué el desarrollo de dos portales web Razor para Assist Card: una plataforma interna de ventas (B2E) y un portal multi-tenant B2B para agencias, localizado para diversos mercados regionales.",
                    "Desarrollé y mantuve microservicios REST y servicios de API Gateway (incluyendo componentes de traducción y acceso a datos) en .NET utilizando Refit, resolviendo bugs y cuellos de botella de rendimiento.",
                    "Colaboré en sistemas core de negocio desarrollados en Java y .NET para garantizar un procesamiento de transacciones estable y la correcta ejecución de la lógica de negocio.",
                    "Implementé lógica de base de datos combinando procedimientos almacenados en SQL Server y consultas inline optimizadas para la recuperación rápida de datos y flujos transaccionales.",
                    "Gestioné el control de código fuente y procesos de release a través de Azure DevOps, Git y TFS, ejecutando despliegues manuales a entornos inferiores.",
                    "Brindé soporte a compañeros de equipo en bloqueos técnicos, integración de código y flujos diarios de trabajo dentro de sprints Scrum."
                ],
                arrow: [
                    "Me desempeñé como Full Stack Tech Lead en un entorno startup: lideré la toma de decisiones técnicas, la selección del stack, la comunicación directa con clientes y el mentoreo del equipo.",
                    "Me comuniqué directamente con los clientes para definir requerimientos técnicos, alcance de entregables y dar seguimiento al progreso de los proyectos.",
                    "Desarrollé aplicaciones web enterprise utilizando .NET Core 3.1 en el backend y Angular 8 para Single Page Applications (SPAs).",
                    "Integré Entity Framework Core con bases de datos PostgreSQL, diseñando esquemas y optimizando consultas ORM.",
                    "Desarrollé y mantuve una plataforma de e-commerce a medida en Laravel, incluyendo un panel de administración back-office completo para gestión de productos y contenidos.",
                    "Mentoreé a desarrolladores junior y mid-level, realicé revisiones de código exhaustivas y promoví estándares de código limpio dentro del equipo."
                ],
                octubre: [
                    "Desarrollé módulos backend monolíticos y lógica de negocio para sistemas de salud, seguros y educación superior utilizando .NET Framework, NHibernate y LINQ.",
                    "Desarrollé y mantuve módulos CRUD, corrección de bugs y nuevas funcionalidades para un frontend en Vanilla JavaScript construido con Bindows.",
                    "Construí un nuevo portal web para afiliados integrando un frontend en Angular 2 con los servicios backend monolíticos existentes.",
                    "Diseñé, optimicé y mantuve estructuras de bases de datos relacionales en PostgreSQL y SQL Server, escribiendo consultas complejas, procedimientos almacenados y triggers.",
                    "Diseñé y generé reportes operativos y de negocio utilizando Crystal Reports.",
                    "Colaboré directamente con analistas funcionales y clientes finales a través de plataformas de tickets para relevamiento de requerimientos, análisis de logs, diagnóstico y resolución de incidentes."
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
        role_kopius: "Senior Full Stack Engineer (.NET / Blazor / Angular)",
        role_axonier: "Full Stack .NET Developer",
        role_arrow: "Full Stack Tech Lead",
        role_octubre: "Full Stack Developer",
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
                    "Built and maintained a responsive Blazor WebAssembly application for healthcare referral intake management (US Home Care), driving a gradual migration from a legacy monolithic architecture towards system go-live.",
                    "Integrated Angular micro-frontend modules (pilets) using Piral into the monolithic application as a strategy to modernize legacy UI components.",
                    "Contributed to RESTful microservices consumed via Refit HTTP clients and implemented AI-assisted data extraction capabilities for clinical documents.",
                    "Optimized multi-tenant data layers using Dapper, complex SQL Server stored procedures, and SSDT (dacpac) deployment scripts.",
                    "Maintained a legacy enterprise WinForms application (MVP architecture) for healthcare systems, developing SSRS reports and SQL Server stored procedures for clinical and billing modules.",
                    "Managed Azure configurations, application settings, microservice deployments, and release pipelines.",
                    "Investigated and optimized performance issues across microservices and legacy systems, resolving production incidents and improving application stability.",
                    "Used GitHub Copilot and later an internal MCP (Model Context Protocol) solution with sub-agents to boost developer productivity and automate daily workflows.",
                    "Collaborated with cross-functional engineering teams (+250 IT staff) to manage technical dependencies, conduct code reviews, and deliver integrations within Agile Scrum sprints."
                ],
                axonier: [
                    "Continued the development of two Razor web portals for Assist Card: an internal/B2E sales engine and a multi-tenant B2B agency portal localized for different regional markets.",
                    "Developed and maintained REST microservices and API gateway services (including translation and data access components) in .NET using Refit, while resolving bugs and performance bottlenecks.",
                    "Contributed to core business systems built in Java and .NET to ensure stable transaction processing and business logic execution.",
                    "Implemented database logic using SQL Server stored procedures and optimized inline queries for high-performance data retrieval and transaction flows.",
                    "Managed source control and release processes through Azure DevOps, Git, and TFS, executing application deployments to lower environments.",
                    "Assisted and supported teammates on technical blockers, code integration, and daily workflows within Agile Scrum sprints."
                ],
                arrow: [
                    "Served as Full Stack Tech Lead at a startup: led technical decision-making, tech stack selection, direct client communication, and team mentorship.",
                    "Communicated directly with clients to define technical requirements, scope deliverables, and provide project updates.",
                    "Built enterprise web applications using .NET Core 3.1 for backend services and Angular 8 for single-page applications (SPAs).",
                    "Integrated Entity Framework Core with PostgreSQL databases, designing schemas and optimizing ORM queries.",
                    "Developed and maintained a custom Laravel e-commerce platform, including a full-featured back-office administration panel for product and content management.",
                    "Mentored junior and mid-level developers, conducted thorough code reviews, and promoted clean coding standards across the team."
                ],
                octubre: [
                    "Developed monolithic backend modules and business logic for healthcare, insurance, and higher education systems using .NET Framework, NHibernate, and LINQ.",
                    "Developed and maintained CRUD modules, bug fixes, and new features for a vanilla JavaScript frontend built with Bindows.",
                    "Built a new member-facing web portal by integrating an Angular 2 frontend with existing monolithic backend services.",
                    "Designed, optimized, and maintained relational database structures in PostgreSQL and SQL Server, writing complex queries, stored procedures, and triggers.",
                    "Designed and generated operational and business reports using Crystal Reports.",
                    "Collaborated directly with functional analysts and end clients via ticketing platforms to gather requirements, analyze logs, troubleshoot issues, and resolve software incidents."
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