import React, { Component } from 'react';

class SignIn extends Component {
    state={
        email: "",
        password: "",
    };

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <>
            <form className="container" autoComplete="off" style={{marginTop: "40px"}} onSubmit={this.handleSubmit}>
                <legend> {" "} <h4 className="text-warning">Sign In</h4></legend>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" onChange={this.handleChange} />
            </div>
                     <button type="submit" className="btn btn-primary">Sign In</button>
            </form>  
            </>
        );
    }
}

export default SignIn;