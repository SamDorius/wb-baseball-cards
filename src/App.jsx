import playerData from './playerData'
import { useState } from 'react';


function BaseballCard(props) {

    let [showPicture, setShowPicture] = useState(true)

    function toggleCard ()
    {
      setShowPicture(!showPicture)
    }

    if (showPicture === true)
    {
      return (
        <div className="card" onClick={toggleCard}>
          <h2>{props.name}</h2>
          <img src={props.imgUrl} alt={props.name}/>
        </div>
      );
    }
    else
    {
      let statsDisplay = Object.entries(props.stats).map(([statName, statValue]) => (
        <p key={statName}>
          {statName}: {statValue}
        </p>
      ));

      return (
        <div className='card' onClick={toggleCard}>
          <h2>{props.name}</h2>
          <p>Team: {props.team}</p>
          <p>Positon: {props.position}</p>
          <div>{statsDisplay}</div>
        </div>
      );
    }
}

function App() {

  let cards = playerData.map((player) => 
  <BaseballCard 
    name = {player.name}
    team = {player.team}
    position = {player.position}
    stats = {player.stats}
    imgUrl = {player.imgUrl}
    key = {player.cardId}
  />);

  return <>{cards}</>;
}

export default App;
