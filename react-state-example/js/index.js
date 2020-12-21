import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import Name from './name';
import TodoItem from './todoItem';
import AddTodo from './addTodo';

//Måste alltid starta med en stor bokstav för att React ska veta att det är en komponent
//Parenteser efter return används för att kunna skriva på fler rader
class App extends Component {
    constructor(props) {
        super(props);
        console.log('this.props är: ', this.props);
    }

    render() {
        return (
            <section className="wrapper">
                <h1>{ this.props.title }</h1>
                <ul className="todo-list">
                    <TodoItem text="Köp kaffe" done={false} />
                    <TodoItem text="Köp kaka" done={true} />
                    <TodoItem text="Brygg kaffe" done={false} />
                    <TodoItem text="Fika" done={false} />
                </ul>
                <AddTodo buttonText="Lägg till" />
            </section>
        )
    }
}


ReactDOM.render(<App title="Todo" />, document.getElementById('root'));