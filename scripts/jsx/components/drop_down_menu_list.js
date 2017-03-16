import React, { Component } from 'react';
import { Form, ControlLabel, FormControl, FormGroup, Grid } from 'react-bootstrap';
import DropDownMenu from './drop_down_menu';

class DropDownMenuList extends Component {

  render() {
    return (
      <Grid>
        <Form horizontal>
          <DropDownMenu label="What market are you talking to?" />
          <DropDownMenu label="What type of product are you promoting?" />
          <DropDownMenu label="What region are you looking at?" />
          <DropDownMenu label="What are your objectives?" />
        </Form>
      </Grid>

    );
  }
}

export default DropDownMenuList
