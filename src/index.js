const messages = [
  "A veces hay que cagarse en todo y seguir pa' adelante.",
  "No te esfuerces por ser buena persona, solo enfócate en ser mejor persona cada día.",
  "Frases sin contexto como esta son fáciles de malinterpretar, no te creas todo lo que te digan unas cuántas palabras, la vida es mucho más complejo que eso.",
  "La vida puede ser una mierda a veces, por eso la familia es importante.",
  "Si sabes lo que tienes que hacer, no pares, pero recuerda que la vida no es sólo dinero y sexo.",
  "Si el amor no es lo más importante en la vida, no sé que es lo más importante",
];

// Frases - sarcasmo
// "Me cago en todo... pero luego me levantaré, para volverme a cagar en todo",

const greatMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

// export default { greatMsg };
module.exports = { greatMsg };

// // Funcion: Opcion aleatoria de un arreglo => arreglo[Math.floor(Math.random() * arreglo.length)]
// const randomChoiceArray = array => {
//   const message = array[Math.floor(Math.random() * array.length)];
//   console.log(message);
// };
