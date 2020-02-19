import React from 'react';
import PropTypes from 'prop-types';
import TamagotchiControl from './TamagotchiControl';

function TamagotchiMain(props) {

  function tempSlowlyDie() {
    props.slowlyDie();
  }

  return (
    <div className="tamagotchiMain">
    <style jsx>{`
      .tamagotchiMain {
        border: 2px solid black;
        padding: 20px;
        width: 750px;
        margin: 0 auto;
      }
      .statusDisplay {
        display: flex;
        justify-content: space-evenly;
      }
      .pacman {
        width: 0;
        height: 0;
        border-right: 40px solid transparent;
        border-top: 40px solid #ffde00;
        border-left: 40px solid #ffde00;
        border-bottom: 40px solid #ffde00;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
      }
      `}</style>
      <h3>{props.name}</h3>
      <div className="statusDisplay">
        <p>Hunger: {props.hunger}</p>
        <p>Sleep: {props.sleep}</p>
        <p>Bored: {props.bored}</p>
      </div>
      <TamagotchiControl
      feedThem={props.feedThem}
      sleepThem={props.sleepThem}
      entertainThem={props.entertainThem}
      />
      <div className="pacman"></div>
      <button onClick={tempSlowlyDie}>slowly die</button>
    </div>
  )
}

TamagotchiMain.propTypes = {
  name: PropTypes.string,
  hunger: PropTypes.number,
  sleep: PropTypes.number,
  bored: PropTypes.number,

  feedThem: PropTypes.func,
  sleepThem: PropTypes.func,
  entertainThem: PropTypes.func,

  slowlyDie: PropTypes.func,

}

export default TamagotchiMain;
