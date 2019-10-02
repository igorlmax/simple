import React, {Component} from 'react';
import Todos from './Todos';
import Home from "./components/home";
import Contact from "./components/contact";
import Post from "../src/components/post";
import {BrowserRouter, Route} from 'react-router-dom';
import {Link, NavLink} from 'react-router-dom';
import AddTodo from "./components/addtodo";

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

    addTodo = (todo) => {

        todo.id = Math.random();

        let todos = [...this.state.todos, todo];

        this.setState({
            todos: todos
        });
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <h1>Todo's</h1>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <AddTodo/>
                    <Todos
                        todos={this.state.todos}
                        deleteTodo={this.deleteTodo}/>
                    {/*<AddTodo addTodo={this.addTodo}/>*/}
                    <h6>Dynamic Content</h6>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route path='/:post_id' component={Post}/>
                </div>
            </BrowserRouter>
        )
    };
}

export default App;
