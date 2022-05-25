import React from "react";
import { TitleSvg } from "./images/titlesvg.jsx";
import SubTitulo from "./components/subtitle.js";
import Codebox1 from "./components/codebox1";
import Codebox2 from "./components/codebox2";
import { Card, Button, CardCarousel } from "cyberfuture";
import styled from "styled-components";
import "./App.css";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5%;
  position: relative;
  margin: 0px auto;
`;

function App() {
  return (
    <>
      <div className="stars">
        <div className="twinkling">
          <section id="FirstSection">
            <div className="title">
              <TitleSvg />
            </div>
            <div className="below-title">
              <SubTitulo />
              <Codebox1 />
            </div>
          </section>
          <section id="SecondSection">
            <div className="paragraph">
              <h1>Primary buttons</h1>
              <h2>You can use CyberFuture`s custom styles for give some action to
                your boring components.</h2>
            </div>
            <div className="paragraph">
              <Flex>
                <Button
                  outline
                  text="BUTTON"
                  variant="Matrix"
                  color="matrix"
                />
                <Button
                  text="BUTTON"
                  variant="OutlinedCyberRose"
                  type="outlined"
                />
                <Button text="BUTTON" variant="Rose" />
                <Button text="BUTTON" variant="Punk" />
                <Button text="BUTTON" variant="Gold" />
                <Button text="BUTTON" variant="OutlinedCyberSly" />
              </Flex>
            </div>
            <Codebox2 />
          </section>
          <section id="ThirdSection">
            <div className="paragraph">
              <h1>Cards</h1>
              <h2>
                Below there is some basic cards. Cards have no fixed width, so
                they'll fill the full width of its parent element. This can be
                easily customized with our sizing options.
              </h2>
            </div>
            <Flex>
              <Card
                variant="matrix"
                title="Card Title"
                body="some content"
                end={<Button text="button" variant="Punk" />}
              ></Card>
              <CardCarousel
                variant="rose"
                title="Card Title"
                body="some content"
                end={<Button text="button" variant="Rose" />}
              ></CardCarousel>
              <Card
                variant="matrix"
                title="Card Title"
                body={<div>content</div>}
                end={<Button text="button" variant="Matrix" />}
              ></Card>
            </Flex>
            <Codebox2 />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
