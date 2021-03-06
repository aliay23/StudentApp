import React from 'react';

class HomePage extends React.Component {

  componentDidMount() {
    let div = document.getElementsByClassName('animation-container')[0];
    
    let width = window.innerWidth / 1550;
    div.style.transform = 'scale('+width+')';
  
  }

  render() {
    return (
      <div className="page-container homepage">
        <div className="animation-container">

          <div className="crudContainer">
            <div className="outerCircle"></div>
            <div className="innerCircle"></div>
            <label className="text2">App</label>
          </div>

          <div className="nameContainer">
            <label className="text1">Student</label>
            <div className="block"></div>
          </div>

          <div className="webContainer">
            <label className="text3">Connection</label>
          </div>

          <div className="appContainer">
            <label className="text4"></label>
          </div>

        </div>
      </div>
    );
  }
}

export default HomePage;
