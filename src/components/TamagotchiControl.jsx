import React from 'react';
import PropTypes from 'prop-types';

function TamagotchiControl(props) {

  function feedThem(){
    props.feedThem();
  }
  function sleepThem(){
    props.sleepThem();
  }
  const entertainThem = () => {
    props.entertainThem();
  }

  return (
    <div className="controlsDisplay">
    <style jsx>{`
      .controlsDisplay {
        display: flex;
        justify-content: space-evenly;
      }
      `}</style>
    <button onClick={feedThem}>Feed</button>
    <button onClick={sleepThem}>Allow Sleep</button>
    <button onClick={entertainThem}>Entertain</button>
    </div>
  )
}

TamagotchiControl.propTypes = {
  feedThem: PropTypes.func,
  sleepThem: PropTypes.func,
  entertainThem: PropTypes.func
}

export default TamagotchiControl;
