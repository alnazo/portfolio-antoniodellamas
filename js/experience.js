const experiences = {
    "fctdam": {
        "site": "Accenture",
        "job": "Técnico de software",
        "description": "Desarrollo de proyectos y agilización del trabajo.",
        "functions": [
            "Desarrollo de aplicaciones backend para empresas terceras (Java y SQL)",
            "Trabajo en metodología Scrum para desarrollo",
            "Realización de apartados basados en SpringBoot para su implementación (Java, SQL).",
            "Gestión de cambios a petición para liberar carga de trabajo."
        ],
        "date": "Noviembre 2023 - Junio 2024"
    },
    "innovaTElefonica": {
        "site": "InnovaTE (Telefónica)",
        "job": "Guía tecnológico",
        "description": "Exposición de tecnologías que ofrece Telefónica para usuarios a pie, y empresas.",
        "functions": [
            "Asistencia a usuarios.",
            "Explicaciones sobre tecnología de última generación.",
            "Ámbitos cotidianos a los que asociar las nuevas tecnologías provenientes"
        ],
        "date": "Diciembre 2023"
    },
    "dual1dam": {
        "site": "Accenture",
        "job": "Técnico de software",
        "description": "Aprendizaje de desarrollo de aplicaciones, desde el punto de vista desde una empresa.",
        "functions": [
            "Asistencia a clases personalizadas con temario que se acerca a el trabajo que se realiza en la empresa.",
            "Mejora de conocimiento sobre Java y SQL.",
            "Creación de microservicios.",
            "Creación de micro-servicios y proyectos, uso de Servlets y desarrollo de aplicaciones web JSP"
        ],
        "date": "Marzo 2023 - Junio 2023"
    },
    "giraldillo": {
        "site":"El Giraldillo Comunicación Cultural, S.L",
        "job": "Desarrollador FullStack y técnico de mantenimiento",
        "description": "Asistencia técnica en equipos informáticos, red local, y programación y mantenimiento web con PHP 8, Framework PHP Laravel 8, MySQL, Servicio API REDSYS como desarrollador FullStack encargado de BackEnd y FrontEnd.",
        "functions": [
            {"Programador web" : "Mediante programación en HTML/CSS, PHP 8, Framework (Laravel 8), JavaScript/JQuery, SQL (MySQL) trabajado mediante Visual Studio Code y Ubuntu 20.04 sobre máquina virtual Oracle VM VirtualBox."},
            {"Mantenimiento informático" : "Revisión y comprobación de máquinas físicas para el correcto funcionamiento de los dispositivos con los que se trabajan."}
        ],
        "date": "Noviembre 2020 - Agosto 2022"
    },
    "fctteleco": {
        "site": "Safe Computing S.L",
        "job": "Técnico soporte L1",
        "description": "Asistencia técnica a empresas clientes de la empresa con problemas técnicos de soporte L1.",
        "functions": [
            {"Técnico de soporte L1" : "Resolución de problemas informáticos mediante sistema de tickets."},
            "Comunicación con los clientes y asistencia presencial si el problema no dispone de solución online.",
            "Utilización de programas de asistencia remota (TeamViewer, AnyDesk, …)"
        ],
        "date": "Marzo 2022 - Junio 2022"
    },
    "fctinformatica": {
        "site": "Onsicom S.L",
        "job": "Técnico soporte",
        "description": "Asistencia técnica a empresas del polígono industrial y restablecimiento a fábrica de equipos devueltos a la compañía.",
        "functions": [
            {"Desarrollo web" : "Desarrollo de aplicaciones Wordpress para estudios de cambio de diseño (PHP, HTML, CSS, JavaScript)."},
            {"Mantenimiento informático" : "Comprobación de equipos devueltos por clientes por motivo de baja para resetearlos a fabrica y comprobación de funcionamiento para nueva marcha."}
        ],
        "date": "Marzo 2018 - Junio 2018"
    }
};

const jobsAccordion = document.getElementById('jobs');

    Object.keys(experiences).forEach((key, index) => {
        const experience = experiences[key];

        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');

        const accordionHeader = document.createElement('h2');
        accordionHeader.classList.add('accordion-header');
        accordionHeader.id = key;

        const accordionButton = document.createElement('button');
        accordionButton.classList.add('accordion-button', 'collapsed');
        accordionButton.type = 'button';

        if (index === 0) {
            accordionButton.classList.remove('collapsed');
            accordionButton.setAttribute('aria-expanded', 'true');
        } else {
            accordionButton.setAttribute('aria-expanded', 'false');
        }

        accordionButton.setAttribute('data-bs-toggle', 'collapse');
        accordionButton.setAttribute('data-bs-target', `#${key}`);
        accordionButton.setAttribute('aria-controls', key);
        accordionButton.innerHTML = `<span class="separator">${experience.site} | ${experience.job}</span>`;

        accordionHeader.appendChild(accordionButton);
        accordionItem.appendChild(accordionHeader);

        const accordionCollapse = document.createElement('div');
        accordionCollapse.classList.add('accordion-collapse', 'collapse');
        accordionCollapse.id = key;
        accordionCollapse.setAttribute('aria-labelledby', key);
        accordionCollapse.setAttribute('data-bs-parent', '#jobs');

        if (index === 0) {
            accordionCollapse.classList.add('show');
        }

        const accordionBody1 = document.createElement('div');
        accordionBody1.classList.add('accordion-body');
        accordionBody1.textContent = experience.description;

        const accordionBody2 = document.createElement('div');
        accordionBody2.classList.add('accordion-body');
        accordionBody2.textContent = `Fechas en el puesto: ${experience.date}`;

        const accordionBody3 = document.createElement('div');
        accordionBody3.classList.add('accordion-body');

        const functionsList = document.createElement('ul');
        functionsList.classList.add('functions');

        experience.functions.forEach(value => {
            const listItem = document.createElement('li');
            if (typeof value === 'object') {
                for (const key in value) {
                    const functionSpan = document.createElement('span');
                    functionSpan.classList.add('php');
                    functionSpan.textContent = `[ ${key} ]`;
                    listItem.appendChild(functionSpan);
                    listItem.innerHTML += ` - ${value[key]}`;
                }
            } else {
                listItem.textContent = value;
            }
            functionsList.appendChild(listItem);
        });

        accordionBody3.appendChild(functionsList);

        accordionCollapse.appendChild(accordionBody1);
        accordionCollapse.appendChild(accordionBody2);
        accordionCollapse.appendChild(accordionBody3);
        accordionItem.appendChild(accordionCollapse);

        jobsAccordion.appendChild(accordionItem);
    });