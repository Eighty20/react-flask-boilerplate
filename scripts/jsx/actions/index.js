import { uniqueId } from 'lodash'

export const createNode = (id, parentId='Root') => ({
    type: 'CREATE_NODE',
    id: uniqueId('Node_')
})

export const deleteNode = (id) => ({
    type: 'DELETE_NODE',
    id
})

export const addChildNode = (id, childId) => ({
    type: 'ADD_CHILD_NODE',
    id,
    childId
})

export const addParentNode = (id, parentId) => ({
    type: 'ADD_PARENT_NODE',
    id,
    parentId
})

export const addChildNodeAfterSibling = (id, childId, siblingId) => ({
    type: 'ADD_CHILD_NODE_AFTER_SIBLING',
    id,
    childId,
    siblingId,
})

export const removeChildNode = (id, childId) => ({
    type: 'REMOVE_CHILD_NODE',
    id,
    childId
})

export const changeNodeDisplayName = (id, newDisplayName) => ({
    type: 'CHANGE_NODE_DISPLAY_NAME',
    id,
    newDisplayName
})

export const editNodeDisplayName = (id, edit) => ({
    type: 'EDIT_NODE_DISPLAY_NAME',
    id,
    edit
})

export const selectNode = (id, multiSelect) => ({
    type: 'SELECT_NODE',
    id,
    multiSelect
})

export const collapseNode = (id) => ({
    type: 'COLLAPSE_NODE',
    id
})
