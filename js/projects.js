const projectsAPI = {
    "java": {
        "dual": {
            "title": "Proyecto DUAL",
            "img": "https://github.com/alnazo/ProyectoDUAL/blob/main/src/main/webapp/img/logo.jpg?raw=true",
            "description": "Desarrollo de aplicación web de servicio de compartir cuenta de contenido Streaming, además de tablón para compartir contenido.",
            "developed": "2023",
            "url": "https://github.com/alnazo/ProyectoDUAL"
        },
        "intermodular": {
            "title": "Proyecto Intermodular",
            "img": "https://github.com/alnazo/ProyectoIntermodular/blob/main/Docs/ED/DiagramaUML.png?raw=true",
            "description": "Aplicación desarrollada en JavaFX, para el control de jugadoras y clubes de la liga de futbol femenino.",
            "developed": "2023",
            "url": "https://github.com/alnazo/ProyectoIntermodular"
        },
        "temario": {
            "title": "Clases 1º programación",
            "img": "img/alnazo.png",
            "description": "Actividades realizadas en el curso escolar de 1º DAM (Desarrollo de Aplicaciones Multiplataforma).",
            "developed": "2022/2023",
            "url": "https://github.com/alnazo/Programacion-Tema6"
        }
    },
    "android": {
        "http_cats": {
            "title": "HTTP Cats Errors App",
            "img": "https://github.com/alnazo/Http-Cat-Error-App/blob/main/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png?raw=true",
            "description": "Application to graphically see HTTP errors with cats",
            "developed": "2023",
            "url": "https://github.com/alnazo/Http-Cat-Error-App"
        }
    }
};

const projectsContainer = document.getElementById('projects-container');

for (const lang in projectsAPI) {
    const langProjects = projectsAPI[lang];

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'justify-content-around', 'mt-3');

    const langDiv = document.createElement('div');
    langDiv.classList.add('col-12', 'border', 'rounded');
    langDiv.innerHTML = `Proyectos <span class="${lang}">${lang === 'php' ? lang.toUpperCase() : lang.charAt(0).toUpperCase() + lang.slice(1)}</span>`;
    rowDiv.appendChild(langDiv);

    for (const key in langProjects) {
        const value = langProjects[key];

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-4', 'col-lg-3', 'mt-3');

        const card = document.createElement('div');
        card.classList.add('card', 'border', 'border-light');
        card.style.width = '18rem';

        const cardImg = document.createElement('img');
        cardImg.classList.add('card-img-top');
        cardImg.src = value.img;
        cardImg.alt = value.title;
        card.appendChild(cardImg);

        const cardBody1 = document.createElement('div');
        cardBody1.classList.add('card-body');

        const titleH5 = document.createElement('h5');
        titleH5.classList.add('card-title');
        titleH5.textContent = value.title;
        cardBody1.appendChild(titleH5);

        const descriptionP = document.createElement('p');
        descriptionP.classList.add('card-text');
        descriptionP.textContent = value.description;
        cardBody1.appendChild(descriptionP);

        card.appendChild(cardBody1);

        const cardBody2 = document.createElement('div');
        cardBody2.classList.add('card-body');

        const developedP = document.createElement('p');
        developedP.classList.add('card-text');
        developedP.innerHTML = `Desarrollado en: ${value.developed}`;
        cardBody2.appendChild(developedP);

        const urlA = document.createElement('a');
        urlA.classList.add('card-link', 'btn', 'btn-primary');
        urlA.href = value.url;
        urlA.target = '_blank';
        urlA.textContent = 'Ver proyecto';
        cardBody2.appendChild(urlA);

        card.appendChild(cardBody2);

        cardDiv.appendChild(card);
        rowDiv.appendChild(cardDiv);
    }

    projectsContainer.appendChild(rowDiv);
};