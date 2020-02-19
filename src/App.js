import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TamagotchiMain from './components/TamagotchiMain';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hunger: 10,
      sleep: 10,
      bored: 10
    };

    this.feedThem = this.feedThem.bind(this);
    this.sleepThem = this.sleepThem.bind(this);
    this.entertainThem = this.entertainThem.bind(this);

    this.makeHungry = this.makeHungry.bind(this);
    this.makeSleepy = this.makeSleepy.bind(this);
    this.makeBored = this.makeBored.bind(this);
  }

  // Saving the Tamagotchi
  feedThem(){
    console.log('fed');
  }
  sleepThem(){
    console.log('sleep');
  }
  entertainThem() {
    console.log('entertained');
  }

  // Killing the Tamagotchi
  makeHungry() {
    let newHunger = this.state.hunger - 1;
    this.setState({hunger: newHunger});
  }
  makeSleepy() {
    let newHunger = this.state.sleep - 1;
    this.setState({sleep: newHunger});
  }
  makeBored() {
    let newHunger = this.state.bored - 1;
    this.setState({bored: newHunger});
  }

  render(){
    return (
      <div>
        <TamagotchiMain
          name="Jim John"
          hunger={this.state.hunger}
          sleep={this.state.sleep}
          bored={this.state.bored}
          feedThem={this.feedThem}
          sleepThem={this.sleepThem}
          entertainThem={this.entertainThem}
          makeHungry={this.makeHungry}
          makeSleepy={this.makeSleepy}
          makeBored={this.makeBored}
        />
      </div>
    );
  }
}

export default App;
