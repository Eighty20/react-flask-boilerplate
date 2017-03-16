import React, { Component } from 'react';
import { ControlLabel, FormControl, FormGroup, option, Col } from 'react-bootstrap';

class DropDownMenu extends Component {

  constructor(){

        super();
    }

  render() {

    return (
        <FormGroup>
          <Col componentClass={ControlLabel} sm={4}>
            {this.props.label}
          </Col>
          <Col sm={8}>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </Col>
        </FormGroup>
    );
  }
}

export default DropDownMenu
