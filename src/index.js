const messages = [
  "Hola Paco",
  "Ah que eres wapo",
  "Mi abuela se llama Tato",
  "Papo el capo",
  "Mi pana el panda",
  "La qualité es para los elegidos"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

// export default { randomMsg };
module.exports = { randomMsg };

// // Funcion: Opcion aleatoria de un arreglo => arreglo[Math.floor(Math.random() * arreglo.length)]
// const randomChoiceArray = array => {
//   const message = array[Math.floor(Math.random() * array.length)];
//   console.log(message);
// };
