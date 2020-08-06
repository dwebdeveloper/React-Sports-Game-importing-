import React from 'react';
import Game from './components/game/Game.js';
import Lincoln from './assets/Abe_Lincoln.jpg';
import George from './assets/Its_George.jpg';
import KGeorge from './assets/king-george.jpg';
import KJames from './assets/king-james.jpg';

function App(props) {

  const kingJ = {
    name: "King James",
    logoSrc: KJames
  }

  const kingG = {
    name: "King George",
    logoSrc: KGeorge
  }

  const TheGeorge = {
    name: "George Washington",
    logoSrc: George
  }

  const Abe = {
    name: "Abraham Lincoln",
    logoSrc: Lincoln
  }

  return (
    <div className="App">
      <Game
        venue="The Kings Throne"
        homeTeam={kingJ}
        visitingTeam={kingG}
      />
      <Game
        venue="Fight Island"
        homeTeam={TheGeorge}
        visitingTeam={Abe}
      />
    </div>
  )
};

export default App;
