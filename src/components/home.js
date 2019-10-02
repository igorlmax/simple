import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Home extends Component {

    render() {
        // output posts props from Redux
        console.log(this.props.posts);

        // assign posts props to a constant
        const {posts} = this.props;

        console.log(posts);

        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div key={post.id}>
                        <Link to={'/' + post.id}>
                            <h3>{post.title}</h3>
                        </Link>
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
