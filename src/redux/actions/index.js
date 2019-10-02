export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id: id
    };
};

export function addTodo(todo) {
    return {
        type: "ADD_TODO",
        todo: todo
    };
}


