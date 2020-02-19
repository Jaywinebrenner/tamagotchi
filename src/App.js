import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TamagotchiMain from './components/TamagotchiMain';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.feedThem = this.feedThem.bind(this);
    this.sleepThem = this.sleepThem.bind(this);
    this.entertainThem = this.entertainThem.bind(this);
  }

  feedThem(){
    console.log('fed');
  }
  sleepThem(){
    console.log('sleep');
  }
  entertainThem() {
    console.log('entertained');
  }

  render(){
    return (
      <div>
        <TamagotchiMain
          name="Jim John"
          hunger={10}
          sleep={10}
          bored={10}
          feedThem={this.feedThem}
          sleepThem={this.sleepThem}
          entertainThem={this.entertainThem}
        />
      </div>
    );
  }
}

export default App;
