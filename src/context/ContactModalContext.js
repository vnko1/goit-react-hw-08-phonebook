import { createContext, useContext, useState } from 'react';

export const ShowModalContext = createContext();

export const useShowModalContext = () => useContext(ShowModalContext);

const ShowModalProvider = ({ children }) => {
  const [showAddContact, setShowAddContact] = useState(false);
  const [showEditContact, setShowEditContact] = useState(false);
  const [contactId, setContactId] = useState(null);

  return (
    <ShowModalContext.Provider
      value={{
        showAddContact,
        setShowAddContact,
        showEditContact,
        setShowEditContact,
        contactId,
        setContactId,
      }}
    >
      {children}
    </ShowModalContext.Provider>
  );
};
export default ShowModalProvider;
