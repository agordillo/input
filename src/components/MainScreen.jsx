import { useContext, useEffect, useRef } from "react";
import "./../assets/scss/MainScreen.scss";
import { GlobalContext } from "./GlobalContext";

export default function MainScreen({ config, sendInput }) {
  const { I18n } = useContext(GlobalContext);
  const inputRef = useRef(null);
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

  return (
    <div
      id="MainScreen"
      className="screen_wrapper"
      style={{ backgroundImage: `url(${config.backgroundImg})`, color: config.fontColor }}
    >
      <div>
        <p
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
              width: config.autoWidth ? "auto" : `${config.width}px`,
            }}
            placeholder={config.placeholder}
          />
          <button onClick={handleSend}>{I18n.getTrans("i.send")}</button>
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
