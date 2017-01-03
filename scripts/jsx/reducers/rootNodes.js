const rootNodes = (state=[], action) => {
    switch (action.type) {
        case 'CREATE_NODE':
            return [
                ...state,
                action.id
            ]
            break
        default:
            return state
    }
}

export default rootNodes
