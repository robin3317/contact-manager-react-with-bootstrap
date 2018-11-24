import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return {
        state
      };
  }
};

class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
export const Consumer = Context.Consumer;
