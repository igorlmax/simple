import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component {

    render() {
        // output posts props from Redux
        console.log(this.props.posts);

        // assign posts props to a constant
        const {posts} = this.props;

        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div key={post.id}>
                        <h3>{post.id}</h3>
                    </div>
                )
            })) : (
            <div>
                <h5>Does not exist</h5>
            </div>
        );

        return (
            <div>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

export default connect(mapStateToProps)(Home);
