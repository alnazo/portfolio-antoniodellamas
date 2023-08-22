const complementaries = {
    "CCNA2": {
        "title": "Conmutación, enrutamiento y elementos esenciales inalámbricos (SWRE)",
        "site": "I.E.S Albert Einstein",
        "time": "2022",
        "description": "Certificacion de CCNA."
    },
    "CCNA1": {
        "title": "Introducción a las Redes",
        "site": "I.E.S Albert Einstein",
        "time": "2022",
        "description": "Certificacion de CCNA."
    },
    "redes": {
        "title": "Proyecto Redes+",
        "site": "Ayuntamiento de Sevilla",
        "time": "2020",
        "description": "Proyecto para la inserción socio-laboral a desempleados."
    },
    "prl": {
        "title": "Orientación sobre Prevención de Riesgos Laborales",
        "site": "Centro de Prevención de Riesgos Laborales de Sevilla",
        "time": "2018",
        "description": "Seminario sobre prevención de riesgos laborales."
    }
};

const complementsContainer = document.getElementById('studies-complementaries-container');

Object.keys(complementaries).forEach(key => {
    const comp = complementaries[key];

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'border-light', 'col-md-5', 'm-3');

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    const titleH5 = document.createElement('h5');
    titleH5.classList.add('card-title');
    titleH5.textContent = comp.title;

    const siteH6 = document.createElement('h6');
    siteH6.classList.add('card-subtitle', 'mb-2', 'text-muted');
    siteH6.textContent = comp.site;

    const timeH6 = document.createElement('h6');
    timeH6.classList.add('card-subtitle', 'mb-2', 'text-muted');
    timeH6.textContent = `Realizado en: ${comp.time}`;

    const descriptionP = document.createElement('p');
    descriptionP.classList.add('card-text');
    descriptionP.textContent = comp.description;

    cardBodyDiv.appendChild(titleH5);
    cardBodyDiv.appendChild(siteH6);
    cardBodyDiv.appendChild(timeH6);
    cardBodyDiv.appendChild(descriptionP);

    cardDiv.appendChild(cardBodyDiv);
    complementsContainer.appendChild(cardDiv);
});