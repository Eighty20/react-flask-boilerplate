import React, { Component, PropTypes } from 'react'
import {Form, InputGroup, FormControl, Glyphicon } from 'react-bootstrap'
import { HotKeys } from 'react-hotkeys'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { value: ""}
        this.keyMap = {
            'submit': 'enter',
            'cancel': 'esc'
        }
        this.handlers = {
            'submit': (event) => {
                this.handleSubmit()
            },
            'cancel': (event) => {
                this.handleCancel()
            }
        }
    }

    handleChangeValue(e) {
        const { onChangeAction } = this.props
        const newValue = e.target.value
        this.setState({value: newValue})
        if (typeof onChangeAction !== 'undefined') {
            onChangeAction(newValue)
        }
    }

    handleSubmit(e) {
        const { onSubmitAction } = this.props
        if (typeof onSubmitAction !== 'undefined') {
            onSubmitAction(this.state.value)
        }
    }

    handleCancel() {
        const { onCancelAction } = this.props
        this.setState({value: ""})
        if (typeof onCancelAction !== 'undefined') {
            onCancelAction(this.state.value)
        }
    }

    render() {
        return (
            <HotKeys keyMap={this.keyMap} handlers={this.handlers}>
                <InputGroup>
                    <FormControl
                        type='text'
                        value={this.state.value}
                        onChange={(e) => this.handleChangeValue(e)}
                    />
                    <InputGroup.Addon onClick={() => this.handleSubmit()}>
                        <Glyphicon glyph='search'/>
                    </InputGroup.Addon>
                </InputGroup>
            </HotKeys>
        )
    }
}

SearchBar.propTypes = {
    onChangeAction: PropTypes.func,
    onSubmitAction: PropTypes.func,
    onCancelAction: PropTypes.func
}

export default SearchBar
