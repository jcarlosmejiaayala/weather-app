import React, {Component, createContext} from 'react'

const DEFAULT_STATE = {}

const Context = createContext(DEFAULT_STATE)

export const Consumer = Mixin => class extends Component {
    render() {
        return (
            <Context.Consumer>
                {context => <Mixin {...context}/>}
            </Context.Consumer>
        )
    }
}

export default class Provider extends Component {
    state = DEFAULT_STATE

    render() {
        return (
            <Context.Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
