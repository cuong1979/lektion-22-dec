import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <input type="text" placeholder="Skriv en todo" />
                <button>{ this.props.buttonText }</button>
            </section>
        )
    }
}

export default AddTodo;