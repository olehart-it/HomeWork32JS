import React, { useState } from 'react';

const AddContactForm = ({ onAddContact, onCancel }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, username, phone };
    onAddContact(newContact);
    setName('');
    setUsername('');
    setPhone('');
  };

  return (
    <div>
      <h2>Добавить новый контакт</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">ФИО:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="username">НикНейм:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="phone">Телефон:</label>
          <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <button type="submit">Сохранить</button>
          <button type="button" onClick={onCancel}>Отменить</button>
        </div>
      </form>
    </div>
  );
};

export default AddContactForm;
