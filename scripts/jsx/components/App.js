import React, { Component } from 'react'
import { Button, Panel, Grid, Row, Col } from 'react-bootstrap'
import * as actions from '../actions'
import { connect } from 'react-redux'
import Node from './Node'
import Tree from '../containers/Tree'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class App extends Component {
    render = () => (
        <Grid>
            <Row>
                <Col>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Tree Playground
                        </div>
                        <div className="panel-body">
                            <Node id='Root'/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
            )
}

export default connect(null, actions)(DragDropContext(HTML5Backend)(App))
