export const DEFAULT_APP_SETTINGS = {
  skin: "STANDARD",
  backgroundImg: "",
  message: "introduce el valor correcto",
  errorMessage: "el valor es incorrecto",
  placeholder: "Custom placeholder...",
  autoWidth: false,
  width: 800,
  fontSize: 20,
  fontColor: "#000",
};

export const THEMES = {
  STANDARD: "STANDARD",
  RETRO: "RETRO",
  FUTURISTIC: "FUTURISTIC",
};

export const THEME_ASSETS = {
  [THEMES.STANDARD]: {
    backgroundImg: "images/basic_bg.png",
    buttonAudio: "sounds/button.wav",
  },
  [THEMES.RETRO]: {
    backgroundImg: "images/retro_bg.png",
    torchAudio: "sounds/torch.wav",
  },
  [THEMES.FUTURISTIC]: {
    backgroundImg: "images/futuristic_bg.png",
    buttonAudio: "sounds/button.wav",
  },
};

export const ESCAPP_CLIENT_SETTINGS = {
  imagesPath: "./images/",
};
