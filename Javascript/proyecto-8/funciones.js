function siempre_bien() {
  return true;
}

function fun_asin() {}

const mi_promes = new Promise((resolve, reject) => {
  if (true) {
    resolve();
  } else {
    reject();
  }
});

mi_promes
  .then(setTimeout((() => console.log("Hola soy una promesa"), 5000)))
  .catch(() => console.log("ERROR"));

function* generaIndice() {
  let ind = 0;
  while (true) {
    yield (ind += 2);
  }
}
