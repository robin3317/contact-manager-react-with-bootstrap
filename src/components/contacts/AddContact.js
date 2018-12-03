import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    address: '',
    phone: '',
    email: ''
  };

  render() {
    const { name, address, phone, email } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-body">
          <h4 className="card-title">Add Contact</h4>
          <form>
            {/* input field : Name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter name"
                value={name}
              />
            </div>
            {/* input field : Address */}
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                className="form-control"
                type="text"
                name="address"
                placeholder="Enter Address"
                value={address}
              />
            </div>
            {/* input field : Phone */}
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                className="form-control"
                type="tel"
                name="phone"
                placeholder="Enter phone"
                value={phone}
              />
            </div>
            {/* input field : Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
              />
            </div>
            {/* Submit button */}
            <input
              className="btn btn-light btn-block"
              type="submit"
              value="Add Contact"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
