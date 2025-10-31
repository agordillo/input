import { useContext, useEffect, useRef, useState } from "react";
import "./../assets/scss/MainScreen.scss";
import { GlobalContext } from "./GlobalContext";
import { XPOSITION, YPOSITION } from "../constants/constants";

export default function MainScreen({ config, sendInput }) {
  const { I18n } = useContext(GlobalContext);
  const inputRef = useRef(null);
  const [xposition, setXposition] = useState("CENTER");
  const [yposition, setYposition] = useState("CENTER");
  useEffect(() => {
    const input = inputRef.current;
    if (!input || !config.autoWidth) return;

    const handleInput = () => {
      const length = Math.max(input.value.length, config.placeholder.length);
      input.style.width = `${length}ch`;
    };

    handleInput();
    input.addEventListener("input", handleInput);

    return () => input.removeEventListener("input", handleInput);
  }, [config]);

  const handleSend = () => {
    const value = inputRef.current?.value;
    if (value) {
      sendInput(value);
      inputRef.current.value = "";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };
  useEffect(() => {
    switch (config.xposition) {
      case XPOSITION.LEFT:
        setXposition("flex-start");
        break;
      case XPOSITION.CENTER:
        setXposition("center");
        break;
      case XPOSITION.RIGHT:
        setXposition("flex-end");
        break;
    }
    switch (config.yposition) {
      case YPOSITION.TOP:
        setYposition("flex-start");
        break;
      case YPOSITION.CENTER:
        setYposition("center");
        break;
      case YPOSITION.BOTTOM:
        setYposition("flex-end");
        break;
    }
  }, [config]);

  return (
    <div
      id="MainScreen"
      className="screen_wrapper"
      style={{
        backgroundImage: `url(${config.backgroundImg})`,
        color: config.fontColor,
        justifyContent: xposition,
        alignItems: yposition,
        opacity: config.opacity,
      }}
    >
      <div
        className="content"
        style={{
          width: config.autoWidth ? "auto" : `${config.width}%`,
        }}
      >
        <p
          className="info"
          style={{
            fontSize: config.fontSize,
          }}
        >
          {config.message}
        </p>

        <div className="input-container">
          <input
            ref={inputRef}
            className="input"
            name="text"
            type="text"
            onKeyDown={handleKeyDown}
            style={{
              fontSize: config.fontSize,
              width: config.autoWidth ? "auto" : `100%`,
            }}
            placeholder={config.placeholder}
          />
          <button onClick={handleSend} style={{ fontSize: config.fontSize }}>
            {I18n.getTrans("i.send")}
          </button>
        </div>

        <p
          className="error"
          style={{
            fontSize: config.fontSize,
          }}
        >
          {config.errorMessage}
        </p>
      </div>
    </div>
  );
}
