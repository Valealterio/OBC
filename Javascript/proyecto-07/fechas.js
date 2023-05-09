const hoy = new Date();
const nacimiento = new Date(2001, 6, 10);
const posterior = hoy > nacimiento;
const dia_nacimiento = nacimiento.getDate();
const mes_nacimiento = nacimiento.getMonth() + 1;
const año_nacimiento = nacimiento.getFullYear();
