import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Card from "./Card";
import data from "./data";

function createCard(card) {
  return (
      <Card
        key={card.id}
        name={card.name}
        src={card.src}
        alt={card.alt}
        des={card.des}
        link={card.link}
      />
  )
}

//JSX Code
function App() {



  return (
    <div>
      <Heading />
      <div class="card-container">
        {data.map(createCard)}
      </div>
      {/* <table>
        <tr>
            <th>
                <Card
                name="DOTA 2"
                src="https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg?t=1714502360"
                alt="avatar_img"
                des='"Best dog Game"'
                link="https://www.dota2.com/"
                />
            </th>
            <th>
                <Card
                name="Apex Legends™"
                src="https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1715104113"
                alt="avatar_img"
                des='"Best FPS Game"'
                link="https://www.ea.com/games/apex-legends"
                />
            </th>
            <th>
                <Card
                name="Stardew Valley"
                src="https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg?t=1711128146"
                alt="avatar_img"
                des='"Best Farming Game"'
                link="https://www.stardewvalley.net/"
                />
            </th>
            <th>
                <Card
                name="Terraria"
                src="https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1666290860"
                alt="avatar_img"
                des='"Best Grinding Game"'
                link="https://terraria.org/"
                />
            </th>
        </tr>
      </table> */}
      <Footer />
    </div>
  );
}

export default App;
