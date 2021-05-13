import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import tachLogo from './tachyons-logo.jpg';

//
export default class ProfileIcon extends React.Component {
  constructor() {
    super();
    this.state = {
      dropDownOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      dropDownOpen: !prevState.dropDownOpen
    }));
  }

  handleSignout() {
    const { history } = this.props;
    console.log(this.props);
    console.log(history);
    console.log('signout');
  }

  render() {
    const { dropDownOpen } = this.state;
    const { onRouteChange, isSignedIn, toggleModal } = this.props;

    return (
      <div className="pa4 tc">
        <Dropdown isOpen={dropDownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={dropDownOpen}
          >
            <img src={tachLogo} className="br-100 ba h3 w3 dib" alt="avatar" />
          </DropdownToggle>
          <DropdownMenu
            className="b--transparent shadow-5"
            style={{
              marginTop: '20px',
              backgroundColor: 'rgba(255,255,255,0.5)'
            }}
            right
          >
            <DropdownItem onClick={toggleModal}>View Profile</DropdownItem>

            <DropdownItem onClick={() => onRouteChange('signout')}>
              Signout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
