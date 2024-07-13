import React, { useState } from 'react';
const ContactForm = ({contact, deleteContact}) => {
  return (
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.number}</p>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default ContactForm
