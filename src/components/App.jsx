import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { StyledSection, SectionTitle, ContactsTitle } from './Section.styled';
import { GlobalStyle } from './Globalstyle';
import { Container } from './Container';
import { StyledNotification } from './Notification.styled';

const LS_KEY = 'contacts';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

    componentDidMount() {
    const contacts = localStorage.getItem(LS_KEY);
    const actualContacts = JSON.parse(contacts);

    if (actualContacts) {
      this.setState({ contacts: actualContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const currentContacts = this.state.contacts;
    const previousContacts = prevState.contacts;

    if (currentContacts !== previousContacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(currentContacts));
    }
  }


  addContact = newContact => {
    const isContactInList = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isContactInList) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };

  filterContactsByName = newContactName => {
    this.setState({
      filter: newContactName,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <StyledSection>
          <Container>
            <SectionTitle>Phonebook</SectionTitle>
            <ContactForm onAdd={this.addContact} />
          </Container>
        </StyledSection>

        <StyledSection>
          <Container>
            <ContactsTitle>Contacts</ContactsTitle>
            <ContactFilter
              filter={filter}
              onContactFilter={this.filterContactsByName}
            />
            {contacts.length > 0 ? (
              <ContactList
                contacts={filteredContacts}
                onDeleteContactItem={this.deleteContact}
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
  }
}
