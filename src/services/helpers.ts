/* eslint-disable no-plusplus */
export const generatorArray = (amount: number) => {
  const newArray = [];
  for (let i = 1; i <= amount; i++) {
    newArray.push(i);
  }
  return newArray;
};
export default generatorArray;
