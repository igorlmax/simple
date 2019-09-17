import React, {Component} from 'react';
import {connect} from 'react-redux';

class Post extends Component {

    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.post_id;
        console.log(this.props.post)
    }

    render() {
        const {post} = this.props;
        return (
            <div>
                <h3>The ID is: {post.id}</h3>
                <h2>The text is: {post.title}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // ownProps contain information about the Routes
    let id = ownProps.match.params.post_id;

    return {
        post: state.posts.find(post => post.id === id)
    };
};

// simple dispatch definition
// store.dispatch({type: 'ADD_TODO', payload: 'go make some sandwich'});

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch({type: 'DELETE_POST', id: id})
        }
    };
};

export default connect(mapStateToProps)(Post);
