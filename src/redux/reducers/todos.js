// const initState = {
//     posts: [
//         {id: '101', title: 'Do the homework'},
//         {id: '102', title: 'Swimming day'},
//         {id: '103', title: 'Call John'},
//     ]
// };

export default function todos(state = [], action) {

    switch (action.type) {

        case 'ADD_TODO':
            return [...state.posts, {...action.posts.todo}];

        case 'DELETE_TODO':
            let newPosts = state.posts.filter(post => {
                return action.id !== post.id; // this is the logic where a single post is deleted
            });
            return {
                // return the updated state
                ...state,
                posts: newPosts
            };

        default:
            return state
    }
};


