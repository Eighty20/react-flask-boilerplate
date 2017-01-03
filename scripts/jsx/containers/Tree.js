import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Node from '../components/Node'

const Tree = ({ rootNodes, nodes, editNodeDisplayName, changeNodeDisplayName }) => (
    <ul>
        { rootNodes.map((rootNodeId) => (
            <div key={rootNodeId}>
                <Node id = {rootNodeId}/>
            </div>
        ))}
    </ul>
)

const mapStateToProps = ({ rootNodes }) => ({
    rootNodes
})

export default connect(mapStateToProps, actions)(Tree)
