import React, { Component } from 'react'

export default class Signup extends Component {
    constructor() {
        super()
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: "",
            error: "",
            showUser: false,
            loading: false
        }
    }
    handleChange = (firstname) => (event) => {
        this.setState({ error: "" });
        this.setState({ [firstname]: event.target.value });
    }

    isValid = () => {
        const { firstname, lastname, email, password, confirmPassword, gender } = this.state
        if (firstname.length === 0) {
            this.setState({ error: "This firstname field can not empty", loading: false })
            return false
        }
        if (lastname.length === 0) {
            this.setState({ error: "This lastname field can not empty", loading: false })
            return false
        }
        if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            this.setState({ error: "A valid Email is required", loading: false });
            return false
        }
        if (password.length === 0) {
            this.setState({ error: "This password field can not empty", loading: false })
            return false
        }
        if (password.length >= 1 && password.length <= 5) {
            this.setState({ error: "Password must be at least 6 characters long", loading: false });
            return false;
        }
        if (confirmPassword !== password) {
            this.setState({ error: "This password not match", loading: false })
            return false
        }
        if (gender.length === 0) {
            this.setState({ error: "Please select gender", loading: false })
            return false
        }


        return true;
    };

    clickSubmit = event => {
        event.preventDefault()
        this.setState({ loading: true });
        const { firstname, lastname, email, password, confirmPassword, gender } = this.state;
        const user = {
            firstname,
            lastname,
            email,
            password,
            confirmPassword,
            gender
        };
        console.log(user);
        //this.signup(user);
        if (this.isValid()) {
            this.setState({
                showUser: true,
                loading: false
            });
        }

    }

    signupForm = (firstname, lastname, email, password, confirmPassword, gender) => (
        <form>
            <div className="form-group">
                <label className="text-muted">First name</label>
                <input onChange={this.handleChange("firstname")} type="text" className="form-control" value={firstname}></input>
            </div>
            <div className="form-group">
                <label className="text-muted">Last name</label>
                <input onChange={this.handleChange("lastname")} type="text" className="form-control" value={lastname}></input>
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={this.handleChange("email")} type="email" className="form-control" value={email}></input>
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={this.handleChange("password")} type="password" className="form-control" value={password}></input>
            </div>
            <div className="form-group">
                <label className="text-muted">Verify password</label>
                <input onChange={this.handleChange("confirmPassword")} type="password" className="form-control" value={confirmPassword}></input>
            </div>
            <div className="form-group">
                <label className="text-muted">Gender</label>
                <select onChange={this.handleChange("gender")} className="form-control" value={gender}>
                    <option></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

            </div>
            <button onClick={this.clickSubmit} className="btn btn-raised btn-primary">
                Submit
            </button>
        </form>
    );


    render() {
        const { firstname, lastname, email, password, confirmPassword, gender, error , loading} = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Test form and validation</h2>

                <div className="alert alert-danger" style={{ display: error ? "" : 'none' }}>{error}</div>
                
                {loading ? 
                    <div className="jumbotron text-center">
                        <h2>Loading ...</h2> </div> : ("")}

                {this.signupForm(firstname, lastname, email, password, confirmPassword, gender)}

                <div className="container">
                    {this.state.showUser &&

                        <p>
                            <strong>Result</strong><br />
                        FirstName:  {this.state.firstname}<br />
                        LastName:  {this.state.lastname}<br />
                        Email:  {this.state.email}<br />
                        Gender:  {this.state.gender}<br />
                        </p>
                    }
                </div>

            </div>


        )
    }
}
