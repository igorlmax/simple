import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../redux/actions';

class Post extends Component {

    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.post_id;
        console.log(this.props.post)
    }

    // calls the delete dispatch - below
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/'); // redirects
    };

    render() {
        console.log(this.props);

        const {post} = this.props;
        return (
            <div>
                <h3>The ID is: {post.id}</h3>
                <h2>The text is: {post.title}</h2>

                <button onClick={this.handleClick}>Delete Post</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // ownProps contain information about the Routes
    let id = ownProps.match.params.post_id;

    return {
        // this will be send on click to Reducer
        post: state.posts.find(post => post.id === id)
    };
};

// simple dispatch definition
// store.dispatch({type: 'ADD_TODO', payload: 'go make some sandwich'});

const mapDispatchToProps = (dispatch) => {

    return {
        deletePost: (id) => {dispatch(deletePost(id))}
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
