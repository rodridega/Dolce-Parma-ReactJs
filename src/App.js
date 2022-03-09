import React, { useState, useEffect } from "react";
import "./index.css";
import { MyMenu } from "./components/MyMenu";
import { Title } from "./components/Title";
import { Card } from "./components/Card";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

function App() {
  const [cards, setCards] = useState([]);
  const [prodCarrito, setProdCarrito] = useState([]);
  let cantidad;

  const getProducts = () => {
    const url = "https://docs.google.com/spreadsheets/d/1INp2XAuBS-vxzYv-qIlK1J5-SAU7-H2_p_FHl2quz94/gviz/tq?";
    fetch(url)
      .then((res) => res.text())
      .then((rep) => {
        const data = JSON.parse(rep.substr(47).slice(0, -2));
        const objetos = data.table.rows.map(({ c }) => ({
          title: c[0]?.v,
          price: c[1]?.v,
          description: c[2]?.v,
          image: c[3]?.v,
          id: c[4]?.v,
        }));
        setCards(objetos);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <MyMenu prodCarrito={prodCarrito} setProdCarrito={setProdCarrito} />
      <Hero/>
      <Title  />
      <Container maxW="90rem" centerContent id='titulo'>
        <SimpleGrid columns={[1, 2, 3, 4]}>
          {cards.map((prod) => {
            return (
              <Card
                prod={prod}
                key={prod.id}
                setProdCarrito={setProdCarrito}
                prodCarrito={prodCarrito}
                cantidad={cantidad}
              />
            );
          })}
        </SimpleGrid>
      </Container>
      
      <Footer/>
    </div>
  );
}

export default App;
