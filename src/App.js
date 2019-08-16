import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


class App extends Component {


  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // eslint-disable-next-line array-callback-return
    console.log("HELLO?" + id);
    const friends = this.state.friends.map(friend => { 
      if (friend.id === id) {
        if (!friend.clicked) {
      friend.clicked = true;
      return friend;
        }
        else {
            friend.double = true;
            return friend
          }
      }
    else {
      return friend;
    }
    });

    const test = this.state.friends.filter(friend => friend.double !== true);

    const help = this.state.friends.map(friend => {
      console.log(JSON.stringify(friend));
      return friend;
    });
    
    if (test.length === friends.length) {
      // Set this.state.friends equal to the new friends array
      this.setState({ friends });
      this.render();
    }
    else {
      const friends = this.state.friends.map(friend => {
        friend.clicked = false;
        friend.double = false;
        return friend;
      });
      this.setState({ friends });
      this.render();
    }

  };

  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    const shuffledArray = this.shuffleArray(this.state.friends);
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {shuffledArray.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            clicked={friend.clicked}
            double={friend.double}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
