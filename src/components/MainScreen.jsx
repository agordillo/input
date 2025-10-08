import { useEffect, useRef, useState } from "react";
import "./../assets/scss/MainScreen.scss";

export default function MainScreen({ config }) {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const audioSwitchUp = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const aspectRatio = 16 / 9;
      let width = windowWidth * 0.9;
      let height = width / aspectRatio;

      if (height > windowHeight * 0.9) {
        height = windowHeight * 0.9;
        width = height * aspectRatio;
      }

      setSize({ width, height });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="MainScreen" className={"screen_wrapper"} style={{ backgroundImage: `url(${config.backgroundImg})` }}>
      <div class="input-container">
        <input class="input" name="text" type="text" placeholder="Search the internet..." />
      </div>

      {/* <audio ref={audioSwitchUp} id="audio_switch1" src={config.switchUpAudio} preload="auto" /> */}
    </div>
  );
}
