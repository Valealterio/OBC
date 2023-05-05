function siempre_bien() {
  return true;
}

function fun_asin() {
  setTimeout(() => {
    console.log("hola soy una promesa");
  }, 5000);
}

function* generaIndice() {
  let id = 0;
  while (true) {
    yield (id += 2);
  }
}
const gen = generaIndice();
console.log(gen.next());
console.log(gen.next());
