import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    address: '',
    phone: '',
    email: ''
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
  };

  render() {
    const { name, address, phone, email } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-body">
          <h4 className="card-title">Add Contact</h4>
          <form onSubmit={this.onSubmitHandler}>
            {/* input field : Name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter name"
                value={name}
                onChange={this.onChangeHandler}
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
                onChange={this.onChangeHandler}
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
                onChange={this.onChangeHandler}
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
                onChange={this.onChangeHandler}
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
