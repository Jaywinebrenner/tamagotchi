
import React from 'react';
import red from './img/red.png';
import inky from './img/inky.png';

function Footer() {

  return (
    <div className='footerDiv'>

    <div className='redWrapper'>
    <img className='redImage' src={red}/>

    </div>

    <style jsx> {`
      .redImage{
        height: 100px;
        animation: 2.5s infinite;
        animation-name: redSlide;
        animation-timing-function: linear;
      }

      @keyframes redSlide {
        from {
          margin-left: 100%;
        }
        to {
          margin-left: -30%;
        }
      }

      .footerDiv{
        height: 100px;
        position: fixed;
        bottom: 0;
        width: 100%;
      }

      .redWrapper{
        overflow:hidden;
      }


      `}</style>

      </div>

    )
  }

  export default Footer;
