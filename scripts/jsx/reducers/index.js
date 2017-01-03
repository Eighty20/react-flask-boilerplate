import { combineReducers } from 'redux'
import nodes from './nodes'
import rootNodes from './rootNodes'

const selectedNodes = (state=[], action) => {
    switch (action.type){
        case 'SELECT_NODE':
            if (action.multiSelect){
                if (state.includes(action.id)){
                    return state.filter(id => id !== action.id)
                }
                else{
                    return [
                        ...state,
                        action.id
                    ]
                }
                break
            }
            else {
                if (state.length === 1 && state[0] === action.id) {
                    return []
                }
                else {
                    return [action.id]
                }
            }
            break
        case 'EDIT_NODE_DISPLAY_NAME':
            return [action.id]
            break
        case 'CREATE_NODE':
            return [action.id]
            break
        case 'DELETE_NODE':
            return state.filter(id => id !== action.id)
            break
        default:
            return state
    }
}

const editMode = (state=false, action) => {
    switch (action.type) {
        case 'EDIT_NODE_DISPLAY_NAME':
            return action.edit
            break
        default:
            return state
    }
}

const treePlayground = combineReducers({
    nodes,
    selectedNodes,
    editMode
})

export const rootNode = {
    id: 'Root',
    displayName: 'Root',
    childIds: []
}

export default treePlayground
