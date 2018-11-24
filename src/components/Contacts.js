import React, { Component, Fragment } from 'react';

import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'johnd@gmail.com',
        phone: '+082-555-555-555',
        address: '75/1 Shukrabad, Dhanmondi'
      },
      {
        id: 2,
        name: 'Salim Khan',
        email: 'salimk@gmail.com',
        phone: '+082-553-355-695',
        address: '71/6 Shukrabad, Dhanmondi'
      },
      {
        id: 3,
        name: 'Karen Steve',
        email: 'steve@gmail.com',
        phone: '+082-111-222-333',
        address: '10/6 Shukrabad, Dhanmondi'
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;
    return (
      <Fragment>
        {contacts.map(contact => (
          <Contact
            contact={contact}
            key={contact.id}
            deleteContactHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </Fragment>
    );
  }
}

export default Contacts;
