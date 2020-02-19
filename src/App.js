import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TamagotchiMain from './components/TamagotchiMain';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hunger: 10,
      sleep: 10,
      bored: 10,
      dead: false
    };

    this.feedThem = this.feedThem.bind(this);
    this.sleepThem = this.sleepThem.bind(this);
    this.entertainThem = this.entertainThem.bind(this);
    this.slowlyDie = this.slowlyDie.bind(this);
  }

  // Actually calls the timer
  componentDidMount() {
    this.heartMonitor();
  }

  // Checks to see if the Tamagotchi has died and stops the timer if so
  componentDidUpdate() {
    let testHunger = this.state.hunger;
    let testSleep = this.state.sleep;
    let testBored = this.state.bored;
    if (testHunger <= 0){
      console.log("There's nothing funny about starvation");
      clearInterval(this.deathTimer);
    } else if (testSleep <= 0) {
      console.log('you played World of Warcraft until you croaked');
      clearInterval(this.deathTimer);
    } else if (testBored <= 0) {
      console.log('you watched too much c-span');
      clearInterval(this.deathTimer);
    }
  }

  // Killing the Tamagotchi
  slowlyDie() {
    let newHunger = this.state.hunger - 1;
    let newSleep = this.state.sleep - 1;
    let newBored = this.state.bored - 1;
    this.setState({hunger: newHunger});
    this.setState({sleep: newSleep});
    this.setState({bored: newBored});
  }

  // Start timer
  heartMonitor() {
    this.deathTimer = setInterval(() =>
    this.slowlyDie(),
    1000
  );
  console.log(this);
}

// Saving the Tamagotchi / User Input functions
feedThem(){
  let newHunger = 100;
  this.setState({hunger: newHunger});
}
sleepThem(){
  let newSleep = 100;
  this.setState({sleep: newSleep});
}
entertainThem() {
  let newBored = 100;
  this.setState({bored: newBored});
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
    slowlyDie={this.slowlyDie}
    />
    </div>
  );
}
}

export default App;
