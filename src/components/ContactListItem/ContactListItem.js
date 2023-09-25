import { DeleteBtn } from './ContactListItem.styled';




export const ContactListItem = ({ contact, onDeleteContactItem }) => {
  return (
    <>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <DeleteBtn onClick={() => onDeleteContactItem(contact.id)}>Delete</DeleteBtn>
    </>

  )
};
