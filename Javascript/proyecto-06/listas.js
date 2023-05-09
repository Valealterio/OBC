//Una variable que contenga la lista de la compra (mínimo 5 elementos)
let compras = ["leche", "carne", "tomate", "lechuga", "galletas"];
//- Modifica la lista de la compra y añádele "Aceite de Girasol"
compras.push("Aceite de Girasol");
//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.pop();
//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculas = [
  {
    titulo: "Atrapame si puedes",
    director: "Steven Spielberg",
    fecha: new Date(2003, 02, 20),
  },
  {
    titulo: "Top Gun: pasión y gloria",
    director: "Tony Scott",
    fecha: new Date(1986, 1, 1),
  },
  {
    titulo: "Iron Man 3",
    director: "Shane Black",
    fecha: new Date(2013, 04, 25),
  },
];
//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let peli_nuevas = peliculas.filter((obj) => obj.fecha > new Date(2010, 1, 1));

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = peliculas.map((pelicula) => {
  return pelicula.director;
});
//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulos = peliculas.map((pelicula) => {
  return pelicula.titulo;
});
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let direc_ti = directores.concat(titulos);
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let direc_ti2 = [...directores, ...titulos];
