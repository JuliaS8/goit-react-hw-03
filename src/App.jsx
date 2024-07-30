import { useState } from 'react'
import { useEffect } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import Section from './components/Section/Section'

function App() {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [filter, setFilter] = useState('');

    useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
  
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }

  const deleteContact = (contactId) => {
    console.log(contactId)
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId)
    });
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
  <div>
      <Section>
       <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
      </Section>
      <Section>
        <SearchBox value={filter} onFilter={setFilter} />
      </Section>
      <Section>
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        </Section>
</div>

  )
}

export default App
