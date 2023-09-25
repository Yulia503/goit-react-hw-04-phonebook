import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactsList, ContactsListItem } from './ContactList.styled';
export const ContactList = ({ contacts, onDeleteContactItem }) => {

  return (


    <ContactsList>
      {contacts.map(contact => (
        <ContactsListItem key={contact.id}>
          <ContactListItem
            contact={contact}
            onDeleteContactItem={onDeleteContactItem}
          />
          
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};
