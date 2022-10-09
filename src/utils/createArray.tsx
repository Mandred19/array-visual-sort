const randomIntFromInterval = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

export const createArray = (arrayLength: number): Array<number> => {
  const array = [];

  for (let i = 0; i < arrayLength; i++) {
    array.push(randomIntFromInterval(arrayLength, 600));
  }

  return array;
};
