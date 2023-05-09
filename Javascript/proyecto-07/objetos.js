const datos = {
  nombre: "Valentin",
  apellido: "Alterio",
  edad: "21",
  altura: "170",
  isDeveloper: true,
};
const ed = datos.edad;
const grupo = [
  {
    ...datos,
  },
  {
    nombre: "Cristian",
    apellido: "Toledo",
    edad: "21",
    altura: "169",
    isDeveloper: false,
  },
  {
    nombre: "Agustin",
    apellido: "Gomez",
    edad: "21",
    altura: "172",
    isDeveloper: false,
  },
];
const orden = grupo.sort((a, b) => b.edad - a.edad);
console.log(orden);
