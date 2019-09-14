import React, {Component} from 'react';

// When it's Class Component not additional
// prop destructuring is needed
class AddTodo extends Component {

    state = {
        text: ''
    };

    // update state of text input value
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    // on submitting the form
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            text: ''
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.text}/>
                    <input type="Submit"/>
                </form>
            </div>
        )
    }
}
export default AddTodo;
