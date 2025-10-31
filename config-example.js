//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  backgroundImg: "", //background can be "NONE" or a URL.
  message: "introduce el valor correcto",
  errorMessage: "el valor es incorrecto",
  placeholder: "Custom placeholder...",
  autoWidth: false,
  width: "30",
  fontSize: 20,
  fontColor: "#ffffffff",
  xposition: "RIGHT", //LEFT, CENTER, RIGHT
  yposition: "BOTTOM", //CENTER, TOP, BOTTOM
  opacity: 1, // from 0 to 1

  //Settings that will be automatically specified by the Escapp server
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [8],
    rtc: false,
  },
};
