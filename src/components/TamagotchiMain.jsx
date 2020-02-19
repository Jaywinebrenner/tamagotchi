import React from 'react';
import PropTypes from 'prop-types';
import TamagotchiControl from './TamagotchiControl';

function TamagotchiMain(props) {
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
  entertainThem: PropTypes.func
}

export default TamagotchiMain;
