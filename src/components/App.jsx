import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { StyledSection, SectionTitle, ContactsTitle } from './Section.styled';
import { GlobalStyle } from './Globalstyle';
import { Container } from './Container';
import { StyledNotification } from './Notification.styled';

const LS_KEY = 'contacts';

//*------------------- Отримуємо контакти з Local St-----------

const getActualContacts = () => {
  const savedPreviousContacts = localStorage.getItem(LS_KEY);

  if (savedPreviousContacts) {
    return JSON.parse(savedPreviousContacts);
  }
  
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getActualContacts);
  const [filter, setFilter] = useState('');



  //*-------------- Нам потрібно записати наші контакти в LS-----------------


  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);



  const addNewContact = newContact => {
    const isContactInList = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isContactInList) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...newContact },
    ]);
  };



//*--------------------Delete----------------
  
  
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };


  const filterContactsByName = newContactName => {
    setFilter(newContactName);
  };


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );




  return (
    <>
      <StyledSection>
        <Container>
          <SectionTitle>Phonebook</SectionTitle>
          <ContactForm onAdd={addNewContact} />
        </Container>
      </StyledSection>

      <StyledSection>
        <Container>
          <ContactsTitle>Contacts</ContactsTitle>
          <ContactFilter
            filter={filter}
            onContactFilter={filterContactsByName}
          />
          {contacts.length > 0 && filteredContacts.length > 0 ? (
            <ContactList
              contacts={filteredContacts}
              onDeleteContactItem={deleteContact}
            />
          ) : (
            <StyledNotification>
                You don't have a friend with this name, Please add some contact to the
                phonebook!
            </StyledNotification>
          )}
        </Container>
      </StyledSection>
      <GlobalStyle />
    </>
  );
};


