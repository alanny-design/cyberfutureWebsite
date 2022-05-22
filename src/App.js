import React from "react";
import BG from "./images/BG.svg";
import Titulo from "./title.js";
import SubTitulo from "./subtitle.js";
import "./App.css";

function App() {
  return (
    <>
      <div className="stars">
        <div className="twinkling">
          <Titulo />
          <SubTitulo />
          <div className="codebox">
            <pre>
              <code className="language-javascript">
                <span className="import-color">import </span>
                <span>&#10100;</span>
                <span className="imported-components-color">Button</span>
                <span>,</span>
                <span className="imported-components-color">Card</span>
                <span>&#10101; </span>
                <span className="import-color">from </span>
                <span>'Cyberfuture'</span>
                <br></br><br></br>
                <span >&lt;</span>
                <span className="components-color">Button </span>
                <span className="props-color">text</span>
                <span>='Button' </span>
                <span className="props-color">variant</span>
                <span>='Matrix' </span>
                <span className="props-color">color</span>
                <span>='Gold'</span>
                <span >/</span>
                <span >&gt;</span>
                <br></br>
                <span >&lt;</span>
                <span className="components-color">Button </span>
                <span className="props-color">text</span>
                <span>='Button' </span>
                <span className="props-color">variant</span>
                <span>='OutlinedCyberRose' </span>
                <span className="props-color">color</span>
                <span>='matrix'</span>
                <span >/</span>
                <span >&gt;</span>
              </code>
            </pre>
          </div>
          <div className="paragraph">
            <p>
              <h1>Buttons</h1>
              <h3>You can use CyberFuture`s custom button styles for give some action to
              your boring components.</h3>
            </p>
          </div>

          <div className="Ground">
            <img src={BG} alt="Ground" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
