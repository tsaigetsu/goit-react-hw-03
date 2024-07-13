import React, { useState } from 'react';
const ContactForm = ({conact, deleteContact}) => {
  return (
    <div>
      <h2>{ontact.name}</h2>
      <p>{contact.number}</p>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default ContactForm
