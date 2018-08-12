import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
// import './css/css/index.css';
import date from './getDate';

const slideIn = keyframes`   
    from{left: -25%;} 
    to{left: 0;}
`

const NavDrawerDiv = styled.div`

* {
  margin: 0;
  padding: 0; }

.Nav-Drawer {
  top: 0;
  left: 0;
  z-index: 1;
  width: 150%;
  height: 100%;
  animation: ${slideIn} 0.3s ease;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5); }

.Nav-Drawer-Background {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25); }

.Nav-Drawer-Modal {
  top: 0;
  left: 0;
  z-index: 1;
  width: 20%;
  height: 100%;
  background-color: #FFFFFF; }
  .Nav-Drawer-Modal .Nav-Drawer-Modal-Header {
    top: 0;
    left: 0;
    height: 360px;
    border: none;
    background: linear-gradient(45deg, #2196F3, #1976D2); }
    .Nav-Drawer-Modal .Nav-Drawer-Modal-Header h1 {
      padding-top: 95px;
      padding-left: 50px;
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      font-size: 2.5em;
      color: #FFFFFF; }
    .Nav-Drawer-Modal .Nav-Drawer-Modal-Header h2 {
      font-size: 1.875em;
      padding-left: 50px;
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      color: #FFFFFF; }
    .Nav-Drawer-Modal .Nav-Drawer-Modal-Header button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      z-index: 5; }
    .Nav-Drawer-Modal .Nav-Drawer-Modal-Header i {
      font-size: 2.5925925925925926em; }
  .Nav-Drawer-Modal .Nav-Drawer-Modal-Content ul li {
    display: flex;
    align-items: center;
    margin-top: 25px;
    margin-left: 25px;
    cursor: pointer; }
    .Nav-Drawer-Modal .Nav-Drawer-Modal-Content ul li * {
      display: inline;
      font-size: 50px;
      color: #212121; }
    .Nav-Drawer-Modal .Nav-Drawer-Modal-Content ul li p {
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      font-size: 30px;
      padding-left: 10px;
      color: #757575; }

`

class NavDrawer extends Component {
    render() {
        return ( 
            // <div className="Nav-Drawer">
            <NavDrawerDiv className="Nav-Drawer">
                <div className="Nav-Drawer-Modal">
                    <div className="Nav-Drawer-Modal-Header">
                        <button id="Close-Nav-Drawer" onClick={this.props.handleClick}>
                            <i className="material-icons">clear</i>
                        </button>                        
                        <h1>{date()}</h1>
                        <h2>3 Tasks</h2>
                    </div>
                    <div className="Nav-Drawer-Modal-Content">
                        <ul>
                            <li>
                                <i className="material-icons">apps</i>
                                <p>My Timetable</p>
                            </li>
                            <li>
                                <i className="material-icons">done</i>
                                <p>Finished Tasks</p>
                            </li>
                            <li>
                                <i className="material-icons">stars</i>
                                <p>Achievments</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </NavDrawerDiv>
        );
    }
}



export default NavDrawer;
