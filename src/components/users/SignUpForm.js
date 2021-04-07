import React, { Component } from 'react'

export class SignUpForm extends Component {
    
    state = {
        username: "",
        password: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/><br /> 
                    <label htmlFor="password">Password:</label>
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/><br />
                    <input type="submit" value="Sign Up" />
                </form>
                
            </div>
        )
    }
}

export default SignUpForm