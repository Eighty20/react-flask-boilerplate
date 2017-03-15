import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class DropDownMenu extends Component {
    render() {
        return (
            <div>
                What Market are you talking to?
                <DropdownButton bsSize="xsmall" title={this.props.num} id="dropdown-basic-button-1">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3" active>Active Item</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
            </div>
        );
    }
}

export default DropDownMenu
