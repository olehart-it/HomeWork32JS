import React, { useState, useEffect } from 'react';
import ContactsList from './ContactsList';
import AddContactForm from './AddContactForm';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setContacts(data);
      })
      .catch(error => {
        console.error('ERR', error);
      });
  }, []);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
    setShowForm(false);
  };

  const handleDeleteContact = (contactId) => {
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Список контактов</h1>
      <ContactsList contacts={contacts} onDeleteContact={handleDeleteContact} />
      {showForm ? (
        <AddContactForm onAddContact={handleAddContact} onCancel={() => setShowForm(false)} />
      ) : (
        <button onClick={() => setShowForm(true)}>Добавить контакт</button>
      )}
    </div>
  );
};

export default App;
