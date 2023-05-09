import * as operacion from "./controller.js";
import chalk from "chalk";

console.log(operacion.multiplica(operacion.suma(1, 2), operacion.suma(4, 5)));
console.log(
  chalk.green(operacion.multiplica(operacion.suma(1, 2), operacion.suma(4, 5)))
);
