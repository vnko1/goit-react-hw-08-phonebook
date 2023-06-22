export const createObj = ({ id, name, phone, newName, newPhone }) => {
  const obj = {};
  obj.id = id;
  if (name !== newName && newName) obj.name = newName;
  if (phone !== newPhone && newPhone) obj.phone = newPhone;
  return obj;
};
