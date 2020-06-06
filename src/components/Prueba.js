import React, { Component } from 'react'

export default class Prueba extends Component {

    render() {
        return (
            <div>
                <h1>Hola {this.props.name}!</h1>
            </div>
        )
    }
}
