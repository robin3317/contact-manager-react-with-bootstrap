import React, { Component, Fragment } from 'react';

import { Consumer } from '../context';

import Contact from './Contact';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <Fragment>
              {contacts.map(contact => (
                <Contact contact={contact} key={contact.id} />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
