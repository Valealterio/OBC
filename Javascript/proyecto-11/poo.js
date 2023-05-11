class Estudiante {
  constructor(nombre) {
    this.nombre = nombre;
    this.asignaturas = ["Javascript", "HTML", "CSS"];
  }
  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}

const est_1 = new Estudiante("Valentin");

console.log(est_1.obtenDatos());
