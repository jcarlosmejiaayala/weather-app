import React, {Component, createContext, Children, cloneElement} from 'react'

const DEFAULT_STATE = {}

const Context = createContext(DEFAULT_STATE)

const Consumer = ({children}) => (
    <Context.Consumer>
        {context => Children.map(children, child => cloneElement(child, {
            ...context
        }))}
    </Context.Consumer>
)

class Provider extends Component {
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

export default {
    Consumer,
    Provider
}
