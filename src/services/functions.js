export const createObj = ({ id, name, number }) => {
  const obj = {};
  obj.id = id;
  if (name) obj.name = name;
  if (number) obj.number = number;
  return obj;
};
