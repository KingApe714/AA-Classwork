

export const allTodos = (state) => { //state === { todos: {}, steps: {} }
    const selectTodos = Object.values(state.todos);
    return selectTodos;
}

export const stepsByTodoID = (state, todoID) => { //needs to be tested
    const selectSteps = [];
    for (let id in state) {
        if (id === todoID) {
            selectSteps.push(state[id])
        }
    }
    return selectSteps;
}