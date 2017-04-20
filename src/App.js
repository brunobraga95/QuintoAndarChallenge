import React, { Component } from 'react';
import Logo from './components/Logo/Logo.js'
import TopRightMenu from './components/TopRightMenu/TopRightMenu.js'
import HeaderSearchContainer from './components/HeaderSearchContainer/HeaderSearchContainer.js'
import Footer from './components/Footer/Footer.js'
import QuintoAndarNaMidia from './components/QuintoAndarNaMidia/QuintoAndarNaMidia.js'
import SubHeader from './components/SubHeader/SubHeader.js'
import MainContent from './components/MainContent/MainContent.js'


import './styles/header.css';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="index">
        <div className="header">
          <div className="header-top-menu-wrapper">
            <div className="header-top-menu">
              <Logo styles={{position: 'abolute', width: '170px', height: '45px'}}/>
              <TopRightMenu />
            </div>
           </div>
          <HeaderSearchContainer />
        </div>
        <SubHeader />
        <MainContent />
        <QuintoAndarNaMidia />
        <Footer/>
      </div>
    );
  }
}

export default App;
