import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            pass: ''
        }
    }

    onChangeEmail = (e) => {
        this.setState({email: e.target.value});
    }

    onChangePass = (e) => {
        this.setState({pass: e.target.value});
    }

    onSubmitLogin = () => {
        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                pass: this.state.pass
            })
        })
        .then(res => res.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user);
            }
        })
    }

    render() {
        return (
            <main className="br2 ba dark-gray b--black-10 mv4 w-50 mw5 center bg-white pa4 shadow-5">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onChangeEmail}/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onChangePass}/>
                </div>
                </fieldset>
                <div className="">
                    <p className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={this.onSubmitLogin}>Login</p>
                </div>
                <div className="lh-copy mt3">
                    <p className="f6 link dim black db pointer" onClick={this.props.onClickRegister}>Register</p>
                </div>
            </form>
            </main>
        )
    }
}
