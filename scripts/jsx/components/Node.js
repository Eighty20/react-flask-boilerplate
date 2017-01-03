import React, { Component } from 'react'
import { Label, Button, Glyphicon, Badge } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actions from '../actions'
import EditTextInput from './EditTextInput'
import { each, flow } from 'lodash'
import { DragSource } from 'react-dnd'
import { dndTypes } from '../constants'

class Node extends Component {

    handleSubmit(newDisplayName) {
        const { id, changeNodeDisplayName } = this.props
        changeNodeDisplayName(id, newDisplayName)
    }

    handleCancel() {
        const { id, editNodeDisplayName } = this.props
        editNodeDisplayName(id, false)
    }

    handleEdit() {
        const { id, editNodeDisplayName } = this.props
        editNodeDisplayName(id, true)
    }

    handleSelect(e) {
        const { id, selectNode } = this.props
        selectNode(id, e.ctrlKey)
    }

    handleAddChild() {
        const { id, createNode, addChildNode, addParentNode } = this.props
        const childId = createNode().id
        addChildNode(id, childId)
        addParentNode(childId, id)
    }

    handleCollapse() {
        const { id, collapseNode } = this.props
        collapseNode(id)
    }

    handleRemoveNode() {
        const { id, parentId, removeChildNode, deleteNode } = this.props
        removeChildNode(parentId, id)
        deleteNode(id)
    }

    handleAppendSelectedAsChildren() {
        const { id, selectedNodes, nodes, removeChildNode, addChildNode, addParentNode } = this.props
        each(selectedNodes, (selectedNodeId) => {
            const selectedNode = nodes[selectedNodeId]
            const selectedParentId = selectedNode.parentId
            removeChildNode(selectedParentId, selectedNodeId)
            addChildNode(id, selectedNodeId)
            addParentNode(selectedNodeId, id)
        })
    }

    handleAppendSelectedBelow() {
        const { id, parentId, selectedNodes, nodes, removeChildNode, addChildNodeAfterSibling, addParentNode } = this.props
        each(selectedNodes, (selectedNodeId) => {
            const selectedNode = nodes[selectedNodeId]
            const selectedParentId = selectedNode.parentId
            removeChildNode(selectedParentId, selectedNodeId)
            addChildNodeAfterSibling(parentId, selectedNodeId, id)
            addParentNode(selectedNodeId, parentId)
        })

    }

    render() {
        const { nodes, id, selected, editable, targetable, childable, ancestorSelected } = this.props
        const { displayName, childIds, collapsed } = nodes[id]
        const { connectDragSource, connectDragPreview } = this.props
        return connectDragPreview(
            <li>

                { editable ?
                    <EditTextInput
                        initialValue={displayName}
                        submitAction={(newDisplayName) => this.handleSubmit(newDisplayName)}
                        cancelAction={() => this.handleCancel()} /> :
                    <h4>
                        { childIds.length > 0 ?
                            <Glyphicon onClick={() => this.handleCollapse()} glyph={collapsed ? 'triangle-right' : 'triangle-bottom'}/> :
                            <Glyphicon glyph='minus'/>
                        }
                        {" "}
                        {connectDragSource(<span><Glyphicon glyph="adjust" /></span>)}
                        {" "}
                        <Label
                            bsStyle={selected ? "primary" : "default"}
                            onDoubleClick={() => this.handleEdit()}
                            onClick={(e) => this.handleSelect(e)}
                        >
                            { displayName }
                        </Label>
                        {" "}

                        { childable && (
                            <span>
                                <Label onClick={() => this.handleRemoveNode()}><Glyphicon glyph='remove'/></Label>
                                {" "}
                                <Label onClick={() => this.handleAddChild()}><Glyphicon glyph='plus'/></Label>
                            </span>
                        )}
                        { targetable && (
                            <span>
                                {" "}
                                <Label onClick={() => this.handleAppendSelectedAsChildren()}><Glyphicon glyph='arrow-down'/></Label>
                                {" "}
                                <Label onClick={() => this.handleAppendSelectedBelow()}><Glyphicon glyph='arrow-right'/></Label>
                            </span>
                        )}
                    </h4>
                }
                { (childIds.length > 0 && !collapsed) &&
                    <ul>
                        { childIds.map((childId) => (
                            <div key={childId}>
                                <ConnectedNode id={childId} parentId={id} ancestorSelected={selected || ancestorSelected}/>
                            </div>
                        )) }
                    </ul>
                }
            </li>
        )
    }

}

const mapStateToProps = ({ nodes, selectedNodes, editMode }, ownProps) => {
    const selected = selectedNodes.includes(ownProps.id)
    return {
        nodes,
        selected,
        editable: (selected && editMode),
        targetable: ((selectedNodes.length > 0) && !selected && !editMode && !ownProps.ancestorSelected),
        childable: !editMode,
        selectedNodes
    }
}

const spec = {
    beginDrag: (props, monitor, component) => ({ id: props.id }),
}

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
})

const ConnectedNode = flow(
    connect(mapStateToProps, actions),
    DragSource(dndTypes.node, spec, collect)
)(Node)

export default ConnectedNode
