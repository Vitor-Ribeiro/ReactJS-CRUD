import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    empresa:"",
    cpf:""
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.empresa === "" || this.state.cpf === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", empresa:"", cpf:"" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Empresa</label>
            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={this.state.empresa}
              onChange={(e) => this.setState({ empresa: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Cpf</label>
            <input
              type="text"
              name="cpf"
              placeholder="Cpf"
              value={this.state.cpf}
              onChange={(e) => this.setState({ cpf: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
