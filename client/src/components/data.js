import React from "react";

const data = [
  {
    name: "DOTA 2",
    src: "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg?t:1714502360",
    alt: "avatar_img",
    des: '"Best dog Game"',
    link: "https://www.dota2.com/",
  },
  {
    name: "Apex Legends™",
    src: "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t:1715104113",
    alt: "avatar_img",
    des: '"Best FPS Game"',
    link: "https://www.ea.com/games/apex-legends",
  },
  {
    name: "Stardew Valley",
    src: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg?t:1711128146",
    alt: "avatar_img",
    des: '"Best Farming Game"',
    link: "https://www.stardewvalley.net/",
  },
  {
    name: "Terraria",
    src: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t:1666290860",
    alt: "avatar_img",
    des: '"Best Grinding Game"',
    link: "https://terraria.org/",
  },
];

function getData() {
  return data;
}

const dataWithIds = data.map((item, index) => ({
  id: index + 1,
  ...item,
 }));
 
 console.log(dataWithIds);
 
 export default dataWithIds;
