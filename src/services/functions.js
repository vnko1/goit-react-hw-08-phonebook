export const createObj = ({
  id,
  name,
  phone,
  email,
  newName,
  newPhone,
  newEmail,
}) => {
  const obj = {};
  obj.id = id;
  if (name !== newName && newName) obj.name = newName;
  if (phone !== newPhone && newPhone) obj.phone = newPhone;
  if (email !== newEmail && newEmail) obj.email = newEmail;
  return obj;
};
