import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    isShowContactInfo: false
  };

  onShowClickHandler = () => {
    this.setState({ isShowContactInfo: !this.state.isShowContactInfo });
  };

  deleteContact = () => {
    this.props.deleteContactHandler();
  };

  render() {
    const { name, address, phone, email } = this.props.contact;
    const { isShowContactInfo } = this.state;

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
            onClick={this.deleteContact}
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
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContactHandler: PropTypes.func.isRequired
};

export default Contact;
