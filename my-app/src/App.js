import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Container from "./components/Container";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    imageClicked: [],
    score: 0,
    highScore: 0
  };
 userClick = event =>{
const currentImage = event.target.alt;
const imageAleardyClicked =
this.state.imageClicked.indexOf(currentImage) > -1;

if(imageAleardyClicked){
    this.setState({
        friends: this.state.friends.sort(function(a, b) {
            return 0.5 - Math.random();
        }),
        imageClicked:[],
        score: 0
    });
alert("you lose.")
}


 else{
     this.setState(
         {
            friends: this.state.friends.sort(function(a, b) {
                return 0.5 - Math.random();
             }),
imageClicked: this.state.imageClicked.concat(currentImage),
score: this.state.score +1


 },
     )}


    };
//-----------------------------------------

  render() {
    return (
      <Container>
        
        {this.state.friends.map(friend => (
          <FriendCard
          userClick={this.userClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          
          />
        ))}
      </Container>
    );
  }
}

export default App;
