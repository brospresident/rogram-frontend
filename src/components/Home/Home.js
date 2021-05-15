import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Rogram Home... still in building</h1>
                <h3>{`Hello ${this.props.user.name}`}</h3>
            </div>
        )
    }
}
