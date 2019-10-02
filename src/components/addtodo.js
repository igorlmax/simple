import React from "react";
import {connect} from 'react-redux';

// REACT & REDUX way
class AddTodo extends React.Component {

    state = {
        todo: {
            title: ""
        }
    };


    handleChange = (e) => {
        // within new object make a copy of existent to-do from the State and assign the new title value
        const todo = {...this.state.todo, title: e.target.value};

        // add to the State the new to-do
        this.setState({todo: todo});
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <hr/>
                <h3>Create new User</h3>
                <input type="text"
                       onChange={this.handleChange}
                       value={this.state.todo.title}
                />
                <input type="submit" value="Save"/>
                <hr/>
            </form>
        )
    }
}

function mapStateToProps(state) {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
