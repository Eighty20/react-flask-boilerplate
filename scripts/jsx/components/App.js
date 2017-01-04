import React, { Component } from 'react'
import { Button, Panel, Grid, Row, Col, Form, InputGroup, FormControl, Glyphicon } from 'react-bootstrap'
import * as actions from '../actions'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import Node from './Node'
import Tree from '../containers/Tree'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class App extends Component {
    render = () => (
        <Grid>
            <Row>
                <Col>
                    <div className='panel panel-default'>
                        <div className='panel-heading'>
                            Tree Playground
                        </div>
                        <div className='panel-body'>
                            <SearchBar
                                onChangeAction={this.props.applySearchFilter}
                                onSubmitAction={this.props.applySearchFilter}
                                onCancelAction={this.props.applySearchFilter}
                            />
                            <Node id='Root'/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    )
}

export default connect(null, actions)(DragDropContext(HTML5Backend)(App))
