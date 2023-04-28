import { useState, useEffect } from 'react';
import { Container } from './App.styled';
import { FormContact } from './FormContact/FormContact';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const saveContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', saveContacts);
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const newContact = {
      number,
      name,
      id: nanoid(),
    };

    const newName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (newName) {
      return alert(`${newContact.name} is already in contacts.`);
    } else {
      setContacts(prev => [...prev, newContact]);
    }
  };

  const handleFilter = e => {
    const { value } = e.target;

    setFilter(value);
  };

  const filteredContacts = () => {
    const lowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCase)
    );
  };
  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContact onClickSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} filter={filter} />
      {contacts.length > 0 && (
        <ContactsList
          contacts={filteredContacts()}
          onClickDelete={handleDelete}
        />
      )}
    </Container>
  );
};
