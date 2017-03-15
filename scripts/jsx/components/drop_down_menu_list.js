import React, { Component } from 'react';
import DropDownMenu from './components/drop_down_menu'

class DropDownMenuList extends Component {

  render() {
    return (
      <div>
          <DropDownMenu num = 1 />
          <DropDownMenu num = 2 />
          <DropDownMenu num = 3 />
          <DropDownMenu num = 4 />
      </div>
    );
  }
}

export default DropDownMenuList
