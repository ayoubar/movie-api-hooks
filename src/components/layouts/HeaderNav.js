import React, { Component } from 'react';
import SideNav from './SideNav';
export class HeaderNav extends Component {
  render() {
    return (
      <header>
        <SideNav />
        <nav class="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav">
          <div class="float-left">
            <a
              href="#"
              data-activates="slide-out"
              class="button-collapse black-text"
            >
              <i class="fas fa-bars"></i>
            </a>
          </div>
          <div class="breadcrumb-dn mr-auto">
            <p>Material Design for Bootstrap</p>
          </div>
          <ul class="nav navbar-nav nav-flex-icons ml-auto">
            <li class="nav-item">
              <a class="nav-link">
                <i class="fas fa-envelope"></i>{' '}
                <span class="clearfix d-none d-sm-inline-block">Contact</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <i class="fas fa-comments"></i>{' '}
                <span class="clearfix d-none d-sm-inline-block">Support</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <i class="fas fa-user"></i>{' '}
                <span class="clearfix d-none d-sm-inline-block">Account</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderNav;
