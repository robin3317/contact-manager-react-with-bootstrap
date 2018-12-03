import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    isShowContactInfo: false
  };

  onShowClickHandler = () => {
    this.setState({ isShowContactInfo: !this.state.isShowContactInfo });
  };

  deleteContact = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    const { id, name, address, phone, email } = this.props.contact;
    const { isShowContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h5>
                {name}
                <i
                  className="fas fa-sort-down"
                  onClick={this.onShowClickHandler}
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times"
                  onClick={this.deleteContact.bind(this, id, dispatch)}
                  style={{ cursor: 'pointer', color: 'red', float: 'right' }}
                />
              </h5>
              {isShowContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Address : {address}</li>
                  <li className="list-group-item">Phone : {phone}</li>
                  <li className="list-group-item">Email : {email}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
