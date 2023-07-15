import "./App.css";
import React from "react";
import { useWindowSize } from "./useWindowSize";
import backgroundImage from "./image/background.png";
import title from "./image/title.png";
import webbuton from "./image/webbutton.png";
import telegrambutton from "./image/telegrambutton.png";
import twtbutton from "./image/twtbutton.png";
import marrketplace from "./image/marrketplace.png";
import pitchdeck from "./image/pitchdeck.png";
import wwhitpaper from "./image/wwhitpaper.png";
import gamebt from "./image/gamebt.png";
import squaretime from "./image/squaretime.png";
import connectbutton from "./image/connectbutton.png";

function App() {
  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
  const { ratio, rotate, marginLeft } = size;
  console.log("ratio::: ", ratio);
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: 3405 * ratio,
        width: 1920 * ratio,
        transform: `rotate(${rotate})`,
        marginLeft: marginLeft,
      }}
    >
      {/* <div
        className="background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: 3405 * ratio,
          width: 1920 * ratio,
        }}
      ></div> */}
      <img
        src={title}
        className="absolute"
        alt="title"
        style={{
          height: 234 * ratio,
          width: 1607 * ratio,
          top: 300 * ratio,
          left: 120 * ratio,
        }}
      />
      <p
        className="absolute text-center font-bold text-white"
        style={{
          fontSize: 36 * ratio,
          top: 700 * ratio,
          left: 200 * ratio,
        }}
      >
        GameFi Tap to Earn NFT, with a completely unique gameplay and
        money-making method,
        <br />
        promises to evoke a plethora of emotions for users
      </p>
      <a>
        <img
          src={webbuton}
          className="absolute"
          alt="webbuton"
          style={{
            height: 83 * ratio,
            width: 83 * ratio,
            top: 850 * ratio,
            left: 760 * ratio,
          }}
        />
      </a>
      <a>
        <img
          src={telegrambutton}
          className="absolute"
          alt="telegrambutton"
          style={{
            height: 83 * ratio,
            width: 83 * ratio,
            top: 850 * ratio,
            left: 890 * ratio,
          }}
        />
      </a>
      <a>
        <img
          src={twtbutton}
          className="absolute"
          alt="twtbutton"
          style={{
            height: 83 * ratio,
            width: 83 * ratio,
            top: 850 * ratio,
            left: 1030 * ratio,
          }}
        />
      </a>

      <a href="#">
        <img
          src={marrketplace}
          className="absolute"
          alt="marrketplace"
          style={{
            height: 100 * ratio,
            width: 359 * ratio,
            top: 900 * ratio,
            left: 150 * ratio,
          }}
        />
      </a>
      <a href="#">
        <img
          src={pitchdeck}
          className="absolute"
          alt="pitchdeck"
          style={{
            height: 100 * ratio,
            width: 359 * ratio,
            top: 870 * ratio,
            left: 1390 * ratio,
          }}
        />
      </a>
      <a href="#">
        <img
          src={wwhitpaper}
          className="absolute"
          alt="wwhitpaper"
          style={{
            height: 100 * ratio,
            width: 359 * ratio,
            top: 1030 * ratio,
            left: 150 * ratio,
          }}
        />
      </a>
      <a href="#">
        <img
          src={gamebt}
          className="absolute"
          alt="gamebt"
          style={{
            height: 100 * ratio,
            width: 359 * ratio,
            top: 1000 * ratio,
            left: 1390 * ratio,
          }}
        />
      </a>

      <p
        className="absolute font-bold text-white"
        style={{
          fontSize: 100 * ratio,
          top: 1990 * ratio,
          left: 710 * ratio,
        }}
      >
        START - IN
      </p>
      <img
        src={squaretime}
        className="absolute"
        alt="webbuton"
        style={{
          height: 129 * ratio,
          width: 758 * ratio,
          top: 2150 * ratio,
          left: 545 * ratio,
        }}
      />

      <a>
        <img
          src={connectbutton}
          className="absolute"
          alt="connectbutton"
          style={{
            height: 76 * ratio,
            width: 386 * ratio,
            top: 2600 * ratio,
            left: 760 * ratio,
          }}
        />
      </a>

      <p
        className="absolute font-bold text-white"
        style={{
          fontSize: 60 * ratio,
          top: 2730 * ratio,
          left: 670 * ratio,
        }}
      >
        VESTING SCHEDULE
      </p>
    </div>
  );
}

export default App;
