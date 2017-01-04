import { combineReducers } from 'redux'
import { filter, slice, indexOf, pickBy } from 'lodash'

const id = (state=0, action) => {
    if (action.type === 'CREATE_NODE'){
        if (state !== action.parentId)
            return action.id
    }
    else
        return state
    }

const displayName = (state="", action) => {
    switch (action.type) {
        case 'CREATE_NODE':
            return "New Node"
            break
        case 'CHANGE_NODE_DISPLAY_NAME':
            return action.newDisplayName
            break
        default:
            return state
    }
}

const parentId = (state='Root', action) => {
    switch (action.type) {
        case 'ADD_PARENT_NODE':
            return action.parentId
            break
        default:
            return state
    }
}

const childIds = (state=[], action) => {
    switch (action.type) {
        case 'ADD_CHILD_NODE':
            return [...state, action.childId]
            break
        case 'REMOVE_CHILD_NODE':
            return filter(state, (childId) => childId !== action.childId)
            break
        case 'ADD_CHILD_NODE_AFTER_SIBLING':
            const newState = [
                ...slice(state, 0, indexOf(state, action.siblingId)),
                action.childId,
                ...slice(state, indexOf(state, action.siblingId)),
            ]
            return newState
        default:
            return state
    }
}

const collapsed = (state=false, action) => {
    switch (action.type) {
        case 'COLLAPSE_NODE':
            return !state
            break
        case 'ADD_CHILD_NODE':
            return false
            break
        default:
            return state
    }
}

const node = combineReducers({
    id,
    displayName,
    childIds,
    collapsed,
    parentId
})

const nodes = (state={}, action) => {
    const { id } = action
    if (typeof id === 'undefined') {
        return state
    }
    else {
        switch (action.type) {
            case 'DELETE_NODE':
                return pickBy(state, (node) => (node.id !== id))
                break
            default:
                return {
                    ...state,
                    [id]: node(state[id], action)
                }
        }
    }
}

export default nodes
