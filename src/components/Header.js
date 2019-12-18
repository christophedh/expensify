import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            <NavLink to="/" activeClassName="is-active" exact>
              Go home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Add" activeClassName="is-active" exact>
                Add
            </NavLink>
          </li>
          <li>
            <NavLink to="/help" activeClassName="is-active" exact>
              Help
            </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}
