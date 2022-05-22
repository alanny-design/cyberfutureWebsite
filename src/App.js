import React from "react";
import SubTitulo from "./subtitle.js";
import "./App.css";
import PrimaryButtons from "./images/PrimaryButtons.png";
import { TitleSvg } from "./images/titlesvg.jsx";
import Codebox1 from "./codebox1";
import Codebox2 from "./codebox2";

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
            <h2>
              You can use CyberFuture`s custom styles for give some action to
              your boring components.
            </h2>
          </div>
          <div className="paragraph">
            <p></p>
          </div>
          <div className="paragraph">
            <h1>Buttons</h1>
            <h2>Primary buttons</h2>
          </div>
          <div className="paragraph"></div>
          <div className="paragraph">
            <img src={PrimaryButtons} alt="PrimaryButtons" width="100%" />
          </div>
          <Codebox2 />
          </section>
          
          {/* <div className="paragraph">
          <h1>Cards</h1>
              <h2>You can use CyberFuture`s custom cards that provide a flexible and extensible content for containers with multiple variants and options.</h2>
          </div> */}
          {/* <div className="Ground">
            <img src={BG} alt="Ground" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
