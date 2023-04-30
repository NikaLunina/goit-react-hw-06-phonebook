import { Container } from './App.styled';
import { FormContact } from './FormContact/FormContact';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContact />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};
