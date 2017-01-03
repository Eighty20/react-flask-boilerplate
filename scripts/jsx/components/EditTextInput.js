import React, { Component, PropTypes } from 'react'
import { Form, InputGroup, FormGroup, FormControl, Glyphicon} from 'react-bootstrap'
import { HotKeys } from 'react-hotkeys'

export default class EditTextInput extends Component {
    constructor(props) {
        super(props)
        this.state = {value: props.initialValue}
        this.keyMap = {
            'submit': 'enter',
            'cancel': 'esc'
        }
        this.handlers = {
            'submit': (event) => {
                this.handleSubmit()
            },
            'cancel': (event) => {
                this.props.cancelAction()
            }
        }
    }

    handleChangeValue(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit() {
        this.props.submitAction(this.state.value)
        this.props.cancelAction()
    }

    render() {
        return (
            <HotKeys keyMap={this.keyMap} handlers={this.handlers}>
                <Form inline>
                    <FormGroup bsSize='small'>
                        <FormControl
                            type='text'
                            value={this.state.value}
                            onChange={(e) => this.handleChangeValue(e)}
                            onBlur={this.props.cancelAction}
                            bsSize={"small"}
                            autoFocus
                        />
                    </FormGroup>
                </Form>
            </HotKeys>

        )
    }
}
