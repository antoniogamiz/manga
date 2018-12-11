import React, { Component } from 'react';
import './App.css';

import { items, genres, portraits, popIcon, latIcon, genIcon } from './randomData'
import { logoFont, logo, userIcon } from './randomData'

// Components
import NavBar from './components/NavBar/NavBar';
import NavBarMenuEntry from './components/NavBarMenuEntry/NavBarMenuEntry'
import SearchBar from './components/SearchBar/SearchBar'
import CenterWrapper  from './components/containers/CenterWrapper/CenterWrapper'
import UserProfile from './components/UserProfile/UserProfile'
import SectionContainer from './components/SectionContainer/SectionContainer'
import GenreList from './components/GenreList/GenreList'
import PortraitList from './components/PortraitList/PortraitList'
import DetailedPortraitList from './components/DetailedPortraitList/DetailedPortraitList'

let menuEntries = [ 
  NavBarMenuEntry( { url: "#", text: "Home" } ),
  NavBarMenuEntry( { url: "#", text: "Latest manga" } ),
  NavBarMenuEntry( { url: "#", text: "Completed manga" } ),
  <UserProfile profileImg={userIcon}/>

];

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar imgLogo={logo} imgLogoFont={logoFont} menuEntries={menuEntries}/>
        <div className="MarginWrapper-20">
          <CenterWrapper width="90%">
            <SearchBar/>
          </CenterWrapper>
          <div className="main-container">
            <div className="popular-manga-container-item">
              <SectionContainer icon={popIcon} title={"Popular Manga"} bg={"rgb(140, 132, 185)"}>
                <PortraitList portraits={portraits}/>
              </SectionContainer>
            </div>
            <div className="latest-manga-container-item">        
              <SectionContainer icon={latIcon} title={"Latest Manga"} bg={"red"}>
                <DetailedPortraitList items={items}/>
              </SectionContainer>
            </div>
            <div className="genres-manga-container-item">            
              <SectionContainer icon={genIcon} title={"Genres"} bg={"#16a085"}>          
                <GenreList items={genres}/>
              </SectionContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
