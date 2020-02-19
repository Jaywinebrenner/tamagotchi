import React from 'react';
import PropTypes from 'prop-types';
import TamagotchiControl from './TamagotchiControl';

function TamagotchiMain(props) {

  function tempHungry() {
    props.makeHungry();
  }
  function tempSleepy() {
    props.makeSleepy();
  }
  function tempBored() {
    props.makeBored();
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
      <button onClick={tempHungry}>hunger</button>
      <button onClick={tempSleepy}>sleep</button>
      <button onClick={tempBored}>bored</button>
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

  makeHungry: PropTypes.func,
  makeSleepy: PropTypes.func,
  makeBored: PropTypes.func
}

export default TamagotchiMain;
