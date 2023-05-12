export const createObj = ({ id, name, number, newName, newNumber }) => {
  const obj = {};
  obj.id = id;
  if (name !== newName && newName) obj.name = newName;
  if (number !== newNumber && newNumber) obj.number = newNumber;
  return obj;
};
