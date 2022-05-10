/**********************************************
 **                  DATOS                   **
 **********************************************/

//* ARREGLOS
const radiologia = [
  { hora: "11:00", especialista: "Ignacio Schulz",      paciente: "Francisca Rojas",rut: "9878782-1",   prevision: "FONASA" },
  { hora: "11:30", especialista: "Federico Subercaseux",paciente: "Pamela Estrada", rut: "15345241-3",  prevision: "ISAPRE" },
  { hora: "15:00", especialista: "Fernando Wurthz",     paciente: "Armando Luna",   rut: "16445345-9",  prevision: "ISAPRE" },
  { hora: "15:30", especialista: "Ana María Godoy",     paciente: "Manuel Godoy",   rut: "17666419-0",  prevision: "FONASA" },
  { hora: "16:00", especialista: "Patricia Suazo",      paciente: "Ramón Ulloa",    rut: "14989389-K",  prevision: "FONASA" },
];

const traumatologia = [
  { hora: "8:00",  especialista: "María Paz Altuzarra", paciente: "Paula Sánchez",  rut: "15554774-5",  prevision: "FONASA" },
  { hora: "10:00", especialista: "Raúl Araya",          paciente: "Angélica Navas", rut: "15444147-9",  prevision: "ISAPRE" },
  { hora: "10:30", especialista: "María Arriagada",     paciente: "Ana Klapp",      rut: "17879423-9",  prevision: "ISAPRE" },
  { hora: "11:00", especialista: "Alejandro Badilla",   paciente: "Felipe Mardones",rut: "15474423-6",  prevision: "ISAPRE" },
  { hora: "11:30", especialista: "Cecilia Budnik",      paciente: "Diego Marre",    rut: "16554741-K",  prevision: "FONASA" },
  { hora: "12:00", especialista: "Arturo Cavagnaro",    paciente: "Cecilia Méndez", rut: "9747535-8",   prevision: "ISAPRE" },
  { hora: "12:30", especialista: "Andrés Kanacri",      paciente: "Marcial Suazo",  rut: "11254785-5",  prevision: "ISAPRE" }
]; 

const dental = [
  { hora: "8:30",  especialista: "Andrea Zúñiga",       paciente: "Marcela Retamal",rut: "11123425-6",  prevision: "ISAPRE" },
  { hora: "11:00", especialista: "María Pía Zañartu",   paciente: "Ángel Muñoz",    rut: "9878789-2",   prevision: "ISAPRE" },
  { hora: "11:30", especialista: "Scarlett Witting",    paciente: "Mario Kast",     rut: "7997879-5",   prevision: "FONASA" },
  { hora: "13:00", especialista: "Francisco Von Teuber",paciente: "Karin Fernández",rut: "18887662-K",  prevision: "FONASA" },
  { hora: "13:30", especialista: "Eduardo Viñuela",     paciente: "Hugo Sánchez",   rut: "17665461-4",  prevision: "FONASA" },
  { hora: "14:00", especialista: "Raquel Villaseca",    paciente: "Ana Sepúlveda",  rut: "14441281-0",  prevision: "ISAPRE" }
];


/**********************************************
 **         PRIMERA-ÚLTIMA ATENCIÓN          **
 **********************************************/

const radiologiaFirstLast = (`Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}`);
const traumatologiaFirstLast = (`Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}`);
const dentalFirstLast = (`Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}`);


/**********************************************
 **              SELECTORES DOM              **
 **********************************************/

const firstLastRadio = document.querySelector('.first-last__radio');
const firstLastTrauma = document.querySelector('.first-last__trauma');
const firstLastDental = document.querySelector('.first-last__dental');
const tbodyRadioDiv = document.querySelector('#tbody-radio');
const tbodyTraumaDiv = document.querySelector('#tbody-trauma');
const tbodyDentalDiv = document.querySelector('#tbody-dental');


/**********************************************
 **           FUNCIONES DE PINTADO           **
 **********************************************/

 
//* PRIMERAS Y ÚLTIMAS ATENCIONES 
firstLastRadio.innerText = radiologiaFirstLast;
firstLastTrauma.innerText = traumatologiaFirstLast;
firstLastDental.innerText = dentalFirstLast;


//* TABLAS POR ESPECIALIDAD
function recorrerPintar(arreglo, div) {
  arreglo.forEach( obj => div.innerHTML += `<tr><th>${obj.hora}</th><td>${obj.especialista}</td><td>${obj.paciente}</td><td>${obj.rut}</td><td>${obj.prevision}</td>`)
}

const especialidadDiv = [
  { especialidad: radiologia,     div: tbodyRadioDiv },
  { especialidad: traumatologia,  div: tbodyTraumaDiv },
  { especialidad: dental,         div: tbodyDentalDiv }
];

especialidadDiv.forEach( e => recorrerPintar(e.especialidad, e.div) );

