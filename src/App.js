import { useState } from "react";
import { Header, SubHeader, Background, Buttons } from "./components";
import Card from "./components/Card/Card";
import CardList from "./components/CardList/CardList";

const cards = [
  {
    name: "deadpool",
    img: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    price: "180$"
  },
  {
    name: "batman",
    img: "https://cdn.europosters.eu/image/1300/posters/the-batman-2022-i122125.jpg",
    price: "150$"
  },
  {
    name: "superman",
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg",
    price: "41$"
  }
]

function App() {
  const [background, setBackground] = useState(cards[0].img)
  const cardsComponents = cards.map((card) => <Card name={card.name} image={card.img} price={card.price} onClick={() => setBackground(card.img)} key={card.img} />)
  return (
    <>
      <Header />
      <SubHeader />
      <Background src={background} />
      <Buttons />
      <CardList cards={cardsComponents} />
    </>
  );
}

export default App;
