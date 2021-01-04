import React, { Component } from 'react'

class Follow extends Component {
    constructor() {
        super()
        this.state = {
            message: 'State sebelum dipencet'
        }
    }

    changeMessage() {
        this.setState ({
            message: 'Aww sudah dipencet'
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick = {() => this.changeMessage()}>Pencet</button>
            </div>
        )
    }
}
export default Follow