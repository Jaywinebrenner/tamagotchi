import React from 'react';

function Header() {
  return (
    <div className="Header">
    <style jsx>{`

      @import url('https://fonts.googleapis.com/css?family=Lacquer&display=swap');

      .Header {
        text-align: center;
        // background-color: rgb(175,50,50);
        font-family: 'Lacquer', sans-serif;
        font-size: 3rem;
        color: rgb(252, 234, 63);
        text-shadow: 2px 2px black;
      }


      `}</style>
      <h1>Pac-man-a-gatchi</h1>
      </div>
    );
  }

  export default Header;
