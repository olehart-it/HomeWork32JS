import React from 'react';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>НикНейм</th>
            <th>Телефон</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => onDeleteContact(contact.id)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsList;
