import React from 'react';
import PropTypes from 'prop-types';


function Death(props) {



  return (
    <div className="deadDisplay">
    <style jsx>{`
      .deadDisplay {
        text-align: center;
      }
      .deadText {
        font-size: 8rem;
        font-weight: bold;
        color: #660000;
        text-shadow: 4px 4px 3px rgb(75, 0, 0);

      }



      `}</style>
        <h1 className='deadText'>YOU DEAD!</h1>
        <h3>{props.message}</h3>
        <a href='./'>Play again</a>
    </div>
  )
}

Death.propTypes = {
  message: PropTypes.string
}

export default Death;
