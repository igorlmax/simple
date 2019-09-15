import React, {Component} from 'react';
import {connect} from 'react-redux';
import {connect} from 'react-redux';

class Post extends Component {

    render() {
        const post =  this.props.post;
    }
}

const mapStateToProps = (state, ownProps) => {
    // ownProps contain information about the Routes
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    };
};

export default connect(mapStateToProps)(Post);
