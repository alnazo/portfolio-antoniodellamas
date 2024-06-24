const studies = {
    "DAM": {
        "study": "Desarrollo de Aplicaciones Multiplataforma",
        "level": "Ciclo Formativo de Grado Superior",
        "site": "Escuelas Mª Auxiliadora Nervión",
        "date": "2022 - 2024",
        "description": "Conocimientos en programación Java, SQL, entornos de desarrollos."
    },
    "STI": {
        "study": "Sistemas de Telecomunicaciones e Informáticos",
        "level": "Ciclo Formativo de Grado Superior",
        "site": "I.E.S. Albert Einstein",
        "date": "2020 - 2022",
        "description": "Conocimientos sobre sistemas de radiocomunicaciones, inmótica, gestión de proyectos de ICT, producción de audio-visuales."
    },
    "IT": {
        "study": "Instalaciones de Telecomunicaciones",
        "level": "Ciclo Formativo de Grado Medio",
        "site": "I.E.S. Federico Mayor Zaragoza",
        "date": "2018 - 2020",
        "description": "Conocimiento en electrónica, electricidad, sistemas de domóticas, sistemas CCTV y sonorización."
    },
    "SMR": {
        "study": "Sistemas Microinformáticos y Redes",
        "level": "Ciclo Formativo de Grado Medio",
        "site": "I.E.S. Pino Montano",
        "date": "2014 - 2018",
        "description": "Conocimiento en ambientes informáticos, manejo entre equipos tecnológicos y preparación de formación para empresas."
    }
};

const studyContainer = document.getElementById('study-container');

Object.keys(studies).forEach(key => {
    const studie = studies[key];

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('btn', 'btn-primary', 'col-2', 'm-3');
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', `#${key}`);
    button.textContent = key;
    studyContainer.appendChild(button);

    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = key;
    modal.tabIndex = '-1';
    modal.setAttribute('aria-labelledby', key);
    modal.setAttribute('aria-hidden', 'true');
    studyContainer.appendChild(modal);

    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 java" id="${key}">${studie.study}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul style="list-style-type: none; padding-left: 0px;">
                        <li><span class="php">Nivel de estudio: </span>${studie.level}</li>
                        <li><span class="php">Instituto: </span>${studie.site}</li>
                        <li><span class="php">Años cursados:</span>${studie.date}</li>
                    </ul>
                    ${studie.description}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn android" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    `;
});