const initState = {
    posts: [
        {id: '101', title: 'Do the homework'},
        {id: '102', title: 'Swimming day'},
        {id: '103', title: 'Call John'},
    ]
};

const combineReducers = (state = initState, action) => {

    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id; // this is the logic where a single post is deleted
        });
        return {
            // return the updated state
            ...state,
            posts: newPosts
        }
    }

    return state;
};

export default combineReducers;
