import React, { Component } from 'react';
import { Form, ControlLabel, FormControl,
  FormGroup, SplitButton, MenuItem } from 'react-bootstrap';

class DropDownMenu extends Component {

  render() {

    return (
      <div className="container">
        <div className="row">
          <Form inline>
            <FormGroup>
              <ControlLabel>What market are you talking to?</ControlLabel>
              {'  '}
              <SplitButton className="drop-down-menu" bsStyle ="default" bsSize="xs" title={this.props.num} id="dropdown-basic-button-1">
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>Active Item</MenuItem>
              </SplitButton>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default DropDownMenu
