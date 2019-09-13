import React, {Component} from 'react';
import Todos from './Todos';

class App extends Component {

    state = {
        todos: [
            {
                id: 1, text: 'go shop'
            },
            {
                id: 2, text: 'gym time'
            },
        ]
    };

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });

        this.setState({
            todos: todos
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Todo's</h1>
                <Todos
                    todos={this.state.todos}
                    deleteTodo={this.deleteTodo}/>
            </div>
        )
    };
}

export default App;
