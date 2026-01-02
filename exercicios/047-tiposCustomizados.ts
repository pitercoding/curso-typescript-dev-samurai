/* Uso de propriedades opcionais (?). Crie um tipo chamado Car com as propriedades make (string), model (string) e year? (opcional, number). Declare um objeto do tipo Car sem definir year.  */

type Car = {
  make: string;
  model: string;
  year?: number;
};

const xavante: Car = {
  make: "Gurgel",
  model: "Gurgel Xavante (X-12)",
};

const uno: Car = {
  make: "Fiat",
  model: "Uno S",
  year: 1983,
};

const getCarDetails = (c: Car): string => {
  return `
  Make: ${c.make}
  Model: ${c.model}
  Year: ${c.year ?? "Not defined"}
  `;
};

console.log(getCarDetails(xavante));
console.log(getCarDetails(uno));
